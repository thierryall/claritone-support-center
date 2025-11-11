import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const ContactSupport = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left content */}
            <div className="p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Not finding what you are looking for?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                If you're unable to find the answers you're looking for, we're here to help. Our dedicated support team is ready to assist with any questions about your hearing aids, accessories, or troubleshooting needs.
              </p>

              <Button className="bg-[#003C50] hover:bg-[#002A38] text-white font-medium px-8 py-6 text-base w-fit group">
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Right image */}
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1758686254082-0f91a27b3075?w=800"
                alt="Contact Support"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;