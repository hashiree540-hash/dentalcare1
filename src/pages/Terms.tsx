import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { SEOHead } from '../components/SEOHead';
import { hospital } from '../config/hospital';

export const Terms: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Terms and Conditions"
        description="Terms and conditions for utilizing the website and appointment request services of Dental Care, Malappuram, Kerala, India."
      />

      <PageHeader
        eyebrow="LEGAL &amp; COMPLIANCE"
        title="Terms and Conditions"
        description="Important guidelines governing website use, appointment inquiries, and clinical consultations."
        breadcrumbs={[{ label: 'Terms & Conditions' }]}
      />

      <section className="py-16 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-borderSoft shadow-card space-y-8 text-charcoal leading-relaxed text-sm sm:text-base">
            <div>
              <p className="text-xs text-charcoal-muted uppercase tracking-wider font-semibold mb-2">
                Last Updated: January 2026
              </p>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-3">
                1. Acceptance of Terms
              </h2>
              <p className="text-charcoal-muted">
                By accessing or browsing this website operated by <span className="font-semibold text-charcoal">{hospital.name}</span> in Malappuram, Kerala, India, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any portion of these terms, please do not use this website.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-3">
                2. Informational Purpose (No Substitute for Clinical Exam)
              </h2>
              <p className="text-charcoal-muted">
                All descriptions of dental treatments, procedures, recovery timelines, and FAQs published on this website are provided strictly for educational and general informational purposes. They do not constitute formal medical diagnosis, treatment guarantees, or definitive clinical prognosis. Individual dental outcomes depend entirely on a thorough in-person examination by a certified dental surgeon.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-3">
                3. Appointment Booking and Availability
              </h2>
              <p className="text-charcoal-muted">
                Submitting an appointment inquiry or forwarding an appointment message via WhatsApp does not constitute an automatically confirmed appointment. Appointments are subject to doctor schedule availability and are finalized only after our clinic reception confirms the scheduled time slot.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-3">
                4. Dental Emergencies
              </h2>
              <p className="text-charcoal-muted">
                If you are experiencing acute traumatic dental injury, continuous uncontrolled bleeding, or breathing difficulty related to swelling, please seek immediate emergency medical care or call our emergency line directly.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-3">
                5. Intellectual Property
              </h2>
              <p className="text-charcoal-muted">
                All branding, custom dental logos, written descriptions, and original website design layouts are the intellectual property of {hospital.name} and may not be reproduced without written permission.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-3">
                6. Governing Law
              </h2>
              <p className="text-charcoal-muted">
                These terms are governed by and construed in accordance with the laws of the State of Kerala and the Union of India, subject to the jurisdiction of courts in Malappuram, Kerala.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
