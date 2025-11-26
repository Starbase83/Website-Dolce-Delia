import React from 'react';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  const aboutImage = IMAGES.find(img => img.name === "About Us")?.url;

  return (
    <div className="min-h-screen bg-stone-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Image Section */}
            <div className="relative h-96 lg:h-auto">
              <img 
                src={aboutImage} 
                alt="The Dolce Delia Team" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden"></div>
              <h1 className="absolute bottom-6 left-6 text-4xl font-serif font-bold text-white lg:hidden">About Us</h1>
            </div>

            {/* Text Section */}
            <div className="p-10 lg:p-20 flex flex-col justify-center">
              <h1 className="hidden lg:block text-5xl font-serif font-bold text-sicilian-dark mb-8">About Us</h1>
              
              <div className="w-20 h-1.5 bg-sicilian-red mb-8"></div>
              
              <p className="text-xl leading-relaxed text-gray-600 font-sans mb-6">
                Family-run Sicilian Artisan Bakery & Patisserie since 2018. All our products are made from scratch with ingredients sourced from Italy.
              </p>
              
              <p className="text-xl leading-relaxed text-gray-600 font-sans">
                We distribute across the UK & offer catering for all occasions.
              </p>

              <div className="mt-10 p-6 bg-sicilian-cream rounded-lg border-l-4 border-sicilian-yellow">
                <p className="italic text-sicilian-dark">
                  "Food is not just sustenance; it is a story of our heritage, a bridge between Sicily and London."
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;