
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold flex items-center">
              <span className="gradient-text">GrowthSpark</span>
            </h3>
            <p className="text-sm text-gray-500 mt-1">Ignite your personal transformation</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-growth-600">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-growth-600">Full Course Details</a></li>
                <li><a href="#" className="text-gray-600 hover:text-growth-600">Success Stories</a></li>
                <li><a href="#" className="text-gray-600 hover:text-growth-600">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-growth-600">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-growth-600">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-growth-600">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} GrowthSpark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
