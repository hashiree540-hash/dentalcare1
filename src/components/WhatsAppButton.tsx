import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { hospital } from '../config/hospital';

export const WhatsAppButton: React.FC = () => {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  return (
    <div className="fixed bottom-6 right-5 z-40 flex items-end flex-col select-none print:hidden">
      {/* Mini notification bubble on first load */}
      {tooltipVisible && (
        <div className="mb-2 bg-white text-charcoal px-3 py-1.5 rounded-xl shadow-card border border-borderSoft text-xs font-medium flex items-center gap-2 animate-bounce">
          <span>Need help? Chat with us!</span>
          <button
            onClick={() => setTooltipVisible(false)}
            className="text-charcoal-muted hover:text-charcoal p-0.5"
            aria-label="Dismiss chat hint"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating button */}
      <a
        href={hospital.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${hospital.name} on WhatsApp`}
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <span className="sr-only">Contact on WhatsApp</span>
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />

        {/* Subtle pulsating outer ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-50 animate-ping -z-10" />
      </a>
    </div>
  );
};
