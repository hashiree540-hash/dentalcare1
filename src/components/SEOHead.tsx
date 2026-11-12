import React, { useEffect } from 'react';
import { hospital } from '../config/hospital';

interface SEOHeadProps {
  title: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  schemaType?: 'Dentist' | 'MedicalWebPage' | 'AboutPage' | 'ContactPage';
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description = 'Dental Care is a dedicated dental hospital in Malappuram, Kerala, India offering dental implants, root canal therapy, braces, teeth whitening, and compassionate patient-first oral healthcare.',
  keywords = 'Dental Care Malappuram, Dental Clinic Malappuram, Dental Hospital Malappuram, Dentist in Malappuram, Dental Treatments in Malappuram, Kerala Dental Clinic',
  canonicalPath = '',
  schemaType = 'Dentist'
}) => {
  const fullTitle = `${title} | ${hospital.name} - Malappuram, Kerala`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', description);
      document.head.appendChild(metaDesc);
    }

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": schemaType,
      "name": hospital.name,
      "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
      "telephone": hospital.phone,
      "url": window.location.origin,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Malappuram",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 11.051,
        "longitude": 76.0711
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:30"
        }
      ],
      "priceRange": "$$"
    };

    let scriptTag = document.getElementById('json-ld-dentist') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-dentist';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
  }, [fullTitle, description, keywords, canonicalPath, schemaType]);

  return null;
};
