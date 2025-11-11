import React from 'react';
import { Phone, Mail } from 'lucide-react';

const SimpleHeader = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://customer-assets.emergentagent.com/job_audio-helper-2/artifacts/bsjuhap7_Copy%20of%20Copy%20of%20Logo%20jpeg.jpg" 
              alt="Claritone" 
              className="h-14 w-auto"
            />
          </div>

          {/* Title */}
          <div className="hidden md:block">
            <h1 className="text-xl font-semibold text-gray-900">Support Center</h1>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#3d4f5c] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Support</span>
            </a>
            <a href="mailto:support@claritone.com" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#3d4f5c] transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Contact</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;