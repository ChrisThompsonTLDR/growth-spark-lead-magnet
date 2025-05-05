
import React from 'react';
import Logo from './Logo';
import { Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sage-50 border-t border-terra-100 py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Logo size="sm" />
            <p className="text-sm text-gray-500 mt-1">Helping you grow and thrive</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h4 className="font-semibold mb-3 text-sage-700">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-sage-600">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-sage-600">Full Course Details</a></li>
                <li><a href="#" className="text-gray-600 hover:text-sage-600">Success Stories</a></li>
                <li><a href="mailto:support@letsthrivecoaching.co" className="text-gray-600 hover:text-sage-600 flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  Contact Us
                </a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-sage-700">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-sage-600">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-sage-600">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-sage-600">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-terra-100 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Let's Thrive Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
