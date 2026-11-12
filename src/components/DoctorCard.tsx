import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Clock } from 'lucide-react';
import { Doctor } from '../types';

interface DoctorCardProps {
  doctor: Doctor;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-borderSoft hover:border-maroon/30 shadow-card hover:shadow-card-hover transition-all duration-300">
      {/* Portrait container */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-ivory">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

        {/* Placeholder disclaimer tag */}
        {doctor.isPlaceholder && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-maroon text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-sm border border-maroon/20">
            Hospital Information Required
          </div>
        )}

        {/* Experience badge */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <span className="flex items-center gap-1 font-medium bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md">
            <Award className="w-3.5 h-3.5 text-gold-light" />
            <span>{doctor.experienceYears}</span>
          </span>
          <span className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md">
            <Clock className="w-3.5 h-3.5 text-gold-light" />
            <span>Consultation Available</span>
          </span>
        </div>
      </div>

      {/* Doctor Info */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-xs uppercase tracking-wider font-semibold text-gold-dark mb-1">
            {doctor.specialization}
          </div>
          <h3 className="font-serif text-xl font-bold text-charcoal group-hover:text-maroon transition-colors">
            {doctor.name}
          </h3>
          <p className="text-xs text-charcoal-muted font-medium mt-1 mb-3">
            {doctor.qualification}
          </p>
          <p className="text-sm text-charcoal-muted leading-relaxed line-clamp-3 mb-6">
            {doctor.shortBio}
          </p>
        </div>

        <div className="pt-4 border-t border-borderSoft flex items-center justify-between">
          <Link
            to={`/doctors/${doctor.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-maroon group-hover:text-burgundy transition-colors"
          >
            <span>View Profile</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <span className="text-xs text-charcoal-muted">Dental Care</span>
        </div>
      </div>
    </div>
  );
};
