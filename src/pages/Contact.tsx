import React from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Mail,
  ShieldCheck,
  Send
} from 'lucide-react';
import { hospital } from '../config/hospital';
import { PageHeader } from '../components/PageHeader';
import { ContactForm } from '../components/ContactForm';
import { SEOHead } from '../components/SEOHead';

export const Contact: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Contact Us &amp; Clinic Location"
        description="Get in touch with Dental Care in Malappuram, Kerala. Phone, WhatsApp, consultation hours, and search-based map directions."
        schemaType="ContactPage"
      />

      <PageHeader
        eyebrow="GET IN TOUCH"
        title="Contact Dental Care"
        description="We are here to assist with your dental inquiries, consultation appointments, and emergency questions in Malappuram, Kerala."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Location Card */}
            <div className="bg-white rounded-3xl p-6 border border-borderSoft shadow-soft space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-maroon-50 text-maroon flex items-center justify-center">
                <MapPin className="w-6 h-6 text-maroon" />
              </div>
              <h4 className="font-serif text-lg font-bold text-charcoal">
                Clinic Location
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                {hospital.name}<br />
                {hospital.location}
              </p>
              <span className="text-[11px] text-maroon font-medium block">
                Central Malappuram, Kerala
              </span>
            </div>

            {/* Telephone Card */}
            <div className="bg-white rounded-3xl p-6 border border-borderSoft shadow-soft space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-maroon-50 text-maroon flex items-center justify-center">
                <Phone className="w-6 h-6 text-maroon" />
              </div>
              <h4 className="font-serif text-lg font-bold text-charcoal">
                Telephone Support
              </h4>
              <p className="text-xs text-charcoal-muted">
                Direct phone inquiries:
              </p>
              <a
                href={`tel:${hospital.phone}`}
                className="text-sm font-bold text-maroon hover:text-burgundy transition-colors block"
              >
                {hospital.displayPhone}
              </a>
              <span className="text-[11px] text-charcoal-muted block">
                Mon – Sat: 9:00 AM – 7:30 PM
              </span>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-3xl p-6 border border-borderSoft shadow-soft space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <h4 className="font-serif text-lg font-bold text-charcoal">
                WhatsApp Messaging
              </h4>
              <p className="text-xs text-charcoal-muted">
                Fast appointment inquiries:
              </p>
              <a
                href={hospital.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-[#25D366] hover:underline block"
              >
                +91 7510885193
              </a>
              <span className="text-[11px] text-charcoal-muted block">
                Direct chat assistance
              </span>
            </div>

            {/* Working Hours Card */}
            <div className="bg-white rounded-3xl p-6 border border-borderSoft shadow-soft space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-maroon-50 text-maroon flex items-center justify-center">
                <Clock className="w-6 h-6 text-maroon" />
              </div>
              <h4 className="font-serif text-lg font-bold text-charcoal">
                Working Hours
              </h4>
              <div className="text-xs text-charcoal-muted space-y-1">
                <p><strong>Mon – Sat:</strong> 9:00 AM – 7:30 PM</p>
                <p><strong>Sunday:</strong> 10:00 AM – 2:00 PM</p>
              </div>
              <span className="text-[11px] text-maroon font-medium block">
                Standard Clinic Schedule
              </span>
            </div>
          </div>

          {/* Form & Map Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Form (6 Cols) */}
            <div className="lg:col-span-6">
              <ContactForm />
            </div>

            {/* Google Maps & Clinic Details (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-borderSoft shadow-card space-y-4">
                <h3 className="font-serif text-2xl font-bold text-charcoal">
                  Location Map
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  Search-based regional map for <span className="font-semibold text-charcoal">Malappuram, Kerala, India</span>. The precise street address will be updated in coordination with hospital management.
                </p>

                {/* Embedded Responsive Google Map */}
                <div className="rounded-2xl overflow-hidden border border-borderSoft h-80 sm:h-96 relative bg-ivory">
                  <iframe
                    title="Dental Care Hospital Location - Malappuram Kerala"
                    src={hospital.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="pt-2 text-xs text-charcoal-muted flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-maroon" />
                  <span>Ample parking and accessible entrance facilities available.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
