import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X, Calendar, Clock, MapPin, Mail } from 'lucide-react';
import { Logo } from './Logo';
import { hospital } from '../config/hospital';
import { treatmentsData } from '../data/treatments';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentsDropdownOpen, setTreatmentsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isHome = location.pathname === '/';
  const isTransparentOverlay = isHome && !isScrolled && !mobileMenuOpen;

  // Featured treatments for dropdown
  const featuredTreatments = treatmentsData.slice(0, 6);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setTreatmentsDropdownOpen(false);
  }, [location.pathname]);

  // Handle outside click for dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setTreatmentsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Doctors', path: '/doctors' },
    {
      label: 'Treatments',
      path: '/treatments',
      hasDropdown: true
    },
    { label: 'Facilities', path: '/facilities' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top micro announcement bar (shown on subpages for full utility; omitted over full-bleed home video hero) */}
      {!isHome && (
        <div className="bg-[#07273F] text-white/90 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-1.5 text-white/80">
                <MapPin className="w-3.5 h-3.5 text-[#77CDFF]" />
                <span>{hospital.location}</span>
              </span>
              <span className="flex items-center gap-1.5 text-white/80">
                <Clock className="w-3.5 h-3.5 text-[#77CDFF]" />
                <span>Mon – Sat: 9:00 AM – 7:30 PM</span>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href={`mailto:${hospital.email}`}
                className="text-white/80 hover:text-white transition-colors flex items-center gap-1.5"
                title="Email Dental Care"
              >
                <Mail className="w-3.5 h-3.5 text-[#77CDFF]" />
                <span>{hospital.email}</span>
              </a>
              <span className="text-white/30 hidden lg:inline">|</span>
              <a
                href={`tel:${hospital.phone}`}
                className="text-[#77CDFF] hover:text-white font-semibold transition-colors flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                <span>{hospital.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Sticky / Overlay Navbar */}
      <header
        className={`${
          isHome ? 'fixed top-0 left-0 right-0' : 'sticky top-0'
        } z-50 transition-all duration-300 ${
          isTransparentOverlay
            ? 'bg-gradient-to-b from-[#071E33]/80 via-[#071E33]/40 to-transparent py-5 border-b border-white/10'
            : isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-borderSoft py-3'
            : 'bg-white/90 backdrop-blur-md py-4 border-b border-borderSoft/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo */}
            <Logo variant={isTransparentOverlay ? 'dark' : 'light'} />

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  const isTreatmentsActive = location.pathname.startsWith('/treatments');
                  return (
                    <div
                      key={link.path}
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={() => setTreatmentsDropdownOpen(true)}
                      onMouseLeave={() => setTreatmentsDropdownOpen(false)}
                    >
                      <NavLink
                        to={link.path}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                          isTransparentOverlay
                            ? isTreatmentsActive
                              ? 'text-[#77CDFF] font-semibold bg-white/10'
                              : 'text-white/90 hover:text-white hover:bg-white/10'
                            : isTreatmentsActive
                            ? 'text-maroon font-semibold bg-maroon-50'
                            : 'text-charcoal hover:text-maroon hover:bg-ivory'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            treatmentsDropdownOpen
                              ? isTransparentOverlay
                                ? 'rotate-180 text-[#77CDFF]'
                                : 'rotate-180 text-maroon'
                              : isTransparentOverlay
                              ? 'text-white/70'
                              : 'text-charcoal-muted'
                          }`}
                        />
                      </NavLink>

                      {/* Treatments Dropdown Menu */}
                      {treatmentsDropdownOpen && (
                        <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-card border border-borderSoft p-3 mt-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                          <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted px-3 py-1.5">
                            Featured Treatments
                          </div>
                          <div className="space-y-1">
                            {featuredTreatments.map((t) => (
                              <Link
                                key={t.slug}
                                to={`/treatments/${t.slug}`}
                                className="block px-3 py-2 text-sm text-charcoal hover:text-maroon hover:bg-maroon-50 rounded-lg transition-colors"
                              >
                                <div className="font-medium">{t.title}</div>
                                <div className="text-xs text-charcoal-muted line-clamp-1">
                                  {t.shortDescription}
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="border-t border-borderSoft mt-2 pt-2 px-3">
                            <Link
                              to="/treatments"
                              className="inline-flex items-center text-xs font-semibold text-maroon hover:text-burgundy transition-colors"
                            >
                              Explore All 15 Treatments &rarr;
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                        isTransparentOverlay
                          ? isActive
                            ? 'text-[#77CDFF] font-semibold bg-white/10'
                            : 'text-white/90 hover:text-white hover:bg-white/10'
                          : isActive
                          ? 'text-maroon font-semibold bg-maroon-50'
                          : 'text-charcoal hover:text-maroon hover:bg-ivory'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                );
              })}
            </nav>

            {/* Right: Phone CTA & Book Appointment Button */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={`tel:${hospital.phone}`}
                className={`hidden xl:inline-flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-lg transition-colors ${
                  isTransparentOverlay
                    ? 'text-white hover:text-[#77CDFF] hover:bg-white/10'
                    : 'text-maroon hover:text-burgundy hover:bg-maroon-50'
                }`}
                aria-label={`Call ${hospital.name} at ${hospital.displayPhone}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isTransparentOverlay
                      ? 'bg-white/15 text-[#77CDFF]'
                      : 'bg-maroon-100 text-maroon'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                </div>
                <span>{hospital.displayPhone}</span>
              </a>

              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 bg-[#77CDFF] hover:bg-[#5bb8f5] text-[#07273F] px-4 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-all duration-200 active:scale-95"
              >
                <Calendar className="w-4 h-4 text-[#07273F]" />
                <span>Book Appointment</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <Link
                to="/appointment"
                className="inline-flex sm:hidden items-center gap-1 bg-[#77CDFF] text-[#07273F] px-3 py-1.5 rounded-lg text-xs font-bold"
              >
                <Calendar className="w-3.5 h-3.5 text-[#07273F]" />
                <span>Book</span>
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#77CDFF] transition-colors ${
                  isTransparentOverlay
                    ? 'text-white hover:bg-white/15'
                    : 'text-charcoal hover:text-maroon hover:bg-ivory'
                }`}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-borderSoft shadow-xl animate-in slide-in-from-top duration-200">
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'text-maroon font-semibold bg-maroon-50'
                        : 'text-charcoal hover:text-maroon hover:bg-ivory'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <div className="pt-4 border-t border-borderSoft space-y-3">
                <a
                  href={`tel:${hospital.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-maroon text-maroon font-semibold text-sm hover:bg-maroon-50 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {hospital.displayPhone}</span>
                </a>

                <Link
                  to="/appointment"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#77CDFF] text-[#07273F] font-bold text-sm hover:bg-[#5bb8f5] shadow-sm transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#07273F]" />
                  <span>Book an Appointment</span>
                </Link>
              </div>

              <div className="pt-2 text-center text-xs text-charcoal-muted space-y-1">
                <a
                  href={`mailto:${hospital.email}`}
                  className="inline-flex items-center gap-1.5 text-maroon hover:underline font-medium"
                >
                  <Mail className="w-3.5 h-3.5 text-maroon" />
                  <span>{hospital.email}</span>
                </a>
                <p>{hospital.location}</p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
