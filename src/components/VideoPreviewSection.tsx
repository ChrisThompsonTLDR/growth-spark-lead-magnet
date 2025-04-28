
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface VideoPreviewSectionProps {
  scrollToForm: () => void;
}

const VideoPreviewSection = ({ scrollToForm }: VideoPreviewSectionProps) => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-lavender-300/10 border-2 border-white">
              {/* Video thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 to-navy-600/80 z-10"></div>
              <div className="bg-gray-200 w-full h-full">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1200" 
                  alt="Video preview image" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg cursor-pointer">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-navy-700 border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
              
              {/* Video duration badge */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 text-xs rounded z-20">
                5:00
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Unlock Your <span className="gradient-text">Free 5-Minute</span> Intro Video
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Discover the core principles of our comprehensive personal growth system in this concise video overview:
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "The 3 hidden mindset shifts that accelerate growth",
                "Why most personal development efforts fail (and how to avoid it)",
                "Our proven framework for creating lasting change in all life areas",
                "How to maintain momentum when faced with obstacles"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="text-navy-500 mr-3">✓</div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              onClick={scrollToForm}
              className="growth-btn-gradient font-medium text-lg py-6 px-8 rounded-full shadow-lg shadow-navy-500/20"
            >
              Get Instant Access <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPreviewSection;
