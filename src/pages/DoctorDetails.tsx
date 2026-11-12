import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Calendar,
  MessageCircle,
  Award,
  GraduationCap,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowLeft
} from 'lucide-react';
import { doctorsData } from '../data/doctors';
import { hospital } from '../config/hospital';
import { PageHeader } from '../components/PageHeader';
import { SEOHead } from '../components/SEOHead';
import { openWhatsApp, buildGeneralWhatsAppMessage } from '../services/whatsappService';

export const DoctorDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const doctor = doctorsData.find((d) => d.slug === slug);

  if (!doctor) {
    return <Navigate to="/doctors" replace />;
  }

  const handleWhatsAppInquiry = () => {
    const msg = `Hello ${hospital.name}, I would like to inquire about consulting with the ${doctor.specialization} at your Malappuram clinic.`;
    openWhatsApp(msg);
  };

  return (
    <>
      <SEOHead
        title={`${doctor.name} - ${doctor.specialization}`}
        description={`Doctor profile for ${doctor.name}, ${doctor.specialization} at Dental Care, Malappuram, Kerala.`}
        schemaType="MedicalWebPage"
      />

      <PageHeader
        eyebrow="DOCTOR PROFILE"
        title={doctor.name}
        description={doctor.specialization}
        breadcrumbs={[
          { label: 'Doctors', path: '/doctors' },
          { label: doctor.name }
        ]}
      />

      <section className="py-16 lg:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <div className="mb-8">
            <Link
              to="/doctors"
              className="inline-flex items-center gap-2 text-sm font-semibold text-maroon hover:text-burgundy transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Doctors</span>
            </Link>
          </div>

          {/* Verification Alert */}
          {doctor.isPlaceholder && (
            <div className="mb-8 p-4 rounded-2xl bg-white border border-borderSoft flex items-start gap-3 shadow-soft">
              <AlertCircle className="w-5 h-5 text-maroon shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-charcoal">
                <span className="font-bold text-maroon">Demonstration Profile Notice:</span> This page contains structured placeholder credentials for the {doctor.specialization} role. The official doctor name, degrees, and medical council registrations will be updated directly by {hospital.name} administration.
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Portrait & Quick Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-4 border border-borderSoft shadow-card overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden h-96 bg-ivory">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs uppercase tracking-wider font-semibold text-gold-light">
                      {doctor.specialization}
                    </div>
                    <div className="font-serif text-xl font-bold">
                      {doctor.name}
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-3 pt-5">
                  <div className="flex items-center gap-3 text-sm text-charcoal">
                    <Award className="w-4 h-4 text-maroon shrink-0" />
                    <span><strong>Experience:</strong> {doctor.experienceYears}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-charcoal">
                    <Clock className="w-4 h-4 text-maroon shrink-0" />
                    <span><strong>Consultation Hours:</strong> {doctor.schedule}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-charcoal">
                    <GraduationCap className="w-4 h-4 text-maroon shrink-0" />
                    <span><strong>Degree:</strong> {doctor.qualification}</span>
                  </div>
                </div>

                <div className="p-4 pt-2 border-t border-borderSoft space-y-2.5">
                  <Link
                    to={`/appointment?doctor=${encodeURIComponent(doctor.specialization)}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#77CDFF] hover:bg-[#5bb8f5] text-[#07273F] font-bold py-3 px-4 rounded-xl shadow-sm transition-all"
                  >
                    <Calendar className="w-4 h-4 text-[#07273F]" />
                    <span>Book with this Specialist</span>
                  </Link>

                  <button
                    type="button"
                    onClick={handleWhatsAppInquiry}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold py-2.5 px-4 rounded-xl shadow-sm transition-all text-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                    <span>Ask Availability on WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Bio, Education & Expertise */}
            <div className="lg:col-span-7 space-y-8">
              {/* Biography Section */}
              <div className="bg-white rounded-3xl p-8 border border-borderSoft shadow-card space-y-4">
                <h3 className="font-serif text-2xl font-bold text-charcoal">
                  Biography &amp; Clinical Background
                </h3>
                <p className="text-base text-charcoal-muted leading-relaxed">
                  {doctor.fullBio}
                </p>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  Dedicated to delivering high-caliber clinical dentistry with an emphasis on sterile operating procedures, painless local anesthesia, and comprehensive patient education in Malappuram.
                </p>
              </div>

              {/* Areas of Clinical Expertise */}
              <div className="bg-white rounded-3xl p-8 border border-borderSoft shadow-card space-y-4">
                <h3 className="font-serif text-2xl font-bold text-charcoal">
                  Areas of Clinical Expertise
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {doctor.expertise.map((exp, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-ivory border border-borderSoft/80 text-sm font-medium text-charcoal"
                    >
                      <CheckCircle className="w-4 h-4 text-maroon shrink-0" />
                      <span>{exp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Qualifications */}
              <div className="bg-white rounded-3xl p-8 border border-borderSoft shadow-card space-y-4">
                <h3 className="font-serif text-2xl font-bold text-charcoal">
                  Academic Credentials &amp; Certifications
                </h3>
                <ul className="space-y-3">
                  {doctor.education.map((edu, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-charcoal">
                      <GraduationCap className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
                      <span className="leading-snug">{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
