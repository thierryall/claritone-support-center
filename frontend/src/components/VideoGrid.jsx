import React, { useState } from 'react';
import { X, Play } from 'lucide-react';
import { videoCategories } from '../mockData';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const VideoGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openCategory = (category) => {
    setSelectedCategory(category);
  };

  const closeCategory = () => {
    setSelectedCategory(null);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videoCategories.map(category => (
            <Card 
              key={category.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gray-50 border-none"
            >
              <CardContent className="p-8 flex flex-col items-center text-center">
                {/* Circular Image */}
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Watch Videos Button */}
                <Button 
                  onClick={() => openCategory(category)}
                  variant="ghost"
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  Watch videos
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Category Videos Modal */}
        {selectedCategory && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={closeCategory}>
            <div className="relative w-full max-w-4xl bg-white rounded-lg" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={closeCategory}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              <div className="p-8">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                    <img 
                      src={selectedCategory.image} 
                      alt={selectedCategory.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedCategory.title}</h2>
                    <p className="text-gray-600">{selectedCategory.videoCount} videos</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                  {selectedCategory.videos.map(video => (
                    <button
                      key={video.id}
                      onClick={() => setSelectedVideo(video)}
                      className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left group"
                    >
                      <div className="w-12 h-12 bg-[#3d4f5c] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#2d3f4c] transition-colors">
                        <Play className="w-6 h-6 text-white" fill="currentColor" />
                      </div>
                      <span className="font-medium text-gray-900">{video.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Player Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-[60] flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
            <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="aspect-video bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedVideo.title}</h2>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoGrid;