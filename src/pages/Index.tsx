
import React, { useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import VideoPreviewSection from '@/components/VideoPreviewSection';
import SignupForm from '@/components/SignupForm';
import Footer from '@/components/Footer';

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);
  
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection scrollToForm={scrollToForm} />
      <BenefitsSection />
      <VideoPreviewSection scrollToForm={scrollToForm} />
      <TestimonialsSection />
      <SignupForm ref={formRef} />
      <Footer />
    </div>
  );
};

export default Index;
