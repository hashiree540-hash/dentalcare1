import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, AlertCircle } from 'lucide-react';
import { doctorsData } from '../data/doctors';
import { PageHeader } from '../components/PageHeader';
import { DoctorCard } from '../components/DoctorCard';
import { SEOHead } from '../components/SEOHead';
import { hospital } from '../config/hospital';

export const Doctors: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Our Dental Professionals"
        description="Meet the dedicated dental team at Dental Care in Malappuram, Kerala. Experienced dentists specializing in implantology, orthodontics, root canal therapy, and pediatric dentistry."
        schemaType="MedicalWebPage"
      />

      <PageHeader
        eyebrow="CLINICAL EXCELLENCE"
        title="Meet Our Dental Professionals"
        description="Our compassionate dental practitioners are dedicated to providing personalized oral healthcare, gentle treatments, and lasting clinical outcomes."
        breadcrumbs={[{ label: 'Our Doctors' }]}
      />

      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hospital Information Disclaimer Alert */}
          <div className="mb-10 p-5 rounded-2xl bg-white border border-borderSoft shadow-soft flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-maroon shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-charcoal space-y-1">
              <p className="font-bold text-maroon">
                Hospital Verification Notice
              </p>
              <p className="text-charcoal-muted leading-relaxed">
                Doctor profiles displayed below represent structured demonstration placeholders adhering to hospital confidentiality guidelines. Certified doctor credentials, registration numbers, and biographies will be updated directly by the {hospital.name} administration upon official publication.
              </p>
            </div>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctorsData.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>

          {/* Consultation CTA Card */}
          <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-borderSoft shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-serif text-2xl font-bold text-charcoal">
                Need guidance selecting a specialist?
              </h3>
              <p className="text-sm text-charcoal-muted max-w-xl">
                Our reception desk will happily understand your dental symptoms and book you with the most appropriate dental specialist.
              </p>
            </div>
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 bg-[#77CDFF] hover:bg-[#5bb8f5] text-[#07273F] font-bold px-6 py-3 rounded-xl shadow-sm transition-all shrink-0"
            >
              <Calendar className="w-4 h-4 text-[#07273F]" />
              <span>Book Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
