
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
                    src="https://www.youtube.com/embed/XSSoLiUOf9s?rel=0"
                    title="Bob Proctor's Thinking Into Results - Complete Program Breakdown"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onLoad={() => handleIframeLoad('video1')}
                  ></iframe>
                </AspectRatio>
              </div>
            </CardHeader>
            
            <CardContent className="pt-6 pb-2">
              <h3 className="text-2xl font-bold mb-2">Thinking Into Results - Complete Program Breakdown</h3>
              <p className="text-gray-600">
                Explore the comprehensive breakdown of Bob Proctor's transformative Thinking Into Results program. 
                Learn about each lesson, the core principles, and how this powerful system can help you achieve
                extraordinary results by changing your paradigms.
              </p>
            </CardContent>
            
            <CardFooter className="pt-2 pb-6">
              <Button 
                className="growth-btn-gradient font-medium"
                onClick={() => window.open('https://www.youtube.com/watch?v=XSSoLiUOf9s', '_blank')}
              >
                Watch Full Video <Play className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          
          {/* Second lesson card - Updated to a video about taking action */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-0">
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  {isLoading.video2 && (
                    <Skeleton className="absolute inset-0 w-full h-full" />
                  )}
                  <iframe 
                    src="https://www.youtube.com/embed/1Agi5O77Yas?rel=0"
                    title="Taking Action - The Key To Success"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onLoad={() => handleIframeLoad('video2')}
                  ></iframe>
                </AspectRatio>
              </div>
            </CardHeader>
            
            <CardContent className="pt-6 pb-2">
              <h3 className="text-2xl font-bold mb-2">Taking Action - The Key To Success</h3>
              <p className="text-gray-600">
                Learn why taking action is the most crucial step in achieving your goals. Bob Proctor explains 
                how to overcome procrastination and inaction, build momentum, and create the results you desire 
                through consistent, purposeful action aligned with your goals.
              </p>
            </CardContent>
            
            <CardFooter className="pt-2 pb-6">
              <Button 
                className="growth-btn-gradient font-medium"
                onClick={() => window.open('https://www.youtube.com/watch?v=1Agi5O77Yas', '_blank')}
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
