
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const LessonPreviewSection = () => {
  const [isLoading, setIsLoading] = React.useState({
    video1: true,
    video2: true
  });

  const handleIframeLoad = (videoId: 'video1' | 'video2') => {
    setIsLoading(prev => ({...prev, [videoId]: false}));
  };

  return (
    <div className="py-16 bg-lavender-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Featured <span className="gradient-text">Lessons</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First lesson card */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-0">
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  {isLoading.video1 && (
                    <Skeleton className="absolute inset-0 w-full h-full" />
                  )}
                  <iframe 
                    src="https://www.youtube.com/embed/u2ah9tWTkmk?rel=0"
                    title="SAR Basics 101"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onLoad={() => handleIframeLoad('video1')}
                  ></iframe>
                </AspectRatio>
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
                onClick={() => window.open('https://www.youtube.com/watch?v=u2ah9tWTkmk&list=RDCLAK5uy_kmPRjHDECIcuVwnKsx2Ng7fyNgFKWNJFs&index=2', '_blank')}
              >
                Watch Full Video <Play className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          
          {/* Second lesson card */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-0">
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  {isLoading.video2 && (
                    <Skeleton className="absolute inset-0 w-full h-full" />
                  )}
                  <iframe 
                    src="https://www.youtube.com/embed/vBynw9Isr28?rel=0"
                    title="Advanced Rescue Techniques"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onLoad={() => handleIframeLoad('video2')}
                  ></iframe>
                </AspectRatio>
              </div>
            </CardHeader>
            
            <CardContent className="pt-6 pb-2">
              <h3 className="text-2xl font-bold mb-2">Advanced Rescue Techniques</h3>
              <p className="text-gray-600">
                Take your rescue skills to the next level with these advanced techniques 
                and strategies for challenging environments and complex operations.
              </p>
            </CardContent>
            
            <CardFooter className="pt-2 pb-6">
              <Button 
                className="growth-btn-gradient font-medium"
                onClick={() => window.open('https://www.youtube.com/watch?v=vBynw9Isr28&list=RDCLAK5uy_kmPRjHDECIcuVwnKsx2Ng7fyNgFKWNJFs&index=7', '_blank')}
              >
                Watch Full Video <Play className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LessonPreviewSection;
