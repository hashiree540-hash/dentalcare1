import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  MessageCircle,
  ArrowRight,
  Shield,
  Heart,
  CheckCircle,
  Smile,
  Activity,
  Layers,
  Award
} from 'lucide-react';
import { hospital } from '../config/hospital';
import { treatmentsData } from '../data/treatments';
import { doctorsData } from '../data/doctors';
import { testimonialsData } from '../data/testimonials';
import { Hero } from '../components/Hero';
import { SectionHeading } from '../components/SectionHeading';
import { TreatmentCard } from '../components/TreatmentCard';
import { DoctorCard } from '../components/DoctorCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { SEOHead } from '../components/SEOHead';

export const Home: React.FC = () => {
  const featuredTreatments = treatmentsData.filter((t) => t.isFeatured).slice(0, 6);
  const previewDoctors = doctorsData.slice(0, 3);
  const previewTestimonials = testimonialsData.slice(0, 3);

  // Trust indicator statistics (Editable placeholders clearly designated)
  const trustStats = [
    {
      value: '10+ Years',
      label: 'Clinical Experience',
      subtext: '(Hospital Placeholder)'
    },
    {
      value: '15,000+',
      label: 'Patients Welcomed',
      subtext: '(Demonstration Metric)'
    },
    {
      value: '15+',
      label: 'Specialized Treatments',
      subtext: 'Comprehensive Dental Services'
    },
    {
      value: '100%',
      label: 'Sterilization Protocol',
      subtext: 'Hospital-Grade Standards'
    }
  ];

  // Why choose features
  const whyChooseFeatures = [
    {
      icon: Heart,
      title: 'Patient-Focused Care',
      description: 'Your comfort and confidence remain our top priority through transparent consultations and gentle chairside manners.'
    },
    {
      icon: Layers,
      title: 'Personalized Treatment Plans',
      description: 'Every smile is unique; our treatment pathways are customized specifically to your clinical needs and aesthetic expectations.'
    },
    {
      icon: Activity,
      title: 'Modern Dental Approach',
      description: 'Utilizing modern dental techniques and digital imaging to deliver precise, conservative, and minimally invasive treatments.'
    },
    {
      icon: Shield,
      title: 'Hygiene and Sterilization',
      description: 'Multi-stage autoclave protocols and sterile instrument packaging ensure rigorous clinical safety for every visit.'
    },
    {
      icon: Smile,
      title: 'Comfortable Environment',
      description: 'A soothing, tranquil clinic atmosphere designed to alleviate dental anxiety for patients of all age groups.'
    },
    {
      icon: Award,
      title: 'Professional Dental Services',
      description: 'A full spectrum of care—from routine checkups to complex orthodontic and implant therapies under one roof.'
    }
  ];

  const facilitiesPreview = [
    {
      title: 'Advanced Treatment Suites',
      category: 'Treatment Rooms',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      desc: 'Ergonomic chairs and sterile surgical barriers designed for relaxing care.'
    },
    {
      title: 'Consultation & Diagnostics',
      category: 'Consultation Spaces',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
      desc: 'Digital visualization systems to help you understand your oral health clearly.'
    },
    {
      title: 'Calming Reception Lounge',
      category: 'Waiting Areas',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      desc: 'Comfortable, welcoming lounge area for individuals and accompanied families.'
    },
    {
      title: 'Hospital Sterilization Unit',
      category: 'Dental Equipment',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      desc: 'Rigorous multi-barrier sterilization protocols protecting your health.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Premier Dental Hospital in Malappuram"
        description="Experience exceptional dental care at Dental Care in Malappuram, Kerala. Offering dental implants, root canal therapy, braces, teeth whitening, and compassionate family dentistry."
        schemaType="Dentist"
      />

      {/* SECTION 1: SCROLL-DRIVEN VIDEO HERO */}
      <Hero />

      {/* SECTION 2: TRUST INDICATORS */}
      <section className="bg-white py-12 border-b border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {trustStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-ivory rounded-2xl p-6 text-center border border-borderSoft/80 hover:border-maroon/20 hover:shadow-soft transition-all duration-300"
              >
                <div className="font-serif text-3xl sm:text-4xl font-bold text-maroon mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-charcoal mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-charcoal-muted uppercase tracking-wider font-medium">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: ABOUT DENTAL CARE */}
      <section className="py-16 lg:py-24 bg-ivory-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Clinic Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-card border-4 border-white bg-ivory">
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80"
                  alt="Doctor consulting patient at Dental Care"
                  className="w-full h-[380px] sm:h-[460px] object-cover"
                />
              </div>

              {/* Decorative accent card */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 bg-maroon text-white p-5 rounded-2xl shadow-maroon max-w-xs border border-white/10">
                <div className="font-serif text-2xl font-bold text-gold-light mb-1">
                  Patient First
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  Every procedure is guided by patient comfort, clear dialogue, and ethical clinical standards.
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-maroon-50 text-maroon border border-maroon-100">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                <span>ABOUT OUR CLINIC</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
                Care That Makes You Smile.
              </h2>

              <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
                At {hospital.name}, we believe every smile deserves attention, comfort and professional care. Our focus is to make your dental experience welcoming and comfortable in Malappuram, Kerala.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-maroon-50 text-maroon flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-maroon" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-charcoal">Comprehensive Diagnostic Care</h4>
                    <p className="text-xs sm:text-sm text-charcoal-muted">
                      Detailed examinations to uncover root causes and present honest treatment paths.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-maroon-50 text-maroon flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-maroon" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-charcoal">Modern Comfort Protocols</h4>
                    <p className="text-xs sm:text-sm text-charcoal-muted">
                      Gentle techniques and calming communication designed to make each session pleasant.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-maroon-50 text-maroon flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-maroon" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-charcoal">Accessible Malappuram Location</h4>
                    <p className="text-xs sm:text-sm text-charcoal-muted">
                      Conveniently located for individuals and families across the Malappuram district.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-maroon hover:bg-burgundy text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-sm active:scale-95"
                >
                  <span>Discover More About Us</span>
                  <ArrowRight className="w-4 h-4 text-gold-light" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED TREATMENTS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="TREATMENTS &amp; PROCEDURES"
            title="Comprehensive Dental Care for Every Smile."
            description="Explore our range of dental treatments designed to support your oral health, chewing comfort, and smile aesthetics."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTreatments.map((treatment) => (
              <TreatmentCard key={treatment.id} treatment={treatment} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 bg-ivory hover:bg-maroon-50 text-maroon font-semibold px-8 py-3.5 rounded-xl border border-borderSoft hover:border-maroon/30 transition-all shadow-sm"
            >
              <span>View All 15 Dental Treatments</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE DENTAL CARE */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="OUR COMMITMENT"
            title="Why Choose Dental Care?"
            description="We combine dedicated healthcare professionals, hygienic protocols, and transparent patient care to make every visit reassuring."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-borderSoft hover:border-maroon/30 shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-maroon-50 text-maroon flex items-center justify-center mb-5">
                    <IconComp className="w-6 h-6 text-maroon" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-2.5">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-charcoal-muted leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR DOCTORS PREVIEW */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="OUR CLINICAL TEAM"
            title="Meet Our Dental Professionals."
            description="Our dental doctors bring specialized training and a caring bedside approach to your oral health requirements."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewDoctors.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/doctors"
              className="inline-flex items-center gap-2 bg-maroon text-white hover:bg-burgundy font-semibold px-8 py-3.5 rounded-xl transition-all shadow-sm active:scale-95"
            >
              <span>Explore Complete Doctors Directory</span>
              <ArrowRight className="w-4 h-4 text-gold-light" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: FACILITIES PREVIEW */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FACILITIES &amp; AMENITIES"
            title="Designed Around Your Comfort."
            description="Step into modern dental operatories, sterilized clinical suites, and relaxing consultation rooms curated for a serene patient experience."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilitiesPreview.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-borderSoft shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="h-48 overflow-hidden bg-ivory relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/50 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-md">
                    {item.category}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-serif font-bold text-base text-charcoal mb-1.5 group-hover:text-maroon transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/facilities"
              className="inline-flex items-center gap-2 text-sm font-semibold text-maroon hover:text-burgundy"
            >
              <span>View Full Facilities Showcase &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: PATIENT TESTIMONIALS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="PATIENT FEEDBACK"
            title="Smiles Speak for Themselves."
            description="Read patient feedback and experience stories regarding treatments received at Dental Care in Malappuram."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-sm font-semibold text-maroon hover:text-burgundy"
            >
              <span>Read More Reviews or Submit Feedback &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9: APPOINTMENT CTA BANNER */}
      <section className="relative bg-gradient-to-tr from-maroon via-maroon-dark to-burgundy text-white py-16 lg:py-20 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-burgundy/40 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-gold-light border border-white/15 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span>GET IN TOUCH WITH DENTAL CARE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Your Journey to a Healthier Smile Starts Here.
          </h2>

          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Connect with {hospital.name} and take your first step towards better oral health. Schedule an appointment or connect directly with our clinic team on WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/appointment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#77CDFF] hover:bg-white text-[#07273F] font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all active:scale-95"
            >
              <Calendar className="w-5 h-5 text-[#07273F]" />
              <span>Book an Appointment</span>
            </Link>

            <a
              href={hospital.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg transition-all active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="pt-4 text-xs text-white/60">
            Malappuram, Kerala, India • Phone: {hospital.displayPhone}
          </div>
        </div>
      </section>
    </>
  );
};
