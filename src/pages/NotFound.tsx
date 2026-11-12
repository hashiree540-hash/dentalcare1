import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Calendar, Search } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { hospital } from '../config/hospital';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found (404)"
        description="The page you requested could not be found on Dental Care's website."
      />

      <section className="min-h-[70vh] flex items-center justify-center py-20 bg-ivory">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-maroon-50 text-maroon border border-maroon-100">
            <span>ERROR 404</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl font-bold text-maroon tracking-tight">
            404
          </h1>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
            Page Not Found
          </h2>

          <p className="text-sm sm:text-base text-charcoal-muted max-w-md mx-auto leading-relaxed">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable. We invite you to explore our dental treatments or return to the homepage.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-maroon hover:bg-burgundy text-white font-semibold px-6 py-3 rounded-xl shadow-sm transition-all"
            >
              <Home className="w-4 h-4 text-gold-light" />
              <span>Return to Home</span>
            </Link>

            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 bg-white hover:bg-ivory text-charcoal font-semibold px-6 py-3 rounded-xl border border-borderSoft shadow-soft transition-all"
            >
              <Search className="w-4 h-4 text-maroon" />
              <span>Explore Treatments</span>
            </Link>

            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 bg-white hover:bg-ivory text-maroon font-semibold px-6 py-3 rounded-xl border border-borderSoft shadow-soft transition-all"
            >
              <Calendar className="w-4 h-4 text-maroon" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
