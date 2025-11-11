import React from 'react';

const HeroSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Phonak Support<span className="inline-block w-4 h-4 bg-[#C8DC00] rounded-full ml-2 align-middle"></span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Easy Help for Hearing Aids, Apps, and Roger™ Devices
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Looking for simple, reliable help with your Phonak hearing aids or Roger™ wireless microphones? Our Support Center offers everything you need to get started, stay connected, and solve issues with confidence.
            </p>
            
            <p className="text-lg text-gray-900 font-medium">
              Explore our most popular support topics, including:
            </p>

            {/* Jump to links */}
            <div className="pt-4 space-y-3">
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Jump to:</p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('videos')}
                  className="text-[#003C50] hover:text-[#C8DC00] font-medium underline transition-colors"
                >
                  How to Videos
                </button>
                <button
                  onClick={() => scrollToSection('guides')}
                  className="text-[#003C50] hover:text-[#C8DC00] font-medium underline transition-colors"
                >
                  User Guides
                </button>
                <button
                  onClick={() => scrollToSection('knowledge-base')}
                  className="text-[#003C50] hover:text-[#C8DC00] font-medium underline transition-colors"
                >
                  Knowledge Base
                </button>
              </div>
            </div>
          </div>

          {/* Right image - circular */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1632054890601-224e2e65bebb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWx0aGNhcmV8ZW58MHx8fHwxNzYyODUxNDU0fDA&ixlib=rb-4.1.0&q=85&w=800"
                  alt="Phonak Support"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative green circle */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#C8DC00] rounded-full opacity-40 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;