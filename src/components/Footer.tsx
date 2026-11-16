import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Clock, ArrowRight, ShieldCheck, Heart, Mail } from 'lucide-react';
import { Logo } from './Logo';
import { hospital } from '../config/hospital';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-maroon-dark text-white/90 border-t border-maroon-800">
      {/* Top Pre-footer CTA Strip */}
      <div className="bg-burgundy border-b border-white/10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gold-light shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold text-white">
                Looking for quality dental care in Malappuram?
              </h4>
              <p className="text-sm text-white/80">
                Connect with our team today to request consultation availability.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={hospital.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 bg-[#77CDFF] hover:bg-white text-[#07273F] px-4 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-sm"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 text-[#07273F]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Logo variant="dark" />
            <p className="text-sm text-white/75 leading-relaxed">
              Dental Care is dedicated to providing welcoming, ethical, and patient-first oral healthcare in Malappuram, Kerala. Experience comfort, modern clinical hygiene, and attentive service for you and your family.
            </p>
            <div className="pt-2">
              <div className="text-xs uppercase tracking-wider text-gold-light font-semibold mb-2">
                Connect With Us
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <a
                  href={hospital.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gold hover:text-charcoal flex items-center justify-center transition-colors text-white"
                  aria-label="Dental Care Facebook"
                >
                  <span className="font-bold text-xs">FB</span>
                </a>
                <a
                  href={hospital.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gold hover:text-charcoal flex items-center justify-center transition-colors text-white"
                  aria-label="Dental Care Instagram"
                >
                  <span className="font-bold text-xs">IG</span>
                </a>
                <a
                  href={hospital.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gold hover:text-charcoal flex items-center justify-center transition-colors text-white"
                  aria-label="Dental Care YouTube"
                >
                  <span className="font-bold text-xs">YT</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span>Quick Links</span>
              <span className="w-8 h-0.5 bg-gold rounded-full"></span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-white/75 hover:text-gold-light transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/75 hover:text-gold-light transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-white/75 hover:text-gold-light transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold" />
                  <span>Our Doctors</span>
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="text-white/75 hover:text-gold-light transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold" />
                  <span>Treatments Directory</span>
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-white/75 hover:text-gold-light transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold" />
                  <span>Hospital Facilities</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/75 hover:text-gold-light transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold" />
                  <span>Clinic Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-white/75 hover:text-gold-light transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold" />
                  <span>Patient Feedback</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Treatments */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span>Dental Treatments</span>
              <span className="w-8 h-0.5 bg-gold rounded-full"></span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/treatments/dental-implants" className="text-white/75 hover:text-gold-light transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold" />
                  <span>Dental Implants</span>
                </Link>
              </li>
              <li>
                <Link to="/treatments/root-canal-treatment" className="text-white/75 hover:text-gold-light transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold" />
                  <span>Root Canal Treatment</span>
                </Link>
              </li>
              <li>
                <Link to="/treatments/teeth-whitening" className="text-white/75 hover:text-gold-light transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold" />
                  <span>Teeth Whitening</span>
                </Link>
              </li>
              <li>
                <Link to="/treatments/dental-braces" className="text-white/75 hover:text-gold-light transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold" />
                  <span>Braces & Orthodontics</span>
                </Link>
              </li>
              <li>
                <Link to="/treatments/dental-crowns" className="text-white/75 hover:text-gold-light transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold" />
                  <span>Crowns and Bridges</span>
                </Link>
              </li>
              <li>
                <Link to="/treatments/cosmetic-dentistry" className="text-white/75 hover:text-gold-light transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold" />
                  <span>Cosmetic Dentistry</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span>Clinic Location</span>
              <span className="w-8 h-0.5 bg-gold rounded-full"></span>
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                <div className="text-white/80">
                  <p className="font-medium text-white">{hospital.name}</p>
                  <p>{hospital.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0 mt-1" />
                <div>
                  <a
                    href={`tel:${hospital.phone}`}
                    className="text-white/80 hover:text-white font-medium transition-colors"
                  >
                    {hospital.displayPhone}
                  </a>
                  <p className="text-xs text-white/60">Phone consultations</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-1" />
                <div>
                  <a
                    href={hospital.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white font-medium transition-colors"
                  >
                    +91 7510885193
                  </a>
                  <p className="text-xs text-white/60">WhatsApp appointment support</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0 mt-1" />
                <div>
                  <a
                    href={`mailto:${hospital.email}`}
                    className="text-white/80 hover:text-white font-medium transition-colors break-all"
                  >
                    {hospital.email}
                  </a>
                  <p className="text-xs text-white/60">Official email support</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-1" />
                <div className="text-xs text-white/75 space-y-0.5">
                  <p className="font-medium text-white/90">Standard Hours (Placeholder):</p>
                  <p>Mon – Sat: 9:00 AM – 7:30 PM</p>
                  <p>Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal links */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p className="flex items-center gap-1 text-center sm:text-left">
            <span>Copyright &copy; {currentYear} {hospital.name}, Malappuram. All rights reserved.</span>
          </p>

          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-gold-light transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/terms" className="hover:text-gold-light transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
