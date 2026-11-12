import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import { hospital } from '../config/hospital';
import { treatmentsData } from '../data/treatments';
import { doctorsData } from '../data/doctors';
import { AppointmentFormData } from '../types';
import { buildAppointmentWhatsAppMessage, openWhatsApp } from '../services/whatsappService';
import { submitAppointmentRequest } from '../services/appointmentService';

interface AppointmentFormProps {
  initialTreatment?: string;
  initialDoctor?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialTreatment = '',
  initialDoctor = ''
}) => {
  // Today's date in YYYY-MM-DD format for min attribute
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    preferredTreatment: initialTreatment || '',
    preferredDoctor: initialDoctor || '',
    preferredDate: '',
    preferredTime: '',
    additionalMessage: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AppointmentFormData, string>>>({});
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'info' | 'success' | 'error'; text: string } | null>(null);

  const timeSlots = [
    '09:30 AM – 11:00 AM',
    '11:00 AM – 01:00 PM',
    '02:00 PM – 04:00 PM',
    '04:00 PM – 06:00 PM',
    '06:00 PM – 07:30 PM'
  ];

  const validate = (): boolean => {
    const errs: Partial<Record<keyof AppointmentFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter a valid full name.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else {
      // Basic international / Indian phone validation (at least 9 digits)
      const digitsOnly = formData.phone.replace(/\D/g, '');
      if (digitsOnly.length < 10) {
        errs.phone = 'Please enter a valid 10-digit phone number.';
      }
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please provide a valid email address.';
      }
    }

    if (!formData.preferredTreatment) {
      errs.preferredTreatment = 'Please select a preferred dental treatment.';
    }

    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select your preferred appointment date.';
    } else if (formData.preferredDate < today) {
      errs.preferredDate = 'Appointment date cannot be in the past.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof AppointmentFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleReviewRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setShowSummaryModal(true);
    }
  };

  const handleConfirmAndSendWhatsApp = async () => {
    setSubmitting(true);
    try {
      // Submit through modular service (ready for future Django REST Framework API)
      const apiResult = await submitAppointmentRequest(formData);

      // Construct verified WhatsApp message
      const message = buildAppointmentWhatsAppMessage(formData);
      
      // Open WhatsApp
      openWhatsApp(message);

      setShowSummaryModal(false);
      setStatusMessage({
        type: 'info',
        text: 'Your appointment request has been formatted and forwarded via WhatsApp. Please note that our reception team in Malappuram will review slot availability and confirm your scheduled visit.'
      });
    } catch (err) {
      setStatusMessage({
        type: 'error',
        text: 'There was an issue opening WhatsApp. You can also call us directly at +91 7510885193.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-borderSoft shadow-card">
      <div className="mb-8">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-2">
          Request an Appointment
        </h3>
        <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
          Fill out your details to request a consultation with <span className="font-semibold text-maroon">{hospital.name}</span> in Malappuram. We will review availability and confirm your schedule.
        </p>
      </div>

      {statusMessage && (
        <div
          className={`mb-6 p-4 rounded-xl text-sm flex items-start gap-3 border ${
            statusMessage.type === 'error'
              ? 'bg-red-50 text-red-800 border-red-200'
              : 'bg-maroon-50 text-maroon border-maroon-100'
          }`}
        >
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-maroon" />
          <div className="space-y-1">
            <p className="font-semibold">{statusMessage.text}</p>
            <p className="text-xs text-charcoal-muted">
              Note: Slot availability is subject to clinic confirmation.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleReviewRequest} noValidate className="space-y-6">
        {/* Two column grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
              Full Name <span className="text-maroon">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rahul Menon"
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-charcoal focus:outline-none focus:ring-2 transition-colors ${
                  errors.fullName
                    ? 'border-red-400 focus:ring-red-200 bg-red-50/30'
                    : 'border-borderSoft focus:ring-maroon/20 focus:border-maroon'
                }`}
              />
            </div>
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
              Phone Number <span className="text-maroon">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-charcoal focus:outline-none focus:ring-2 transition-colors ${
                  errors.phone
                    ? 'border-red-400 focus:ring-red-200 bg-red-50/30'
                    : 'border-borderSoft focus:ring-maroon/20 focus:border-maroon'
                }`}
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
              Email Address <span className="text-xs text-charcoal-muted lowercase font-normal">(optional)</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-charcoal focus:outline-none focus:ring-2 transition-colors ${
                  errors.email
                    ? 'border-red-400 focus:ring-red-200 bg-red-50/30'
                    : 'border-borderSoft focus:ring-maroon/20 focus:border-maroon'
                }`}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Preferred Treatment */}
          <div>
            <label htmlFor="preferredTreatment" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
              Preferred Treatment <span className="text-maroon">*</span>
            </label>
            <select
              id="preferredTreatment"
              name="preferredTreatment"
              value={formData.preferredTreatment}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-charcoal bg-white focus:outline-none focus:ring-2 transition-colors ${
                errors.preferredTreatment
                  ? 'border-red-400 focus:ring-red-200 bg-red-50/30'
                  : 'border-borderSoft focus:ring-maroon/20 focus:border-maroon'
              }`}
            >
              <option value="">Select a treatment</option>
              {treatmentsData.map((t) => (
                <option key={t.id} value={t.title}>
                  {t.title} ({t.category})
                </option>
              ))}
              <option value="General Consultation">General Consultation / First Visit</option>
              <option value="Emergency Dental Care">Emergency Toothache / Trauma</option>
            </select>
            {errors.preferredTreatment && (
              <p className="mt-1 text-xs text-red-600">{errors.preferredTreatment}</p>
            )}
          </div>

          {/* Preferred Doctor */}
          <div>
            <label htmlFor="preferredDoctor" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
              Preferred Doctor <span className="text-xs text-charcoal-muted lowercase font-normal">(optional)</span>
            </label>
            <select
              id="preferredDoctor"
              name="preferredDoctor"
              value={formData.preferredDoctor}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-borderSoft text-sm text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon transition-colors"
            >
              <option value="">Any Available Specialist</option>
              {doctorsData.map((d) => (
                <option key={d.id} value={d.specialization}>
                  {d.specialization} ({d.qualification})
                </option>
              ))}
            </select>
          </div>

          {/* Preferred Date */}
          <div>
            <label htmlFor="preferredDate" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
              Preferred Date <span className="text-maroon">*</span>
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="preferredDate"
                name="preferredDate"
                type="date"
                min={today}
                value={formData.preferredDate}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-charcoal focus:outline-none focus:ring-2 transition-colors ${
                  errors.preferredDate
                    ? 'border-red-400 focus:ring-red-200 bg-red-50/30'
                    : 'border-borderSoft focus:ring-maroon/20 focus:border-maroon'
                }`}
              />
            </div>
            {errors.preferredDate && (
              <p className="mt-1 text-xs text-red-600">{errors.preferredDate}</p>
            )}
          </div>
        </div>

        {/* Preferred Time Slot */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
            Preferred Time Window
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {timeSlots.map((slot) => {
              const isSelected = formData.preferredTime === slot;
              return (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, preferredTime: slot }))}
                  className={`px-3 py-2 text-xs font-medium rounded-xl border transition-all text-center flex items-center justify-center gap-1 ${
                    isSelected
                      ? 'border-maroon bg-maroon text-white shadow-sm'
                      : 'border-borderSoft bg-ivory/50 text-charcoal hover:border-maroon/30 hover:bg-white'
                  }`}
                >
                  <Clock className="w-3 h-3" />
                  <span>{slot}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Additional Message */}
        <div>
          <label htmlFor="additionalMessage" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
            Additional Message or Symptoms <span className="text-xs text-charcoal-muted lowercase font-normal">(optional)</span>
          </label>
          <div className="relative">
            <FileText className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-3.5" />
            <textarea
              id="additionalMessage"
              name="additionalMessage"
              rows={3}
              value={formData.additionalMessage}
              onChange={handleChange}
              placeholder="Tell us if you have current tooth pain, sensitivity, previous treatments, or special requests..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-borderSoft text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon transition-colors"
            />
          </div>
        </div>

        {/* Submit review button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#77CDFF] hover:bg-[#5bb8f5] text-[#07273F] font-bold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <span>Review &amp; Send WhatsApp Request</span>
            <MessageCircle className="w-4 h-4 text-[#07273F]" />
          </button>
          <p className="mt-3 text-xs text-charcoal-muted">
            * Direct WhatsApp transmission ensures fast communication with our clinic desk at {hospital.location}.
          </p>
        </div>
      </form>

      {/* Summary & Confirmation Modal */}
      {showSummaryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-borderSoft overflow-hidden relative">
            <div className="flex items-start justify-between pb-4 border-b border-borderSoft">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-maroon-50 text-maroon flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-maroon" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-charcoal">
                    Appointment Request Summary
                  </h4>
                  <p className="text-xs text-charcoal-muted">
                    {hospital.name} • {hospital.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Request Details Review */}
            <div className="py-5 space-y-2.5 text-sm">
              <div className="flex justify-between py-1 border-b border-borderSoft/60">
                <span className="text-charcoal-muted">Patient Name:</span>
                <span className="font-semibold text-charcoal">{formData.fullName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-borderSoft/60">
                <span className="text-charcoal-muted">Phone Number:</span>
                <span className="font-semibold text-charcoal">{formData.phone}</span>
              </div>
              {formData.email && (
                <div className="flex justify-between py-1 border-b border-borderSoft/60">
                  <span className="text-charcoal-muted">Email:</span>
                  <span className="font-semibold text-charcoal">{formData.email}</span>
                </div>
              )}
              <div className="flex justify-between py-1 border-b border-borderSoft/60">
                <span className="text-charcoal-muted">Treatment:</span>
                <span className="font-semibold text-maroon">{formData.preferredTreatment}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-borderSoft/60">
                <span className="text-charcoal-muted">Preferred Doctor:</span>
                <span className="font-semibold text-charcoal">
                  {formData.preferredDoctor || 'Any Available Specialist'}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-borderSoft/60">
                <span className="text-charcoal-muted">Date &amp; Time:</span>
                <span className="font-semibold text-charcoal">
                  {formData.preferredDate} ({formData.preferredTime || 'Flexible'})
                </span>
              </div>
              {formData.additionalMessage && (
                <div className="pt-1">
                  <span className="text-xs text-charcoal-muted block mb-1">Message:</span>
                  <p className="text-xs text-charcoal bg-ivory p-2.5 rounded-lg border border-borderSoft">
                    {formData.additionalMessage}
                  </p>
                </div>
              )}
            </div>

            {/* Availability Notice */}
            <div className="bg-maroon-50 border border-maroon-100 rounded-xl p-3 mb-6 text-xs text-charcoal leading-relaxed">
              <p className="font-semibold text-maroon mb-1">Important Note:</p>
              Sending this request will open WhatsApp to message our hospital desk directly. The appointment is finalized once our clinic verifies the doctor's schedule and confirms your slot.
            </div>

            {/* Action buttons */}
            <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowSummaryModal(false)}
                className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-charcoal hover:bg-ivory rounded-xl border border-borderSoft transition-colors"
              >
                Back &amp; Edit
              </button>
              <button
                type="button"
                disabled={submitting}
                onClick={handleConfirmAndSendWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-2.5 text-sm font-semibold rounded-xl shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>{submitting ? 'Preparing...' : 'Send Request via WhatsApp'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
