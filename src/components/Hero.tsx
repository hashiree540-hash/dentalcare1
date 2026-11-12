import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { hospital } from '../config/hospital';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

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

    let ctx: gsap.Context | null = null;
    let isUnlocked = false;
    let isUnmounted = false;

    // Unlock video decoder on first user interaction for mobile/Safari smooth scrubbing
    const unlockVideo = () => {
      if (isUnlocked || !videoEl || isUnmounted) return;
      isUnlocked = true;
      videoEl
        .play()
        .then(() => {
          videoEl.pause();
        })
        .catch(() => {
          // Ignore play interruption errors
        });
    };

    window.addEventListener('touchstart', unlockVideo, { once: true, passive: true });
    window.addEventListener('wheel', unlockVideo, { once: true, passive: true });

    const setupAnimations = () => {
      if (isUnmounted) return;

      const duration = videoEl.duration && Number.isFinite(videoEl.duration) ? videoEl.duration : 6;

      // Ensure initial frame is painted
      try {
        videoEl.currentTime = 0.01;
      } catch {
        // Ignore if not seekable yet
      }

      if (ctx) {
        ctx.revert();
      }

      ctx = gsap.context(() => {
        // Initial entrance animation on inner elements
        gsap.fromTo(
          headingEl,
          { opacity: 0, y: 28, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 1.15, ease: 'power3.out', delay: 0.1 }
        );

        gsap.fromTo(
          ctaEl,
          { opacity: 0, y: 22, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: 'power3.out', delay: 0.3 }
        );

        // Scroll-driven video scrub + synchronized exit animation
        const videoProgress = { time: 0 };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroEl,
            start: 'top top',
            end: '+=200%',
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        });

        // Progressively scrub video playback across entire scroll range
        tl.to(
          videoProgress,
          {
            time: duration,
            ease: 'none',
            duration: 1,
            onUpdate: () => {
              if (videoEl.readyState >= 2 && Number.isFinite(videoProgress.time)) {
                videoEl.currentTime = videoProgress.time;
              }
            }
          },
          0
        );

        // Gradually fade out & lift heading + CTA buttons synchronously with scroll
        tl.to(
          contentEl,
          {
            opacity: 0,
            y: -60,
            scale: 0.96,
            ease: 'power2.inOut',
            duration: 0.55
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
              duration: 0.15
            },
            0
          );
        }
      }, heroEl);
    };

    const handleLoadedMetadata = () => {
      setupAnimations();
      ScrollTrigger.refresh();
    };

    if (videoEl.readyState >= 1) {
      setupAnimations();
    } else {
      // Initialize UI entrance & ScrollTrigger right away, then update duration once metadata loads
      setupAnimations();
      videoEl.addEventListener('loadedmetadata', handleLoadedMetadata, { once: true });
    }

    return () => {
      isUnmounted = true;
      videoEl.removeEventListener('loadedmetadata', handleLoadedMetadata);
      window.removeEventListener('touchstart', unlockVideo);
      window.removeEventListener('wheel', unlockVideo);
      if (ctx) {
        ctx.revert();
      }
      // Ensure any lingering ScrollTrigger pins for this hero are killed cleanly
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === heroEl) {
          st.kill(true);
        }
      });
    };
  }, []);

  return (
    /* Outer wrapper ensures GSAP's pin-spacer never mutates the direct React root node of <Hero /> */
    <div className="relative w-full">
      <section
        ref={heroRef}
        className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#071E33]"
        aria-label="Dental Care Hero"
      >
        {/* Full-Screen Uploaded Dental Treatment Video Background */}
        <video
          ref={videoRef}
          src="/videos/Dentist_treating_patient_in_clinic_f175d9b9_1080p.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
        />

        {/* Subtle dark gradient overlay for luxury mood & crisp white text contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#071E33]/55 via-black/45 to-[#071E33]/75 pointer-events-none"
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
          className="relative z-10 h-full max-w-5xl mx-auto px-5 sm:px-8 flex flex-col items-center justify-center text-center pt-12"
        >
          {/* Main Luxury Serif Heading */}
          <h1
            ref={headingRef}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-[0.025em] leading-[1.15] drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)] max-w-4xl"
          >
            The Art of the Perfect Smile
          </h1>

          {/* Subtle decorative hairline accent in #77CDFF */}
          <div className="w-16 h-[2px] bg-[#77CDFF]/80 rounded-full mt-6 mb-2" aria-hidden="true" />

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 sm:mt-8 w-full sm:w-auto"
          >
            {/* Button 1: WhatsApp Us */}
            <a
              href={hospital.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${hospital.name} at ${hospital.displayPhone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/5 hover:bg-white/15 text-white border border-white/80 hover:border-white backdrop-blur-sm rounded-full px-8 py-3.5 text-sm sm:text-base font-medium tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-sm"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-[#25D366]"
                aria-hidden="true"
              >
                <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.469 3.484 1.344 5L2 22l5.125-1.344c1.469.797 3.125 1.219 4.906 1.219 5.516 0 9.969-4.453 9.969-9.969C22 6.453 17.547 2 12.031 2zm5.813 14.125c-.25.703-1.438 1.344-1.984 1.422-.516.078-1.156.109-1.875-.125-.438-.141-1-.328-1.719-.641-3.016-1.297-4.984-4.344-5.141-4.547-.141-.203-1.219-1.625-1.219-3.094 0-1.469.766-2.188 1.047-2.484.266-.297.594-.375.797-.375.203 0 .391.016.563.016.188 0 .422-.078.656.5.25.594.844 2.047.922 2.203.078.156.125.328.016.531-.094.203-.156.328-.313.5-.141.172-.313.391-.438.516-.141.156-.297.313-.125.609.172.297.766 1.266 1.641 2.047 1.125 1 2.078 1.313 2.375 1.453.297.141.469.125.641-.078.172-.203.75-.875.953-1.172.203-.297.391-.25.672-.141.281.094 1.766.828 2.063.984.297.141.5.219.578.344.078.125.078.719-.172 1.422z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>

            {/* Button 2: Book Your Appointment */}
            <Link
              to="/appointment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#77CDFF] hover:bg-white text-[#07273F] font-semibold rounded-full px-8 py-3.5 text-sm sm:text-base tracking-wide shadow-[0_8px_30px_rgba(119,205,255,0.35)] hover:shadow-[0_10px_35px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-[1.03] active:scale-95"
            >
              <Calendar className="w-4 h-4 text-[#07273F]" />
              <span>Book Your Appointment</span>
            </Link>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div
          ref={scrollCueRef}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/75 pointer-events-none"
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
