import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { ContactFormData } from '../types';
import { submitContactMessage } from '../services/contactService';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ success: boolean; message: string } | null>(null);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number.';
    } else {
      const digits = formData.phone.replace(/\D/g, '');
      if (digits.length < 10) {
        errs.phone = 'Please provide a valid 10-digit phone number.';
      }
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please provide a valid email address.';
      }
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please specify the subject of your inquiry.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please write your message or query.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setFeedback(null);

    try {
      const res = await submitContactMessage(formData);
      setFeedback({
        success: res.success,
        message: res.message
      });
      if (res.success) {
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (err: any) {
      setFeedback({
        success: false,
        message: 'Could not transmit message. Please call our clinic directly.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-borderSoft shadow-card">
      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-2">
        Send Us a Message
      </h3>
      <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
        Have questions regarding treatments, clinic timings, or facilities? Submit your inquiry below and our team will get back to you promptly.
      </p>

      {feedback && (
        <div
          className={`mb-6 p-4 rounded-xl text-sm flex items-start gap-3 border ${
            feedback.success
              ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
              : 'bg-red-50 text-red-900 border-red-200'
          }`}
        >
          {feedback.success ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          )}
          <p>{feedback.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contactName" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
              Your Name <span className="text-maroon">*</span>
            </label>
            <input
              id="contactName"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Ananya Suresh"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-charcoal focus:outline-none focus:ring-2 ${
                errors.name
                  ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                  : 'border-borderSoft focus:ring-maroon/20 focus:border-maroon'
              }`}
            />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="contactPhone" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
              Phone Number <span className="text-maroon">*</span>
            </label>
            <input
              id="contactPhone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-charcoal focus:outline-none focus:ring-2 ${
                errors.phone
                  ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                  : 'border-borderSoft focus:ring-maroon/20 focus:border-maroon'
              }`}
            />
            {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contactEmail" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
              Email Address <span className="text-xs text-charcoal-muted lowercase font-normal">(optional)</span>
            </label>
            <input
              id="contactEmail"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@domain.com"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-charcoal focus:outline-none focus:ring-2 ${
                errors.email
                  ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                  : 'border-borderSoft focus:ring-maroon/20 focus:border-maroon'
              }`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="contactSubject" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
              Subject <span className="text-maroon">*</span>
            </label>
            <input
              id="contactSubject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Treatment Inquiry / Appointment Query"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-charcoal focus:outline-none focus:ring-2 ${
                errors.subject
                  ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                  : 'border-borderSoft focus:ring-maroon/20 focus:border-maroon'
              }`}
            />
            {errors.subject && <p className="mt-1 text-xs text-red-600">{errors.subject}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="contactMessage" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
            Your Message <span className="text-maroon">*</span>
          </label>
          <textarea
            id="contactMessage"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-charcoal focus:outline-none focus:ring-2 ${
              errors.message
                ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                : 'border-borderSoft focus:ring-maroon/20 focus:border-maroon'
            }`}
          />
          {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 bg-[#77CDFF] hover:bg-[#5bb8f5] text-[#07273F] px-7 py-3 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95 disabled:opacity-50"
        >
          <span>{loading ? 'Submitting...' : 'Send Message'}</span>
          <Send className="w-4 h-4 text-[#07273F]" />
        </button>
      </form>
    </div>
  );
};
