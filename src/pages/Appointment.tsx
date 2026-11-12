import React from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Calendar,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  MapPin,
  HelpCircle
} from 'lucide-react';
import { hospital } from '../config/hospital';
import { PageHeader } from '../components/PageHeader';
import { AppointmentForm } from '../components/AppointmentForm';
import { SEOHead } from '../components/SEOHead';

export const Appointment: React.FC = () => {
  const [searchParams] = useSearchParams();
  const treatmentParam = searchParams.get('treatment') || '';
  const doctorParam = searchParams.get('doctor') || '';

  return (
    <>
      <SEOHead
        title="Book Dental Appointment Online"
        description="Book your dental appointment with Dental Care in Malappuram, Kerala. Convenient online appointment request and direct WhatsApp scheduling."
        schemaType="MedicalWebPage"
      />

      <PageHeader
        eyebrow="APPOINTMENT BOOKING"
        title="Book Your Dental Appointment"
        description="Schedule a visit with Dental Care. Send your appointment request and our team can contact you regarding availability."
        breadcrumbs={[{ label: 'Book Appointment' }]}
      />

      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: The Appointment Form (8 Cols) */}
            <div className="lg:col-span-8">
              <AppointmentForm
                initialTreatment={treatmentParam}
                initialDoctor={doctorParam}
              />
            </div>

            {/* Right Column: Clinic Info & Help (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* WhatsApp Quick Help Card */}
              <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-3xl p-6 sm:p-7 space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                </div>
                <h4 className="font-serif text-lg font-bold text-charcoal">
                  Prefer Direct WhatsApp Chat?
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  You can chat immediately with our Malappuram reception team for instant inquiries or same-day appointment questions.
                </p>
                <a
                  href={hospital.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-colors"
                >
                  <span>Open WhatsApp Directly</span>
                </a>
              </div>

              {/* Clinic Consultation Timings */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-borderSoft shadow-card space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-charcoal">
                  <Clock className="w-4 h-4 text-maroon" />
                  <span>Clinic Timings</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-charcoal-muted">
                  <div className="flex justify-between py-1 border-b border-borderSoft/60">
                    <span className="font-medium text-charcoal">Mon – Sat:</span>
                    <span>9:00 AM – 7:30 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-borderSoft/60">
                    <span className="font-medium text-charcoal">Sunday:</span>
                    <span>10:00 AM – 2:00 PM (By Appt)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-borderSoft/60">
                    <span className="font-medium text-charcoal">Emergency:</span>
                    <span className="text-maroon font-semibold">WhatsApp Assistance</span>
                  </div>
                </div>
              </div>

              {/* Direct Telephone */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-borderSoft shadow-card space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-charcoal">
                  <Phone className="w-4 h-4 text-maroon" />
                  <span>Call Reception Desk</span>
                </div>
                <p className="text-xs text-charcoal-muted">
                  Speak directly with our clinic coordinator for immediate booking assistance:
                </p>
                <a
                  href={`tel:${hospital.phone}`}
                  className="inline-block text-lg font-bold text-maroon hover:text-burgundy transition-colors"
                >
                  {hospital.displayPhone}
                </a>
              </div>

              {/* What to Expect */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-borderSoft shadow-card space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-charcoal">
                  <ShieldCheck className="w-4 h-4 text-maroon" />
                  <span>What to Bring</span>
                </div>
                <ul className="text-xs text-charcoal-muted space-y-2 list-disc pl-4">
                  <li>Any previous dental X-rays or records (if available).</li>
                  <li>List of current systemic medications or allergies.</li>
                  <li>Please arrive 10 minutes prior to your scheduled slot.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
