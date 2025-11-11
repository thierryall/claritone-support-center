import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#003C50] text-white py-12 relative">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 bg-white text-[#003C50] rounded-full p-4 shadow-lg hover:bg-[#C8DC00] hover:text-black transition-all transform hover:scale-110"
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
              <li><a href="#" className="text-gray-300 hover:text-[#C8DC00] transition-colors">Hearing Loss</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#C8DC00] transition-colors">Tinnitus</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#C8DC00] transition-colors">Online Hearing Test</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#C8DC00] transition-colors">Find a Provider</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hearing Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#C8DC00] transition-colors">Hearing Aids</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#C8DC00] transition-colors">Wireless Accessories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#C8DC00] transition-colors">Roger Technology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#C8DC00] transition-colors">Apps</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#C8DC00] transition-colors">How to Videos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#C8DC00] transition-colors">User Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#C8DC00] transition-colors">Knowledge Base</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#C8DC00] transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold text-lg mb-4">About Phonak</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#C8DC00] transition-colors">Our Story</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#C8DC00] transition-colors">Innovation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#C8DC00] transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#C8DC00] transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-bold">
              <span>PHONAK</span>
              <div className="text-xs text-gray-400 tracking-wide">life is on</div>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#C8DC00] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#C8DC00] transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-[#C8DC00] transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-[#C8DC00] transition-colors">Legal Notice</a>
            </div>
            
            <div className="text-sm text-gray-400">
              © 2025 Sonova AG. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;