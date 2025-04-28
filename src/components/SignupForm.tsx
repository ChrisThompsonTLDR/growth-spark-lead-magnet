
import React, { useState, forwardRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface SignupFormProps {
  ref?: React.Ref<HTMLDivElement>;
}

const SignupForm = forwardRef<HTMLDivElement, SignupFormProps>(
  (props, ref) => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      if (!email || !email.includes('@')) {
        toast({
          title: "Invalid email",
          description: "Please provide a valid email address.",
          variant: "destructive",
        });
        return;
      }
      
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log("Form submitted with email:", email);
        setIsSubmitting(false);
        setIsSubmitted(true);
        toast({
          title: "Success!",
          description: "Check your email for your free intro video.",
        });
      }, 1500);
      
      // In a real application, you would submit this to your backend or email service
    };

    return (
      <div ref={ref} className="py-16 md:py-24 bg-lavender-50" id="signup-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 md:p-10 shadow-xl shadow-lavender-300/20">
            {!isSubmitted ? (
              <>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
                  Get Your <span className="gradient-text">Free Video</span> Now
                </h2>
                <p className="text-center text-gray-600 mb-8">
                  Enter your email to receive instant access to our 5-minute intro video
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Your best email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="py-6 text-base border-gray-300 flex-grow"
                      required
                    />
                    <Button 
                      type="submit" 
                      className="growth-btn-gradient font-medium py-6 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Get Instant Access"}
                    </Button>
                  </div>
                  
                  <p className="text-center text-sm text-gray-500">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-lavender-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-thrive-700">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-thrive-700">Success!</h3>
                <p className="text-gray-600 mb-4">
                  Check your inbox for your free intro video.
                </p>
                <p className="text-sm text-gray-500">
                  If you don't receive an email within 5 minutes, please check your spam folder.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

SignupForm.displayName = "SignupForm";

export default SignupForm;
