import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Target,
  Compass,
  ShieldCheck,
  Award,
  Users,
  CheckCircle,
  Calendar,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { hospital } from '../config/hospital';
import { PageHeader } from '../components/PageHeader';
import { SEOHead } from '../components/SEOHead';
import { SectionHeading } from '../components/SectionHeading';

export const About: React.FC = () => {
  const coreValues = [
    {
      title: 'Patient-First Compassion',
      desc: 'We place your comfort and peace of mind at the center of every procedure, ensuring anxiety-free treatment.',
      icon: Heart
    },
    {
      title: 'Clinical Integrity',
      desc: 'We recommend only necessary, evidence-based treatments and provide honest, transparent explanations.',
      icon: ShieldCheck
    },
    {
      title: 'Hygienic Excellence',
      desc: 'Hospital-standard multi-stage sterilization protocols guarantee the highest hygiene standards for every patient.',
      icon: Award
    },
    {
      title: 'Community Commitment',
      desc: 'Dedicated to raising oral healthcare awareness and building lifelong relationships across Malappuram.',
      icon: Users
    }
  ];

  return (
    <>
      <SEOHead
        title="About Us"
        description="Learn about Dental Care in Malappuram, Kerala. Our mission, vision, clinical values, and patient-first approach to modern dentistry."
        schemaType="AboutPage"
      />

      <PageHeader
        eyebrow="ABOUT OUR PRACTICE"
        title="Dedicated to Your Smile and Wellness"
        description="Dental Care is dedicated to providing a welcoming dental care experience with a focus on patient comfort, oral health, and professional service in Malappuram, Kerala."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* SECTION 2 & 3: INTRODUCTION & OUR STORY */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-maroon-50 text-maroon border border-maroon-100">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                <span>OUR STORY</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
                Rooted in Care, Built on Trust.
              </h2>

              <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
                Founded with a conviction that dental visits should be reassuring rather than daunting, <span className="font-semibold text-maroon">{hospital.name}</span> has evolved into a welcoming dental clinic serving individuals and families across Malappuram.
              </p>

              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
                We observed that many patients postpone essential dental treatments due to fear, uncertainty, or discomfort. By combining gentle clinical methodologies, modern diagnostics, and transparent communication, we set out to create an environment where patients feel listened to, respected, and thoroughly cared for.
              </p>

              <div className="pt-2 border-l-4 border-gold pl-4 py-1 italic text-charcoal font-serif text-lg">
                "To support healthier smiles through responsible dental care and a patient-focused approach."
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-card border-4 border-white bg-ivory">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
                  alt="Dental Care clinic team and consultation setting"
                  className="w-full h-[400px] sm:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs uppercase tracking-widest text-gold-light font-semibold mb-1">
                    Malappuram, Kerala
                  </div>
                  <div className="font-serif text-xl font-bold">
                    Compassionate Care in Every Visit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 & 5: MISSION & VISION */}
      <section className="py-16 bg-ivory border-y border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-borderSoft shadow-soft hover:shadow-card transition-all">
              <div className="w-14 h-14 rounded-2xl bg-maroon-50 text-maroon flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-maroon" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-3">
                Our Mission
              </h3>
              <p className="text-base text-charcoal-muted leading-relaxed mb-4">
                "To support healthier smiles through responsible dental care and a patient-focused approach."
              </p>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                We strive to make quality dental procedures accessible, gentle, and transparent, ensuring each patient achieves sustainable oral health and elevated confidence.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-borderSoft shadow-soft hover:shadow-card transition-all">
              <div className="w-14 h-14 rounded-2xl bg-maroon-50 text-maroon flex items-center justify-center mb-6">
                <Compass className="w-7 h-7 text-maroon" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-3">
                Our Vision
              </h3>
              <p className="text-base text-charcoal-muted leading-relaxed mb-4">
                "To become a trusted dental care destination for individuals and families."
              </p>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                We aspire to set benchmarks in patient comfort, ethical diagnosis, and comprehensive oral rehabilitation across the Malappuram region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR VALUES */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="GUIDING PRINCIPLES"
            title="The Values That Guide Our Practice"
            description="Our core values influence every diagnosis, patient conversation, and surgical procedure performed at Dental Care."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-ivory rounded-2xl p-6 border border-borderSoft/80 hover:border-maroon/30 transition-all text-center flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-maroon text-gold-light flex items-center justify-center mb-4 shadow-sm">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-charcoal mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7 & 8: APPROACH & COMMITMENT */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-maroon-50 text-maroon border border-maroon-100">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                <span>PATIENT-FIRST PHILOSOPHY</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
                Our Approach to Patient Care
              </h2>

              <p className="text-base text-charcoal-muted leading-relaxed">
                We believe that successful healthcare begins with attentive listening. Before discussing any treatment or procedure, our dentists spend time understanding your medical history, oral habits, lifestyle, and aesthetic preferences.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-maroon shrink-0 mt-0.5" />
                  <span className="text-sm text-charcoal">
                    <strong>Zero-Rush Consultations:</strong> Ample time allocated to answer every patient question clearly.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-maroon shrink-0 mt-0.5" />
                  <span className="text-sm text-charcoal">
                    <strong>Minimally Invasive Dentistry:</strong> Preserving your natural tooth enamel and bone whenever feasible.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-maroon shrink-0 mt-0.5" />
                  <span className="text-sm text-charcoal">
                    <strong>Strict Autoclave Protocols:</strong> Chemical indicators and vacuum sterilization ensuring absolute sterility.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-maroon shrink-0 mt-0.5" />
                  <span className="text-sm text-charcoal">
                    <strong>Transparent Treatment Options:</strong> Clear cost discussions and no unexpected surprises.
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-borderSoft shadow-card space-y-6">
              <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-gold-dark" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-charcoal">
                Our Commitment to Oral Health in Malappuram
              </h3>

              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
                Oral health plays a crucial role in overall physical health—from cardiovascular wellness to nutritional digestion and self-esteem. Our commitment extends beyond fixing existing problems to empowering our community with preventive habits.
              </p>

              <div className="bg-ivory p-5 rounded-2xl border border-borderSoft text-xs sm:text-sm text-charcoal space-y-2">
                <p className="font-semibold text-maroon">
                  Convenient WhatsApp Scheduling
                </p>
                <p className="text-charcoal-muted">
                  Have an urgent dental ache or need to plan your routine checkup? Our reception desk in Malappuram is just a message away.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/appointment"
                  className="w-full inline-flex items-center justify-center gap-2 bg-maroon hover:bg-burgundy text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-gold-light" />
                  <span>Request an Appointment</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPOINTMENT CTA STRIP */}
      <section className="bg-maroon py-14 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Experience Quality Dental Care in Malappuram
          </h2>
          <p className="text-white/80 text-base max-w-xl mx-auto">
            Schedule a visit with Dental Care today. We look forward to welcoming you and your family.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/appointment"
              className="bg-[#77CDFF] hover:bg-white text-[#07273F] font-bold px-6 py-3 rounded-xl transition-colors shadow-sm"
            >
              Book Appointment
            </Link>
            <a
              href={hospital.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold px-6 py-3 rounded-xl transition-colors flex items-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
