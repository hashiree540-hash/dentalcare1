import React from 'react';
import { Link } from 'react-router-dom';
import { hospital } from '../config/hospital';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  className = '',
  showSubtitle = true
}) => {
  const isDark = variant === 'dark';

  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77CDFF] rounded-lg ${className}`}
      aria-label={`${hospital.name} Home`}
    >
      {/* Minimal stylized dental tooth icon with #77CDFF sky blue accent curve */}
      <div className={`relative flex items-center justify-center w-11 h-11 rounded-xl transition-transform duration-300 group-hover:scale-105 shadow-sm ${
        isDark ? 'bg-white/10 ring-1 ring-white/20' : 'bg-maroon-50 ring-1 ring-maroon/15'
      }`}>
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
        >
          {/* Tooth crown & roots outline */}
          <path
            d="M18 5C12.5 5 8 8.5 8 14.5C8 19.5 10 25.5 12.5 30.5C14 33 15.5 33 16.5 29.5C17.5 26 18 22 18 22C18 22 18.5 26 19.5 29.5C20.5 33 22 33 23.5 30.5C26 25.5 28 19.5 28 14.5C28 8.5 23.5 5 18 5Z"
            fill={isDark ? '#FFFFFF' : '#0284C7'}
          />
          {/* Vibrant sky blue enamel shine arc in #77CDFF */}
          <path
            d="M13.5 13C14.5 10.5 16 9.5 18 9.5C20 9.5 21.5 10.5 22.5 13"
            stroke="#77CDFF"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Subtle lower core smile curve */}
          <path
            d="M15 17.5C16 19 20 19 21 17.5"
            stroke={isDark ? '#07273F' : '#FFFFFF'}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span className={`font-serif text-xl md:text-2xl font-bold tracking-tight leading-tight ${
          isDark ? 'text-white' : 'text-charcoal'
        }`}>
          DENTAL <span className={isDark ? 'text-[#77CDFF]' : 'text-[#0284C7]'}>CARE</span>
        </span>
        {showSubtitle && (
          <span className={`text-[10px] uppercase tracking-[0.22em] font-semibold ${
            isDark ? 'text-[#77CDFF]' : 'text-[#0284C7]'
          }`}>
            Malappuram, Kerala
          </span>
        )}
      </div>
    </Link>
  );
};
