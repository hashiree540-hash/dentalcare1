import { ContactFormData, ApiResponse } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export const submitContactMessage = async (
  formData: ContactFormData
): Promise<ApiResponse<ContactFormData>> => {
  if (API_BASE_URL) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || 'Failed to submit contact message');
      }

      const data = await response.json();
      return {
        success: true,
        message: 'Your inquiry has been sent to our reception desk.',
        data
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.message || 'Error transmitting message to server.',
        error: error.message
      };
    }
  }

  // Fallback demo mode
  return {
    success: true,
    message: 'Your message has been prepared. For immediate response, please connect directly with our clinic on WhatsApp or phone.',
    data: formData
  };
};
