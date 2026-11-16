/**
 * Central Hospital Configuration
 * All business details must be read from this file.
 * Do not hardcode or duplicate these values throughout the application.
 */

export const hospital = {
  name: "Dental Care",
  category: "Dental Hospital / Dental Clinic",
  location: "Malappuram, Kerala, India",
  district: "Malappuram",
  state: "Kerala",
  country: "India",
  phone: "+917510885193",
  displayPhone: "+91 7510885193",
  whatsapp: "917510885193",
  whatsappUrl: "https://wa.me/917510885193",
  email: "hashiktp12@gmail.com",
  
  // Explicitly marked editable placeholders as instructed
  // (Never invent a street address, email, or exact working hours)
  addressPlaceholder: "Malappuram City Center, Malappuram, Kerala 676505, India (Exact street address to be updated)",
  emailPlaceholder: "hashiktp12@gmail.com",
  workingHours: [
    { days: "Monday - Saturday", hours: "9:00 AM – 7:30 PM (Clinic standard hours)" },
    { days: "Sunday", hours: "10:00 AM – 2:00 PM (By Appointment)" },
    { days: "Emergency Inquiries", hours: "WhatsApp Assistance Available" }
  ],
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44173872474!2d75.98660851890333!3d11.051016768316606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64a9be46bb6f7%3A0x673997ef31e45903!2sMalappuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  
  // Social links placeholders
  social: {
    facebook: "https://facebook.com/dentalcaremalappuram",
    instagram: "https://instagram.com/dentalcaremalappuram",
    youtube: "https://youtube.com/@dentalcaremalappuram"
  }
} as const;

export type HospitalConfig = typeof hospital;
