import React, { useState } from 'react';
import { Star, MessageSquare, AlertCircle, CheckCircle2, Send } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';
import { PageHeader } from '../components/PageHeader';
import { TestimonialCard } from '../components/TestimonialCard';
import { SEOHead } from '../components/SEOHead';
import { hospital } from '../config/hospital';

export const Reviews: React.FC = () => {
  const [reviewsList, setReviewsList] = useState(testimonialsData);
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    treatment: '',
    comment: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submittedFeedback, setSubmittedFeedback] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.comment.trim()) errs.comment = 'Please provide your feedback or review.';
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Append to local demo list
    const newReview = {
      id: `user-${Date.now()}`,
      name: `${formData.name.trim()} (Submitted Feedback)`,
      location: 'Malappuram, Kerala',
      treatment: formData.treatment || 'General Consultation',
      rating: formData.rating,
      date: 'Just Now',
      comment: formData.comment.trim(),
      isDemonstration: true
    };

    setReviewsList([newReview, ...reviewsList]);
    setSubmittedFeedback(
      'Thank you for submitting your feedback! In accordance with clinical review policies, patient submissions are received for hospital moderation before permanent public posting.'
    );

    setFormData({
      name: '',
      rating: 5,
      treatment: '',
      comment: ''
    });
  };

  return (
    <>
      <SEOHead
        title="Patient Reviews and Experiences"
        description="Read patient feedback and experience stories from visitors of Dental Care in Malappuram, Kerala."
        schemaType="MedicalWebPage"
      />

      <PageHeader
        eyebrow="PATIENT STORIES"
        title="What Our Patients Say"
        description="Genuine feedback and patient experiences guide our constant dedication to gentle, transparent dentistry in Malappuram."
        breadcrumbs={[{ label: 'Reviews' }]}
      />

      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Demonstration Notice Alert */}
          <div className="mb-12 p-5 rounded-2xl bg-white border border-borderSoft shadow-soft flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-maroon shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-charcoal">
              <span className="font-bold text-maroon">Verification Notice:</span> Sample reviews displayed on this page reflect demonstration feedback formats. In compliance with medical advertising regulations, verified public testimonials are published exclusively upon direct patient consent.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Reviews Grid (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-charcoal">
                Patient Feedback ({reviewsList.length})
              </h3>

              <div className="space-y-6">
                {reviewsList.map((t) => (
                  <TestimonialCard key={t.id} testimonial={t} />
                ))}
              </div>
            </div>

            {/* Right Column: Review Submission Form (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-borderSoft shadow-card sticky top-28 space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                    Share Your Experience
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    Have you visited {hospital.name}? We welcome your comments, impressions, and recommendations to help us continually enhance our patient care.
                  </p>
                </div>

                {submittedFeedback && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-900 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{submittedFeedback}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="revName" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                      Your Name <span className="text-maroon">*</span>
                    </label>
                    <input
                      id="revName"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Meera Nair"
                      className="w-full px-4 py-2.5 rounded-xl border border-borderSoft text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon"
                    />
                    {formErrors.name && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Rating Selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                      Your Rating <span className="text-maroon">*</span>
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className="p-1 focus:outline-none"
                          aria-label={`Rate ${star} star`}
                        >
                          <Star
                            className={`w-6 h-6 transition-colors ${
                              star <= formData.rating
                                ? 'fill-gold text-gold'
                                : 'text-borderSoft hover:text-gold-light'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-semibold text-charcoal ml-2">
                        {formData.rating} out of 5
                      </span>
                    </div>
                  </div>

                  {/* Treatment Received */}
                  <div>
                    <label htmlFor="revTreatment" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                      Treatment Received <span className="text-xs text-charcoal-muted lowercase font-normal">(optional)</span>
                    </label>
                    <input
                      id="revTreatment"
                      type="text"
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      placeholder="e.g. Teeth Whitening, Root Canal"
                      className="w-full px-4 py-2.5 rounded-xl border border-borderSoft text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon"
                    />
                  </div>

                  {/* Review Message */}
                  <div>
                    <label htmlFor="revComment" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                      Your Review <span className="text-maroon">*</span>
                    </label>
                    <textarea
                      id="revComment"
                      rows={4}
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      placeholder="Tell us about the clinic environment, consultation, and doctor care..."
                      className="w-full px-4 py-2.5 rounded-xl border border-borderSoft text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon"
                    />
                    {formErrors.comment && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.comment}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-maroon hover:bg-burgundy text-white font-semibold py-3 px-6 rounded-xl shadow-sm transition-all active:scale-95 text-sm"
                  >
                    <span>Submit Feedback</span>
                    <Send className="w-4 h-4 text-gold-light" />
                  </button>

                  <p className="text-[11px] text-charcoal-muted text-center pt-1">
                    Submitted reviews are stored in demonstration state for moderation.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
