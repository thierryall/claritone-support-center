import React from 'react';
import { Button } from './ui/button';

const StickyBanner = () => {
  return (
    <div className="sticky top-0 z-[100] bg-[#ffd700] border-b border-yellow-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-base md:text-lg font-bold text-gray-900">
              Just got your ClariTone?
            </p>
            <p className="text-sm md:text-base font-medium text-gray-900">
              Let's make sure it's set up right!
            </p>
            <p className="text-sm md:text-base text-gray-800">
              Call our support team for your free onboarding session — we'll walk you through everything step-by-step.
            </p>
          </div>
          <Button 
            className="bg-[#3d4f5c] hover:bg-[#2d3f4c] text-white font-semibold px-8 py-3 whitespace-nowrap text-base"
            onClick={() => window.location.href = '/booking'}
          >
            Book
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyBanner;
