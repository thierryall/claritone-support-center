import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#3d4f5c] text-white py-12 relative">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 bg-white text-[#3d4f5c] rounded-full p-4 shadow-lg hover:bg-[#f0f4f8] hover:text-[#2d3f4c] transition-all transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Your Hearing</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hearing Loss</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tinnitus</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Online Hearing Test</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Find a Provider</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hearing Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hearing Aids</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Wireless Accessories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Crystal Clear Technology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Apps</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">How to Videos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">User Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Knowledge Base</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold text-lg mb-4">About Claritone</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Innovation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_audio-helper-2/artifacts/bsjuhap7_Copy%20of%20Copy%20of%20Logo%20jpeg.jpg" 
                alt="Claritone" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors">Legal Notice</a>
            </div>
            
            <div className="text-sm text-gray-400">
              © 2025 Claritone. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;