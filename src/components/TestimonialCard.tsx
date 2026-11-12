import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-7 border border-borderSoft shadow-soft hover:shadow-card transition-all duration-300 relative">
      <div className="absolute top-6 right-6 text-gold-muted">
        <Quote className="w-9 h-9 stroke-[1.2]" />
      </div>

      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-4" aria-label={`Rating ${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating ? 'fill-gold text-gold' : 'text-borderSoft'
              }`}
            />
          ))}
          <span className="text-xs font-semibold text-charcoal ml-1.5">
            {testimonial.rating}.0
          </span>
        </div>

        {/* Comment */}
        <p className="text-sm sm:text-base text-charcoal leading-relaxed mb-6 italic">
          "{testimonial.comment}"
        </p>
      </div>

      <div className="pt-4 border-t border-borderSoft">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-sm text-charcoal">
              {testimonial.name}
            </h4>
            <div className="text-xs text-charcoal-muted">
              {testimonial.treatment} • {testimonial.location}
            </div>
          </div>
        </div>

        {testimonial.isDemonstration && (
          <div className="mt-3 text-[10px] text-maroon font-medium uppercase tracking-wider bg-maroon-50 px-2 py-0.5 rounded inline-block border border-maroon-100">
            Demonstration Content • Pending Verified Patient Reviews
          </div>
        )}
      </div>
    </div>
  );
};
