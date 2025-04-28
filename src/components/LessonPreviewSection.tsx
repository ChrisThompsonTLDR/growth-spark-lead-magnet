
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const LessonPreviewSection = () => {
  return (
    <div className="py-16 bg-lavender-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Featured <span className="gradient-text">Lessons</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-0">
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <div className="relative w-full h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1535161531861-830fe3433d45?q=80&w=1200" 
                      alt="SAR Basics 101" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-thrive-900/60 to-thrive-600/60"></div>
                  </div>
                </AspectRatio>
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200">
                    <Play className="h-7 w-7 text-thrive-700 ml-1" />
                  </div>
                </div>
                
                {/* Video duration badge */}
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 text-xs rounded">
                  12:45
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-6 pb-2">
              <h3 className="text-2xl font-bold mb-2">SAR Basics 101 and How to Fly a Car</h3>
              <p className="text-gray-600">
                Learn the essential fundamentals of Search and Rescue operations and the surprising 
                mechanics behind aerial vehicle control in this comprehensive introductory lesson.
              </p>
            </CardContent>
            
            <CardFooter className="pt-2 pb-6">
              <Button 
                className="growth-btn-gradient font-medium"
              >
                Watch Now <Play className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          
          {/* Second lesson card - empty for now but maintaining the 2x1 grid structure */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-dashed border-2 border-gray-300 bg-gray-50 flex flex-col justify-center items-center">
            <div className="py-16 px-6 text-center">
              <h3 className="text-xl font-medium text-gray-500 mb-3">More lessons coming soon</h3>
              <p className="text-gray-400">
                Check back for new content or sign up to get notified
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LessonPreviewSection;
