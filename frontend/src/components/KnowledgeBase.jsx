import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { knowledgeBaseArticles } from '../mockData';

const KnowledgeBase = () => {
  const [expandedArticle, setExpandedArticle] = useState(null);

  const toggleArticle = (id) => {
    setExpandedArticle(expandedArticle === id ? null : id);
  };

  return (
    <section id="knowledge-base" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Knowledge Base
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Have questions? Our <strong>Knowledge Base</strong> offers in-depth support articles, feature explanations, and solutions to common problems — all designed to make your hearing experience as smooth and stress-free as possible.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're setting up for the first time or exploring advanced features, we're here to help you get the most out of your Claritone devices.
            </p>

            <div className="pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular articles</h3>
              
              <div className="space-y-4">
                {knowledgeBaseArticles.map((article) => (
                  <div key={article.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <button
                      onClick={() => toggleArticle(article.id)}
                      className="w-full flex items-start justify-between p-6 text-left group bg-white hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1 pr-4">
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#3d4f5c] transition-colors mb-2">
                          {article.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {article.summary}
                        </p>
                      </div>
                      {expandedArticle === article.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                      )}
                    </button>
                    {expandedArticle === article.id && (
                      <div className="px-6 pb-6 bg-gray-50">
                        <div className="prose prose-sm max-w-none text-gray-700">
                          {article.content.split('\n').map((paragraph, idx) => (
                            <p key={idx} className="mb-3 leading-relaxed whitespace-pre-wrap">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button className="bg-[#f0f4f8] hover:bg-[#e0e8f0] text-[#3d4f5c] font-semibold border border-[#3d4f5c] px-8 py-6 text-base">
                  View all Knowledge Base articles
                </Button>
              </div>
            </div>
          </div>

          {/* Right image - circular with decorative element */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1709715357479-591f9971fb05?w=800"
                  alt="Knowledge Base Support"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative circle overlay */}
              <div className="absolute top-10 -right-10 w-32 h-32 bg-[#3d4f5c] rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBase;