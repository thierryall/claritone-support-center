import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { popularVideos } from '../mockData';

const HowToVideos = () => {
  const [expandedVideo, setExpandedVideo] = useState(0);

  const toggleVideo = (index) => {
    setExpandedVideo(expandedVideo === index ? -1 : index);
  };

  return (
    <section id="videos" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              How to Videos
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Need visual instructions? Our how-to videos walk you through common tasks — from device setup to cleaning, care, and everyday use. We have a comprehensive selection of Phonak How-To Videos is designed to simplify every step for you. From cleaning and care tips to pairing your hearing aid with various devices and troubleshooting any problems that may arise, we've got you covered.
            </p>

            <div className="pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular videos</h3>
              
              <div className="space-y-4">
                {popularVideos.map((video, index) => (
                  <div key={video.id} className="border-b border-gray-200 pb-4">
                    <button
                      onClick={() => toggleVideo(index)}
                      className="w-full flex items-start justify-between text-left group"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#003C50] transition-colors pr-4">
                        {video.title}
                      </h4>
                      {expandedVideo === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                      )}
                    </button>
                    {expandedVideo === index && (
                      <div className="mt-4">
                        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${video.videoId}`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button className="bg-[#C8DC00] hover:bg-[#B5C900] text-black font-medium px-8 py-6 text-base">
                  View all videos
                </Button>
              </div>
            </div>
          </div>

          {/* Right image - circular */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1692160756286-577a79b17e68?w=800"
                  alt="How to Videos"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#003C50] rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToVideos;