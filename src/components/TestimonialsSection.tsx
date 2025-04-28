
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "This course gave me the structure I was desperately searching for. Within weeks, I started seeing improvements in areas of my life I'd been struggling with for years.",
      name: "Sarah Johnson",
      title: "Marketing Director"
    },
    {
      quote: "The strategies I learned completely transformed my approach to goal setting and daily habits. I feel like I'm finally living with purpose and direction.",
      name: "Michael Chen",
      title: "Software Engineer"
    },
    {
      quote: "I was skeptical at first, but the practical techniques have helped me improve both my professional performance and personal relationships. Truly life-changing.",
      name: "Olivia Rodriguez",
      title: "Healthcare Professional"
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-lavender-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Real People, Real <span className="gradient-text">Transformations</span>
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Our students have experienced remarkable growth across all aspects of their lives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md relative"
            >
              <div className="absolute -top-4 left-6 text-4xl text-lavender-300">"</div>
              <p className="text-gray-700 mb-6 pt-4">{testimonial.quote}</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-navy-700">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
