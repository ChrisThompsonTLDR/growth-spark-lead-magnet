
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface VideoPreviewSectionProps {
  scrollToForm: () => void;
}

const VideoPreviewSection = ({ scrollToForm }: VideoPreviewSectionProps) => {
  return (
    <div className="py-16 md:py-24 bg-sand-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-sage-300/10 border-2 border-white">
              {/* Vimeo video embed */}
              <div style={{padding:'75% 0 0 0', position:'relative'}}>
                <iframe 
                  src="https://player.vimeo.com/video/1091321976?h=74009b7c0f&badge=0&autopause=0&player_id=0&app_id=58479" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                  style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} 
                  title="Landing video"
                ></iframe>
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
                  <div className="text-sage-500 mr-3">✓</div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              onClick={scrollToForm}
              className="growth-btn-gradient font-medium text-lg py-6 px-8 rounded-full shadow-lg shadow-sage-500/20"
            >
              Get Instant Access <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
};

export default VideoPreviewSection;
