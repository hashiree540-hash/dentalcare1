import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  ShieldCheck,
  Sparkles,
  Camera,
  Activity,
  Heart,
  Smile,
  AlertCircle
} from 'lucide-react';
import { hospital } from '../config/hospital';
import { PageHeader } from '../components/PageHeader';
import { SEOHead } from '../components/SEOHead';
import { SectionHeading } from '../components/SectionHeading';

export const Facilities: React.FC = () => {
  const facilitySections = [
    {
      id: 'treatment-rooms',
      title: 'Dental Treatment Rooms (Operatories)',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
      description: 'Our operatories feature modern dental chairs engineered for ergonomic patient comfort, shadow-free surgical lighting, and integrated suction systems designed to keep every appointment comfortable and calm.'
    },
    {
      id: 'consultation-rooms',
      title: 'Private Consultation Spaces',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
      description: 'Dedicated one-on-one consultation suites where patients can discuss diagnostic findings, review digital scans, and explore customized treatment pathways in complete privacy.'
    },
    {
      id: 'waiting-area',
      title: 'Comfortable Waiting Lounge',
      icon: Smile,
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
      description: 'A soothing, tranquil environment featuring comfortable seating, air-conditioned spaces, and gentle ambient music to ensure a restful atmosphere before your consultation.'
    },
    {
      id: 'digital-imaging',
      title: 'Digital Imaging & Low-Radiation Radiography',
      icon: Camera,
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
      description: 'Modern digital intraoral sensors providing rapid, high-clarity diagnostic views with significantly minimized radiation exposure compared to conventional dental film.'
    },
    {
      id: 'sterilization-unit',
      title: 'Hospital-Grade Sterilization Protocols',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
      description: 'Our sterilization department adheres to rigorous multi-barrier protocols including ultrasonic bath cleaning, autoclave vacuum sterilization, chemical indicator verification, and sealed pouch storage.'
    },
    {
      id: 'patient-comfort',
      title: 'Patient Comfort Amenities',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
      description: 'From gentle topical anesthetics that numb before injections to child-friendly welcoming touches, our facilities are designed to eliminate dental apprehension.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Modern Dental Hospital Facilities"
        description="Explore the clinic infrastructure, treatment operatories, digital imaging, and hospital-grade sterilization at Dental Care in Malappuram, Kerala."
        schemaType="MedicalWebPage"
      />

      <PageHeader
        eyebrow="CLINICAL INFRASTRUCTURE"
        title="Comfort, Care and a Welcoming Environment"
        description="Step into our modern dental hospital designed around patient comfort, rigorous hygiene protocols, and advanced restorative dentistry in Malappuram."
        breadcrumbs={[{ label: 'Facilities' }]}
      />

      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Information Notice */}
          <div className="mb-12 p-5 rounded-2xl bg-white border border-borderSoft shadow-soft flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-maroon shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-charcoal">
              <span className="font-bold text-maroon">Facilities Notice:</span> Images and features below illustrate standard high-grade dental facility specifications configured for {hospital.name} in Malappuram. Specific equipment model numbers and new facility expansions will be updated as commissioned.
            </div>
          </div>

          {/* Facilities Showcase Cards */}
          <div className="space-y-16">
            {facilitySections.map((sec, idx) => {
              const IconComp = sec.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={sec.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-7 ${isEven ? '' : 'lg:order-2'}`}>
                    <div className="relative rounded-3xl overflow-hidden shadow-card border-4 border-white bg-ivory">
                      <img
                        src={sec.image}
                        alt={sec.title}
                        className="w-full h-[320px] sm:h-[400px] object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm py-2 px-4 rounded-xl border border-borderSoft flex items-center justify-between">
                        <span className="text-xs font-semibold text-maroon uppercase tracking-wider">
                          {hospital.name} • Malappuram
                        </span>
                        <span className="text-xs text-charcoal-muted">
                          Sanitized Clinical Space
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className={`lg:col-span-5 space-y-4 ${isEven ? '' : 'lg:order-1'}`}>
                    <div className="w-12 h-12 rounded-2xl bg-maroon-50 text-maroon flex items-center justify-center">
                      <IconComp className="w-6 h-6 text-maroon" />
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
                      {sec.title}
                    </h3>

                    <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
                      {sec.description}
                    </p>

                    <div className="pt-2">
                      <Link
                        to="/appointment"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-maroon hover:text-burgundy"
                      >
                        <span>Schedule a Visit to Our Clinic &rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 bg-gradient-to-r from-maroon via-maroon-dark to-burgundy text-white rounded-3xl p-8 sm:p-12 text-center shadow-maroon space-y-5">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Ready to Experience Thoughtful Dental Care?
            </h3>
            <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto">
              Our clinic in Malappuram combines gentle care with modern dental infrastructure. Schedule your consultation online or via WhatsApp.
            </p>
            <div className="pt-2">
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 bg-[#77CDFF] hover:bg-white text-[#07273F] font-bold px-7 py-3 rounded-xl shadow-sm transition-all"
              >
                <Calendar className="w-4 h-4 text-[#07273F]" />
                <span>Book Your Appointment</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
