import React from 'react';
import { Download, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { userGuides } from '../mockData';

const UserGuides = () => {
  return (
    <section id="guides" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left image - circular */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1758686254545-2e8a33d39adb?w=800"
                  alt="User Guides"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#C8DC00] rounded-full opacity-30 blur-2xl"></div>
            </div>
          </div>

          {/* Right content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              User Guides
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Prefer written guides? Download clear, step-by-step user manuals with helpful tips and troubleshooting advice. Our user guides are designed to help you get the most out of your Phonak hearing aids and accessories.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're a new user or looking to explore more advanced features, our user guides are your go-to resource for confident, independent hearing care.
            </p>

            <div className="pt-6 space-y-4">
              {userGuides.map((guide) => (
                <Card key={guide.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {guide.title}
                      </h3>
                      <div className="flex items-center gap-3">
                        <button 
                          className="flex items-center gap-2 text-[#003C50] hover:text-[#C8DC00] transition-colors"
                          onClick={() => window.alert('PDF download would start here')}
                        >
                          <Download className="w-5 h-5" />
                          <span className="text-sm font-medium">Download</span>
                        </button>
                        <button className="text-gray-600 hover:text-[#003C50] transition-colors">
                          <Share2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <Button className="bg-[#C8DC00] hover:bg-[#B5C900] text-black font-medium px-8 py-6 text-base">
                View all user guides
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserGuides;