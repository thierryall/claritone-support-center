import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    { label: 'Your Hearing', hasDropdown: true },
    { label: 'Hearing Solutions', hasDropdown: true },
    { label: 'Support', hasDropdown: false },
    { label: 'For Professionals', hasDropdown: true }
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top banner */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-700">
              Choose another country or region to see content specific to your location.
            </p>
            <div className="flex items-center gap-3">
              <select className="text-sm border border-gray-300 rounded px-3 py-1.5 bg-white">
                <option>International / English</option>
              </select>
              <Button variant="default" size="sm" className="bg-[#3d4f5c] hover:bg-[#2d3f4c] text-white">
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Announcement bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-center">
          <p className="text-sm">
            <a href="#" className="underline font-medium">Find a provider</a> today and experience Claritone!
          </p>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://customer-assets.emergentagent.com/job_audio-helper-2/artifacts/bsjuhap7_Copy%20of%20Copy%20of%20Logo%20jpeg.jpg" 
              alt="Claritone" 
              className="h-16 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveMenu(index)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-[#ECC274] transition-colors">
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <a href="tel:+13073161639" className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-[#ECC274] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden lg:inline">+1 307 316 1639</span>
            </a>
            <a href="mailto:support@claritone.net" className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-[#ECC274] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="hidden lg:inline">Support</span>
            </a>
            <Button className="bg-[#ECC274] hover:bg-[#d9b065] text-gray-900 font-semibold border-none">
              Find A Provider
            </Button>
            <button className="text-gray-900 hover:text-[#ECC274] transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;