
import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "🧠",
      title: "Mindset Mastery",
      description: "Develop the psychological tools to overcome any obstacle and maintain unstoppable momentum."
    },
    {
      icon: "🔄",
      title: "Sustainable Habits",
      description: "Build lasting routines that reinforce positive change and eliminate self-sabotage."
    },
    {
      icon: "💼",
      title: "Career Advancement",
      description: "Unlock new levels of professional success through enhanced focus, leadership, and strategic thinking."
    },
    {
      icon: "❤️",
      title: "Deeper Relationships",
      description: "Improve communication and create more meaningful connections with friends, family and partners."
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          A Complete System for <span className="gradient-text">Lasting Transformation</span>
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Our methodology addresses all aspects of personal growth to create balanced, sustainable progress in every area of your life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-lg shadow-growth-100/10 hover:shadow-growth-200/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
