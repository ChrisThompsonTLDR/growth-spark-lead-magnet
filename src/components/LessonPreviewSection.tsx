
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
                    src="https://www.youtube.com/embed/WY1_1jJp9qI?rel=0"
                    title="What is Thinking Into Results? - Bob Proctor Program Overview"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onLoad={() => handleIframeLoad('video1')}
                  ></iframe>
                </AspectRatio>
              </div>
            </CardHeader>
            
            <CardContent className="pt-6 pb-2">
              <h3 className="text-2xl font-bold mb-2">What is Thinking Into Results? - Bob Proctor Program Overview</h3>
              <p className="text-gray-600">
                Get a comprehensive introduction to Bob Proctor's transformative Thinking Into Results program. 
                Learn how this proven system guides you through the process of changing your paradigms to achieve 
                extraordinary results in your life and business.
              </p>
            </CardContent>
            
            <CardFooter className="pt-2 pb-6">
              <Button 
                className="growth-btn-gradient font-medium"
                onClick={() => window.open('https://www.youtube.com/watch?v=WY1_1jJp9qI', '_blank')}
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
                    src="https://www.youtube.com/embed/lRFRLKIp7Ks?rel=0"
                    title="How Thinking Into Results Will Change Your Life"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onLoad={() => handleIframeLoad('video2')}
                  ></iframe>
                </AspectRatio>
              </div>
            </CardHeader>
            
            <CardContent className="pt-6 pb-2">
              <h3 className="text-2xl font-bold mb-2">How Thinking Into Results Will Change Your Life</h3>
              <p className="text-gray-600">
                Discover how Bob Proctor's Thinking Into Results program has transformed countless lives by 
                helping participants break free from limiting beliefs and tap into their unlimited potential 
                to achieve their most ambitious goals.
              </p>
            </CardContent>
            
            <CardFooter className="pt-2 pb-6">
              <Button 
                className="growth-btn-gradient font-medium"
                onClick={() => window.open('https://www.youtube.com/watch?v=lRFRLKIp7Ks', '_blank')}
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
