import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { hospital } from '../config/hospital';

gsap.registerPlugin(ScrollTrigger);

const DESKTOP_VIDEO_URL = '/videos/Dentist_treating_patient_in_clinic_f175d9b9_1080p.mp4';
const MOBILE_VIDEO_URL = '/videos/Dentist_treating_patient_in_clinic_720p.mp4';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  // Initial video source: use lightweight 720p on mobile to avoid downloading 1080p asset
  const isInitialMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const initialVideoSrc = isInitialMobile ? MOBILE_VIDEO_URL : DESKTOP_VIDEO_URL;

  useLayoutEffect(() => {
    const heroEl = heroRef.current;
    const videoEl = videoRef.current;
    const contentEl = contentRef.current;
    const headingEl = headingRef.current;
    const ctaEl = ctaRef.current;
    const scrollCueEl = scrollCueRef.current;

    if (!heroEl || !videoEl || !contentEl || !headingEl || !ctaEl) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set([headingEl, ctaEl, contentEl], { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const isMobileViewport = window.innerWidth < 768;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const isTouchDevice = isMobileViewport || isCoarsePointer;

    // Mobile frame delta threshold avoids seeks smaller than ~1 video frame (0.033s)
    const frameDeltaThreshold = isTouchDevice ? 0.033 : 0.014;
    const activeVideoUrl = isMobileViewport ? MOBILE_VIDEO_URL : DESKTOP_VIDEO_URL;
    const abortController = new AbortController();

    let ctx: gsap.Context | null = null;
    let rafId: number | null = null;
    let blobUrl: string | null = null;
    let isUnmounted = false;
    let isUnlocked = false;
    let fallbackMode = false;

    // Mutable scrub state (zero React state updates during scroll)
    let videoDuration = videoEl.duration && Number.isFinite(videoEl.duration) ? videoEl.duration : 0;
    let targetTime = 0;
    let lastRequestedSeek = -1;
    let seekStartTimestamp = 0;
    let slowSeekCount = 0;

    // Unlock / warm up video hardware decoder (crucial for mobile Safari & Android touch scrubbing)
    const unlockVideo = () => {
      if (isUnlocked || !videoEl || isUnmounted) return;
      isUnlocked = true;
      const playPromise = videoEl.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            if (!fallbackMode && videoEl) {
              videoEl.pause();
            }
          })
          .catch(() => {
            // Autoplay restrictions or low-power mode handled safely
          });
      }
    };

    window.addEventListener('touchstart', unlockVideo, { once: true, passive: true });
    window.addEventListener('wheel', unlockVideo, { once: true, passive: true });
    window.addEventListener('scroll', unlockVideo, { once: true, passive: true });

    // Synchronize video currentTime strictly inside requestAnimationFrame with seeking guard
    const syncVideoFrame = () => {
      rafId = null;
      if (isUnmounted || fallbackMode || videoDuration <= 0) return;

      if (videoEl.readyState >= 2 && !videoEl.seeking) {
        const diff = Math.abs(targetTime - videoEl.currentTime);
        const seekDiff = Math.abs(targetTime - lastRequestedSeek);

        if (diff > frameDeltaThreshold && seekDiff > 0.01) {
          lastRequestedSeek = targetTime;
          seekStartTimestamp = performance.now();
          videoEl.currentTime = targetTime;
        }
      }

      // Continue RAF loop only if video still needs to catch up to targetTime
      if (Math.abs(targetTime - videoEl.currentTime) > frameDeltaThreshold) {
        rafId = requestAnimationFrame(syncVideoFrame);
      }
    };

    const scheduleFrameSync = () => {
      if (rafId === null && !isUnmounted && !fallbackMode) {
        rafId = requestAnimationFrame(syncVideoFrame);
      }
    };

    // Monitor seek completion to immediately process any queued targetTime & detect slow mobile decoders
    const handleSeeked = () => {
      if (seekStartTimestamp > 0) {
        const seekLatency = performance.now() - seekStartTimestamp;
        seekStartTimestamp = 0;

        // Graceful fallback if an ultra low-power mobile device consistently stalls (>350ms per frame seek)
        if (isTouchDevice && seekLatency > 350) {
          slowSeekCount += 1;
          if (slowSeekCount >= 4) {
            fallbackMode = true;
            videoEl.loop = true;
            videoEl.play().catch(() => {});
            return;
          }
        } else {
          slowSeekCount = 0;
        }
      }

      if (Math.abs(targetTime - videoEl.currentTime) > frameDeltaThreshold) {
        scheduleFrameSync();
      }
    };

    videoEl.addEventListener('seeked', handleSeeked);

    // Pre-buffer video into memory as a Blob URL so seeking never hits network/range stalls
    const bufferVideoInMemory = async () => {
      try {
        const response = await fetch(activeVideoUrl, { signal: abortController.signal });
        if (!response.ok) return;
        const blob = await response.blob();
        if (isUnmounted) return;

        blobUrl = URL.createObjectURL(blob);
        const resumeTime = videoEl.currentTime || targetTime;

        const restoreTimeOnSwap = () => {
          if (isUnmounted) return;
          if (videoEl.duration && Number.isFinite(videoEl.duration)) {
            videoDuration = videoEl.duration;
          }
          try {
            videoEl.currentTime = Math.min(resumeTime, videoDuration || resumeTime);
          } catch {
            // Ignore seek clamp errors
          }
          unlockVideo();
        };

        videoEl.addEventListener('loadedmetadata', restoreTimeOnSwap, { once: true });
        videoEl.src = blobUrl;
        videoEl.load();
      } catch {
        // Direct URL streaming remains active if fetch is aborted or unavailable
      }
    };

    bufferVideoInMemory();

    // Initialize GSAP entrance + single pinned ScrollTrigger once metadata is ready
    const initTimeline = () => {
      if (isUnmounted || ctx) return;

      if (videoEl.duration && Number.isFinite(videoEl.duration)) {
        videoDuration = videoEl.duration;
      }

      // Paint initial frame cleanly
      try {
        if (videoEl.currentTime === 0) {
          videoEl.currentTime = 0.001;
        }
      } catch {
        // Ignore
      }

      ctx = gsap.context(() => {
        // Smooth initial entrance animations
        gsap.fromTo(
          headingEl,
          { opacity: 0, y: isTouchDevice ? 20 : 28, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 1.15, ease: 'power3.out', delay: 0.1 }
        );

        gsap.fromTo(
          ctaEl,
          { opacity: 0, y: isTouchDevice ? 16 : 22, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: 'power3.out', delay: 0.3 }
        );

        // Proxy value smoothed by GSAP ScrollTrigger scrub
        const scrubState = { progress: 0 };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroEl,
            start: 'top top',
            // Mobile uses a responsive 140% pin to feel natural on touch scrolls; desktop retains 200%
            end: isTouchDevice ? '+=140%' : '+=200%',
            pin: true,
            // Mobile scrub 0.8 smoothly absorbs finger flick deceleration; desktop retains 0.5
            scrub: isTouchDevice ? 0.8 : 0.5,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Single scrubbed proxy tween -> updates targetTime & triggers RAF sync (never seeks directly in scroll handler)
        tl.to(
          scrubState,
          {
            progress: 1,
            ease: 'none',
            duration: 1,
            onUpdate: () => {
              if (videoDuration > 0 && !fallbackMode) {
                targetTime = Math.min(Math.max(scrubState.progress * videoDuration, 0.001), videoDuration - 0.02);
                scheduleFrameSync();
              }
            },
          },
          0
        );

        // Synchronized fade out & subtle lift of centered heading + CTA buttons
        tl.to(
          contentEl,
          {
            opacity: 0,
            y: isTouchDevice ? -40 : -60,
            scale: 0.96,
            ease: 'power2.inOut',
            duration: 0.55,
          },
          0
        );

        // Fade out bottom scroll indicator immediately on scroll
        if (scrollCueEl) {
          tl.to(
            scrollCueEl,
            {
              opacity: 0,
              y: 12,
              ease: 'power1.out',
              duration: 0.15,
            },
            0
          );
        }
      }, heroEl);

      ScrollTrigger.refresh();
    };

    const handleInitialMetadata = () => {
      initTimeline();
      unlockVideo();
    };

    if (videoEl.readyState >= 1 && videoEl.duration && Number.isFinite(videoEl.duration)) {
      initTimeline();
      unlockVideo();
    } else {
      videoEl.addEventListener('loadedmetadata', handleInitialMetadata, { once: true });
    }

    return () => {
      isUnmounted = true;
      abortController.abort();
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      videoEl.removeEventListener('loadedmetadata', handleInitialMetadata);
      videoEl.removeEventListener('seeked', handleSeeked);
      window.removeEventListener('touchstart', unlockVideo);
      window.removeEventListener('wheel', unlockVideo);
      window.removeEventListener('scroll', unlockVideo);

      if (ctx) {
        ctx.revert();
      }
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === heroEl) {
          st.kill(true);
        }
      });

      if (blobUrl) {
        URL.revokeObjectURL(blobUrl);
      }
    };
  }, []);

  return (
    /* Outer wrapper ensures GSAP's pin-spacer never mutates the direct React root node of <Hero /> */
    <div className="relative w-full max-w-full overflow-hidden">
      <section
        ref={heroRef}
        className="relative w-full h-screen h-[100dvh] min-h-[560px] sm:min-h-[600px] overflow-hidden bg-[#071E33]"
        aria-label="Dental Care Hero"
      >
        {/*
          Full-Screen Dental Treatment Video Background
          - Mobile focal positioning: object-[44%_center] centers both dentist and patient cleanly
          - Desktop / tablet: sm:object-center retains original desktop alignment
        */}
        <video
          ref={videoRef}
          src={initialVideoSrc}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-[44%_center] sm:object-center pointer-events-none select-none transform-gpu will-change-transform"
        />

        {/* Subtle dark gradient overlay for luxury mood & crisp white text contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#071E33]/60 via-black/45 to-[#071E33]/75 pointer-events-none"
          aria-hidden="true"
        />

        {/* Subtle radial vignette */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(7,30,51,0.5)_100%)] pointer-events-none"
          aria-hidden="true"
        />

        {/* Centered Content Overlay */}
        <div
          ref={contentRef}
          className="relative z-10 h-full max-w-5xl mx-auto px-5 sm:px-8 flex flex-col items-center justify-center text-center pt-8 sm:pt-12 will-change-[transform,opacity]"
        >
          {/*
            Main Luxury Serif Heading
            - clamp(2.1rem, 6.5vw, 4.5rem) smoothly scales from 33.6px on mobile (fits 2 lines, no overflow)
              up to 72px (lg:text-7xl) on desktop, preserving desktop exact sizing
          */}
          <h1
            ref={headingRef}
            className="font-serif text-[clamp(2.1rem,6.5vw,4.5rem)] font-bold text-white tracking-[0.025em] leading-[1.18] sm:leading-[1.15] drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)] max-w-4xl px-2 break-words"
          >
            The Art of the Perfect Smile
          </h1>

          {/* Subtle decorative hairline accent in #77CDFF */}
          <div className="w-16 h-[2px] bg-[#77CDFF]/80 rounded-full mt-5 sm:mt-6 mb-2" aria-hidden="true" />

          {/*
            CTA Buttons
            - Side-by-side on sm+ (>=640px)
            - Vertically stacked on narrow screens (<640px) with touch-friendly min-h-[46px] (>44px requirement)
            - Preserves exact actions, links, and styling
          */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mt-6 sm:mt-8 w-full max-w-xs sm:max-w-none"
          >
            {/* Button 1: WhatsApp Us */}
            <a
              href={hospital.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${hospital.name} at ${hospital.displayPhone}`}
              className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2.5 bg-white/5 hover:bg-white/15 text-white border border-white/80 hover:border-white backdrop-blur-sm rounded-full px-7 py-3 text-sm sm:text-base font-medium tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-sm"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-[#25D366] shrink-0"
                aria-hidden="true"
              >
                <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.469 3.484 1.344 5L2 22l5.125-1.344c1.469.797 3.125 1.219 4.906 1.219 5.516 0 9.969-4.453 9.969-9.969C22 6.453 17.547 2 12.031 2zm5.813 14.125c-.25.703-1.438 1.344-1.984 1.422-.516.078-1.156.109-1.875-.125-.438-.141-1-.328-1.719-.641-3.016-1.297-4.984-4.344-5.141-4.547-.141-.203-1.219-1.625-1.219-3.094 0-1.469.766-2.188 1.047-2.484.266-.297.594-.375.797-.375.203 0 .391.016.563.016.188 0 .422-.078.656.5.25.594.844 2.047.922 2.203.078.156.125.328.016.531-.094.203-.156.328-.313.5-.141.172-.313.391-.438.516-.141.156-.297.313-.125.609.172.297.766 1.266 1.641 2.047 1.125 1 2.078 1.313 2.375 1.453.297.141.469.125.641-.078.172-.203.75-.875.953-1.172.203-.297.391-.25.672-.141.281.094 1.766.828 2.063.984.297.141.5.219.578.344.078.125.078.719-.172 1.422z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>

            {/* Button 2: Book Your Appointment */}
            <Link
              to="/appointment"
              className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2.5 bg-[#77CDFF] hover:bg-white text-[#07273F] font-semibold rounded-full px-7 py-3 text-sm sm:text-base tracking-wide shadow-[0_8px_30px_rgba(119,205,255,0.35)] hover:shadow-[0_10px_35px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-[1.03] active:scale-95"
            >
              <Calendar className="w-4 h-4 text-[#07273F] shrink-0" />
              <span>Book Your Appointment</span>
            </Link>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div
          ref={scrollCueRef}
          className="absolute bottom-6 sm:bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/75 pointer-events-none"
        >
          <span className="text-[10px] uppercase tracking-[0.28em] font-medium">
            Scroll to Explore
          </span>
          <ChevronDown className="w-4 h-4 text-[#77CDFF] animate-bounce" />
        </div>
      </section>
    </div>
  );
};
