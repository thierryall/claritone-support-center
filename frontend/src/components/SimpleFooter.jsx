import React from 'react';

const SimpleFooter = () => {
  return (
    <footer className="bg-[#3d4f5c] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_audio-helper-2/artifacts/bsjuhap7_Copy%20of%20Copy%20of%20Logo%20jpeg.jpg" 
              alt="Claritone" 
              className="h-10 w-auto brightness-0 invert"
            />
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Contact Support</a>
          </div>
          
          <div className="text-sm text-gray-400">
            © 2025 Claritone. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;