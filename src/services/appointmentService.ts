import { AppointmentFormData, ApiResponse } from '../types';

/**
 * Appointment Service (Backend-Ready Architecture)
 * Configured to connect to a Django REST Framework endpoint (e.g. /api/v1/appointments/)
 * when backend services are deployed.
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export const submitAppointmentRequest = async (
  formData: AppointmentFormData
): Promise<ApiResponse<AppointmentFormData>> => {
  // If an active backend endpoint is configured, submit via REST API
  if (API_BASE_URL) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/appointments/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || 'Failed to submit appointment to hospital server');
      }

      const data = await response.json();
      return {
        success: true,
        message: 'Appointment request recorded in hospital system.',
        data
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.message || 'Network error while contacting hospital server.',
        error: error.message
      };
    }
  }

  // Without a live backend, we do not fake a stored database record.
  // We return a clear status indicating the request is prepared for direct WhatsApp transmission.
  return {
    success: true,
    message: 'Appointment request details verified and formatted for direct WhatsApp transmission to Dental Care clinic staff.',
    data: formData
  };
};
