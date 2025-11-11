import React, { useState, useEffect } from 'react';
import { X, Phone, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

const OnboardingPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-[200] flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative transform animate-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-3 -right-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 shadow-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Teal accent bar */}
        <div className="h-2 bg-gradient-to-r from-[#20B2AA] to-[#48D1CC] rounded-t-2xl"></div>

        <div className="p-8">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#20B2AA] to-[#48D1CC] rounded-full flex items-center justify-center shadow-lg">
              <Phone className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Just got your ClariTone?
            </h2>
            
            <p className="text-xl font-semibold text-[#3d4f5c]">
              Let's make sure it's set up right!
            </p>
            
            <p className="text-base text-gray-700 leading-relaxed">
              Call our support team for your free onboarding session — we'll walk you through everything step-by-step.
            </p>

            {/* Benefits list */}
            <div className="mt-6 space-y-3 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#20B2AA] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Free personalized setup assistance</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#20B2AA] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Expert guidance from our team</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#20B2AA] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Get the most out of your hearing aids</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Button 
              onClick={() => {
                window.location.href = '/booking';
              }}
              className="w-full bg-[#3d4f5c] hover:bg-[#2d3f4c] text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Book Your Free Call Now
            </Button>
            
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-gray-600 hover:text-gray-900 font-medium text-sm py-2 transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPopup;
