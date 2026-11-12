import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  lightMode?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  lightMode = false,
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`max-w-3xl mb-12 ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-3 ${
            lightMode
              ? 'bg-white/10 text-gold-light border border-white/15'
              : 'bg-maroon-50 text-maroon border border-maroon-100'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold tracking-tight leading-tight mb-4 ${
          lightMode ? 'text-white' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            lightMode ? 'text-white/80' : 'text-charcoal-muted'
          }`}
        >
          {description}
        </p>
      )}

      <div
        className={`mt-4 h-1 w-16 bg-gold rounded-full ${
          isCenter ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
};
