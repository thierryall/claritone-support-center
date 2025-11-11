import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { trendingTopics } from '../mockData';

const TrendingTopics = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % trendingTopics.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + trendingTopics.length) % trendingTopics.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Trending topics
        </h2>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingTopics.map((topic, index) => (
              <Card
                key={topic.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-none"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {topic.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {topic.description}
                  </p>
                  <button className="flex items-center gap-2 text-[#003C50] hover:text-[#C8DC00] font-medium transition-colors group">
                    {topic.linkText}
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation buttons for mobile */}
          <div className="flex justify-center gap-4 mt-8 md:hidden">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;