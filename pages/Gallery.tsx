import React, { useState } from 'react';
import { IMAGES } from '../constants';

const Gallery: React.FC = () => {
  // Images used in other sections to filter out
  const usedImageNames = ["Catering Image", "Wedding", "Wedding Cake", "About Us"];
  
  // Filter out used images
  const galleryImages = IMAGES.filter(img => !usedImageNames.includes(img.name));
  
  // Get unique categories for filter
  const categories = ["All", ...Array.from(new Set(galleryImages.map(img => img.category || "Other")))];
  
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-stone-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-sicilian-dark mb-4">Culinary Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            A visual journey through our artisan creations. From savoury delights to exquisite pastries.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-sicilian-green text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-sicilian-green border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((img, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer aspect-[4/3]"
            >
              <img 
                src={img.url} 
                alt={img.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex flex-col items-center justify-center p-4">
                <span className="text-white font-serif text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 text-center">
                  {img.name}
                </span>
                <span className="text-sicilian-yellow text-sm font-sans font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 transform translate-y-4 group-hover:translate-y-0 mt-2">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            No images found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;