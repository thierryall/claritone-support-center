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
              <Button variant="default" size="sm" className="bg-[#003C50] hover:bg-[#002A38] text-white">
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
            <a href="#" className="underline font-medium">Find a provider</a> today and experience Phonak Infinio!
          </p>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-gray-900">PHONAK</span>
              <div className="text-xs text-gray-600 tracking-wide">life is on</div>
            </div>
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
                <button className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-[#C8DC00] transition-colors">
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-[#C8DC00] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
              Online hearing test
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-[#C8DC00] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Professional Login
            </button>
            <Button className="bg-[#C8DC00] hover:bg-[#B5C900] text-black font-medium">
              Find A Provider
            </Button>
            <button className="text-gray-900 hover:text-[#C8DC00] transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;