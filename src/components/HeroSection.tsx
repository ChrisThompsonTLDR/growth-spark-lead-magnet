
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';

interface HeroSectionProps {
  scrollToForm: () => void;
}

const HeroSection = ({ scrollToForm }: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[90vh] min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden px-4 md:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sand-100 to-sand-50 z-0"></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-sage-200 blur-3xl opacity-40 z-0 animate-pulse-light"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-terra-200 blur-3xl opacity-30 z-0 animate-pulse-light" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto relative z-10 text-center">
        <div className="flex justify-center mb-8">
          <Logo size="lg" />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight animate-fade-in">
          Unlock Your <span className="gradient-text">Full Potential</span> With A Proven Personal Growth System
        </h1>
        
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Transform all aspects of your life - career, relationships, health, and personal fulfillment - with our comprehensive personal growth framework.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            className="growth-btn-gradient font-medium text-lg py-6 px-8 rounded-full shadow-lg shadow-sage-500/20"
            onClick={scrollToForm}
          >
            Get Your Free 5-Minute Intro Video <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-gray-500 mt-3 sm:mt-0">
            Join 10,000+ others who have transformed their lives
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
