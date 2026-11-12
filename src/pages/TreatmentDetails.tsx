import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Calendar,
  MessageCircle,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { treatmentsData } from '../data/treatments';
import { hospital } from '../config/hospital';
import { PageHeader } from '../components/PageHeader';
import { TreatmentCard } from '../components/TreatmentCard';
import { SEOHead } from '../components/SEOHead';
import { openWhatsApp, buildGeneralWhatsAppMessage } from '../services/whatsappService';

export const TreatmentDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const treatment = treatmentsData.find((t) => t.slug === slug);

  if (!treatment) {
    return <Navigate to="/treatments" replace />;
  }

  // Related treatments
  const relatedTreatments = treatmentsData.filter((t) =>
    treatment.relatedSlugs.includes(t.slug)
  );

  const handleWhatsAppInquiry = () => {
    const msg = buildGeneralWhatsAppMessage(treatment.title);
    openWhatsApp(msg);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <>
      <SEOHead
        title={`${treatment.title} - Treatment Guide`}
        description={`${treatment.shortDescription} Learn about procedure steps, benefits, and indications at Dental Care, Malappuram.`}
        schemaType="MedicalWebPage"
      />

      {/* SECTION 1: HERO */}
      <PageHeader
        eyebrow={`DENTAL PROCEDURE • ${treatment.category}`}
        title={treatment.title}
        description={treatment.shortDescription}
        badge={treatment.category}
        breadcrumbs={[
          { label: 'Treatments', path: '/treatments' },
          { label: treatment.title }
        ]}
      />

      <div className="bg-ivory py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content Area (8 Cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* SECTION 2 & 3: WHAT IS THE TREATMENT */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-borderSoft shadow-card space-y-6">
                <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96 bg-ivory">
                  <img
                    src={treatment.heroImage}
                    alt={treatment.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3.5 rounded-xl border border-borderSoft flex items-center justify-between">
                    <span className="text-xs font-semibold text-maroon uppercase tracking-wider">
                      {hospital.name} Clinical Care
                    </span>
                    <span className="text-xs text-charcoal-muted">
                      Malappuram, Kerala
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
                    What is {treatment.title}?
                  </h2>
                  <p className="text-base text-charcoal-muted leading-relaxed">
                    {treatment.whatIs}
                  </p>
                </div>
              </div>

              {/* SECTION 4: WHY IT MAY BE RECOMMENDED */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-borderSoft shadow-card space-y-6">
                <h3 className="font-serif text-2xl font-bold text-charcoal flex items-center gap-2">
                  <span>When is this Treatment Recommended?</span>
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  During an initial clinical examination at {hospital.name}, our dentists evaluate your oral health condition to see if {treatment.title} is appropriate for your symptoms:
                </p>
                <div className="grid grid-cols-1 gap-3.5 pt-1">
                  {treatment.whyRecommended.map((reason, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 p-4 rounded-2xl bg-ivory/80 border border-borderSoft text-sm text-charcoal"
                    >
                      <div className="w-6 h-6 rounded-full bg-maroon-50 text-maroon flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-maroon" />
                      </div>
                      <span className="leading-relaxed">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 5: GENERAL BENEFITS */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-borderSoft shadow-card space-y-6">
                <h3 className="font-serif text-2xl font-bold text-charcoal">
                  Key Benefits of {treatment.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {treatment.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-maroon-50/40 border border-maroon-100/60 space-y-2"
                    >
                      <div className="w-8 h-8 rounded-lg bg-maroon text-gold-light flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-gold" />
                      </div>
                      <p className="text-sm font-medium text-charcoal leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 6: PROCEDURE OVERVIEW */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-borderSoft shadow-card space-y-6">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-charcoal">
                    Procedure Overview
                  </h3>
                  <p className="text-sm text-charcoal-muted leading-relaxed">
                    While every individual treatment is personalized based on your diagnostics, here is a general overview of the steps involved:
                  </p>
                </div>

                <div className="relative pl-6 sm:pl-8 border-l-2 border-gold/40 space-y-8 my-6">
                  {treatment.procedureSteps.map((step) => (
                    <div key={step.stepNumber} className="relative group">
                      {/* Step circle marker */}
                      <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-8 h-8 rounded-full bg-maroon text-gold-light font-bold text-xs flex items-center justify-center shadow-sm">
                        {step.stepNumber}
                      </div>

                      <h4 className="font-serif text-lg font-bold text-charcoal mb-1.5">
                        {step.title}
                      </h4>
                      <p className="text-sm text-charcoal-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-ivory border border-borderSoft flex items-start gap-3 text-xs text-charcoal-muted">
                  <AlertCircle className="w-4 h-4 text-maroon shrink-0 mt-0.5" />
                  <span>
                    Note: Procedure timelines and steps may vary based on your individual oral health assessment. Detailed guidance will be shared during your consultation.
                  </span>
                </div>
              </div>

              {/* SECTION 7: FAQS ACCORDION */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-borderSoft shadow-card space-y-6">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-maroon">
                    <HelpCircle className="w-4 h-4" />
                    <span>PATIENT CLARIFICATIONS</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal">
                    Frequently Asked Questions
                  </h3>
                </div>

                <div className="space-y-3">
                  {treatment.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-borderSoft overflow-hidden transition-colors"
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(idx)}
                          className="w-full p-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-ivory transition-colors"
                          aria-expanded={isOpen}
                        >
                          <span className="font-medium text-sm sm:text-base text-charcoal">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-charcoal-muted shrink-0 transition-transform duration-200 ${
                              isOpen ? 'rotate-180 text-maroon' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 text-sm text-charcoal-muted leading-relaxed border-t border-borderSoft/60 bg-ivory-soft">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 8: RELATED TREATMENTS */}
              {relatedTreatments.length > 0 && (
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-charcoal">
                    Related Dental Treatments
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {relatedTreatments.map((rel) => (
                      <TreatmentCard key={rel.id} treatment={rel} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Sticky Column (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* SECTION 9 & 10: APPOINTMENT & WHATSAPP CTAS */}
              <div className="sticky top-28 space-y-6">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-borderSoft shadow-card space-y-6">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 rounded-2xl bg-maroon-50 text-maroon mx-auto flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-maroon" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-charcoal">
                      Schedule a Consultation
                    </h4>
                    <p className="text-xs text-charcoal-muted">
                      Consult with our dental specialists in Malappuram regarding {treatment.title}.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Link
                      to={`/appointment?treatment=${encodeURIComponent(treatment.title)}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#77CDFF] hover:bg-[#5bb8f5] text-[#07273F] font-bold py-3.5 px-4 rounded-xl shadow-md transition-all active:scale-95 text-sm"
                    >
                      <Calendar className="w-4 h-4 text-[#07273F]" />
                      <span>Book Appointment for {treatment.title}</span>
                    </Link>

                    <button
                      type="button"
                      onClick={handleWhatsAppInquiry}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold py-3 px-4 rounded-xl shadow-sm transition-all text-sm"
                    >
                      <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                      <span>Inquire via WhatsApp</span>
                    </button>
                  </div>

                  <div className="pt-4 border-t border-borderSoft text-xs text-charcoal-muted space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-maroon" />
                      <span>Mon – Sat: 9:00 AM – 7:30 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-maroon" />
                      <span>100% sterile clinical protocols</span>
                    </div>
                  </div>
                </div>

                {/* Direct Telephone Assistance Card */}
                <div className="bg-gradient-to-br from-maroon to-maroon-dark text-white rounded-3xl p-6 shadow-maroon space-y-3">
                  <div className="text-xs uppercase tracking-wider text-gold-light font-semibold">
                    Direct Phone Support
                  </div>
                  <div className="font-serif text-lg font-bold">
                    Prefer speaking to our receptionist?
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Call our Malappuram clinic directly to verify appointment openings:
                  </p>
                  <a
                    href={`tel:${hospital.phone}`}
                    className="inline-flex items-center gap-2 text-base font-bold text-white hover:text-gold-light transition-colors"
                  >
                    <span>{hospital.displayPhone}</span>
                    <ArrowRight className="w-4 h-4 text-gold" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
