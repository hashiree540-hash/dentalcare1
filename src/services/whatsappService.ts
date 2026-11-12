import { hospital } from '../config/hospital';
import { AppointmentFormData } from '../types';

export const buildAppointmentWhatsAppMessage = (data: AppointmentFormData): string => {
  const lines = [
    `Hello ${hospital.name},`,
    '',
    'I would like to request a dental appointment.',
    '',
    `Patient Name: ${data.fullName.trim()}`,
    `Phone Number: ${data.phone.trim()}`,
    `Email: ${data.email.trim() || 'Not provided'}`,
    `Treatment: ${data.preferredTreatment}`,
    `Preferred Doctor: ${data.preferredDoctor || 'Any Available Specialist'}`,
    `Preferred Date: ${data.preferredDate}`,
    `Preferred Time: ${data.preferredTime || 'Flexible'}`,
    `Additional Message: ${data.additionalMessage.trim() || 'None'}`,
    '',
    'Please contact me regarding appointment availability.',
    '',
    'Thank you.'
  ];

  return lines.join('\n');
};

export const buildGeneralWhatsAppMessage = (treatmentTitle?: string): string => {
  if (treatmentTitle) {
    return `Hello ${hospital.name}, I would like to inquire about ${treatmentTitle} at your clinic in Malappuram.`;
  }
  return `Hello ${hospital.name}, I would like to inquire about dental services and appointment availability at your clinic in Malappuram.`;
};

export const openWhatsApp = (message: string): boolean => {
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${hospital.whatsapp}?text=${encoded}`;

  try {
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (!win || win.closed || typeof win.closed === 'undefined') {
      // Pop-up was blocked; fall back to navigating current window or returning false
      window.location.href = url;
    }
    return true;
  } catch (err) {
    window.location.href = url;
    return true;
  }
};
