import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { SEOHead } from '../components/SEOHead';
import { hospital } from '../config/hospital';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Privacy policy and patient healthcare information confidentiality at Dental Care in Malappuram, Kerala, India."
      />

      <PageHeader
        eyebrow="LEGAL &amp; COMPLIANCE"
        title="Privacy Policy"
        description="How Dental Care protects your personal and healthcare information."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="py-16 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-borderSoft shadow-card space-y-8 text-charcoal leading-relaxed text-sm sm:text-base">
            <div>
              <p className="text-xs text-charcoal-muted uppercase tracking-wider font-semibold mb-2">
                Last Updated: January 2026
              </p>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-3">
                1. Our Commitment to Patient Privacy
              </h2>
              <p className="text-charcoal-muted">
                At <span className="font-semibold text-charcoal">{hospital.name}</span> ("we", "us", or "our"), located in Malappuram, Kerala, India, we recognize the importance of safeguarding your personal identification and clinical health information. This Privacy Policy outlines the types of information collected through our website, appointment scheduling workflows, and direct communication channels.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-3">
                2. Information We Collect
              </h2>
              <p className="text-charcoal-muted mb-3">
                We may collect personal details when you interact with our website or submit appointment inquiries:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-charcoal-muted">
                <li><strong>Contact Data:</strong> Full name, telephone number, and optional email address.</li>
                <li><strong>Treatment Preferences:</strong> Selected dental procedures, preferred doctors, and target visit dates/times.</li>
                <li><strong>Clinical Notes:</strong> Any self-described symptoms, toothache descriptions, or inquiries voluntarily submitted via forms or messaging.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-3">
                3. Purpose of Processing
              </h2>
              <p className="text-charcoal-muted mb-3">
                We use the information collected solely for:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-charcoal-muted">
                <li>Scheduling, managing, and confirming your clinical appointments at our Malappuram clinic.</li>
                <li>Transmitting direct WhatsApp notifications or replies regarding slot availability.</li>
                <li>Responding to questions regarding dental procedures, estimates, and clinic timings.</li>
                <li>Maintaining healthcare quality standards and patient satisfaction.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-3">
                4. WhatsApp Communication Notice
              </h2>
              <p className="text-charcoal-muted">
                When you initiate communication with our clinic via WhatsApp (+91 7510885193), messages transmitted through that application are governed by WhatsApp's End-to-End Encryption and Meta Privacy Policies. We do not sell or disclose your messaging details to third-party marketing services.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-3">
                5. Data Security
              </h2>
              <p className="text-charcoal-muted">
                We implement appropriate technical and administrative safeguards to protect your information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-3">
                6. Contact Concerning Privacy
              </h2>
              <p className="text-charcoal-muted">
                For questions regarding this policy or to request updates to your contact records, please contact our clinic at {hospital.phone} or visit our location in Malappuram, Kerala, India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
