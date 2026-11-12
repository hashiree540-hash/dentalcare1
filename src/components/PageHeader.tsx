import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  badge?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  title,
  description,
  breadcrumbs,
  badge
}) => {
  return (
    <div className="relative bg-gradient-to-b from-maroon to-maroon-dark text-white py-14 md:py-20 overflow-hidden">
      {/* Subtle decorative background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C7A46A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-burgundy rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb nav */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-white/70">
            <li>
              <Link to="/" className="hover:text-gold-light flex items-center gap-1 transition-colors">
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
            </li>
            {breadcrumbs.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                {item.path ? (
                  <Link to={item.path} className="hover:text-gold-light transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gold-light font-medium">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Content */}
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/10 text-gold-light border border-white/15 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              <span>{eyebrow}</span>
            </div>
          )}

          <div className="flex items-center gap-3">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {title}
            </h1>
            {badge && (
              <span className="hidden sm:inline-block px-2.5 py-1 text-xs font-semibold uppercase tracking-wider bg-gold text-charcoal rounded-md">
                {badge}
              </span>
            )}
          </div>

          {description && (
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
