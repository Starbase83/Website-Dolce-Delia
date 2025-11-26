import React from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  // Creating a custom TikTok icon component since Lucide might not have it in older versions
  // or for consistent styling.
  const TikTokIcon = ({ className }: { className?: string }) => (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );

  return (
    <footer className="bg-sicilian-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Dolce Delia</h3>
            <p className="text-gray-400 font-sans">
              Authentic Sicilian flavors delivered with passion to the Greater London area.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-lg font-semibold mb-2 text-sicilian-yellow">Navigate</h4>
            <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#/about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
            <a href="#/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a>
            <a href="#/book-now" className="text-gray-300 hover:text-white transition-colors">Book Now</a>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4 text-sicilian-yellow">Follow Us</h4>
            <div className="flex space-x-6">
              <a 
                href={SOCIAL_LINKS.tiktok} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-sicilian-red transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-6 w-6" />
              </a>
              <a 
                href={SOCIAL_LINKS.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="hover:text-sicilian-yellow transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Dolce Delia Catering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;