export interface Doctor {
  id: string;
  slug: string;
  name: string;
  qualification: string;
  specialization: string;
  experienceYears: number | string;
  image: string;
  shortBio: string;
  fullBio: string;
  expertise: string[];
  education: string[];
  schedule: string;
  isPlaceholder?: boolean;
}

export interface TreatmentFAQ {
  question: string;
  answer: string;
}

export interface Treatment {
  id: string;
  slug: string;
  title: string;
  category: 'Restorative' | 'Cosmetic' | 'Orthodontics' | 'Surgical' | 'Preventive' | 'Pediatric';
  shortDescription: string;
  heroImage: string;
  cardImage: string;
  whatIs: string;
  whyRecommended: string[];
  benefits: string[];
  procedureSteps: {
    stepNumber: number;
    title: string;
    description: string;
  }[];
  faqs: TreatmentFAQ[];
  relatedSlugs: string[];
  isFeatured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  treatment: string;
  rating: number;
  date: string;
  comment: string;
  isDemonstration?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Hospital Interior' | 'Dental Equipment' | 'Treatment Rooms' | 'Doctors and Staff' | 'Patient Care';
  image: string;
  description: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredTreatment: string;
  preferredDoctor: string;
  preferredDate: string;
  preferredTime: string;
  additionalMessage: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
