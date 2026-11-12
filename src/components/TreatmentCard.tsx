import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Treatment } from '../types';

interface TreatmentCardProps {
  treatment: Treatment;
}

export const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment }) => {
  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-borderSoft hover:border-maroon/30 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
      {/* Image container */}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-ivory">
        <img
          src={treatment.cardImage}
          alt={treatment.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-maroon border border-borderSoft shadow-sm">
          {treatment.category}
        </div>

        {treatment.isFeatured && (
          <div className="absolute top-3 right-3 bg-[#77CDFF] text-[#07273F] px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1 shadow-sm">
            <Sparkles className="w-3 h-3 text-[#07273F]" />
            <span>Featured</span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl font-bold text-charcoal group-hover:text-maroon transition-colors mb-2.5">
            {treatment.title}
          </h3>
          <p className="text-sm text-charcoal-muted leading-relaxed line-clamp-3 mb-6">
            {treatment.shortDescription}
          </p>
        </div>

        {/* CTA link */}
        <div className="pt-4 border-t border-borderSoft flex items-center justify-between">
          <Link
            to={`/treatments/${treatment.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-maroon group-hover:text-burgundy transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <span className="text-xs text-charcoal-muted">Malappuram Clinic</span>
        </div>
      </div>
    </div>
  );
};
