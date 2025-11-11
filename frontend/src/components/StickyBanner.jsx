import React, { useEffect } from 'react';
import { Button } from './ui/button';

const StickyBanner = () => {
  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/your-calendly-username/onboarding-call'
      });
    }
  };

  return (
    <div className="sticky top-0 z-[100] bg-[#ECC274] border-b border-[#d9b065] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-sm md:text-base font-medium text-gray-900 text-center sm:text-left">
            Book your free onboarding call now — our team will help you set up your hearing aids correctly
          </p>
          <Button 
            className="bg-[#3d4f5c] hover:bg-[#2d3f4c] text-white font-semibold px-6 py-2 whitespace-nowrap"
            onClick={openCalendly}
          >
            Book
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyBanner;
