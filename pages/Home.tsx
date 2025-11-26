import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';
import { Star, UtensilsCrossed, Users, Award } from 'lucide-react';

const Home: React.FC = () => {
  const heroImage = IMAGES.find(img => img.name === "Catering Image")?.url;

  const features = [
    {
      title: "Professional",
      icon: <Award className="w-12 h-12 text-sicilian-green mb-4" />,
      desc: "Expert service with attention to every detail."
    },
    {
      title: "Tailored Menus",
      icon: <UtensilsCrossed className="w-12 h-12 text-sicilian-green mb-4" />,
      desc: "Customized culinary experiences for your specific taste."
    },
    {
      title: "Incredible Selection",
      icon: <Star className="w-12 h-12 text-sicilian-green mb-4" />,
      desc: "From savory Arancini to sweet Cannoli, we have it all."
    },
    {
      title: "30 - 500 People Events",
      icon: <Users className="w-12 h-12 text-sicilian-green mb-4" />,
      desc: "Capable of handling intimate gatherings to large galas."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Delicious Sicilian Catering Spread" 
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-6 animate-fade-in-up">
            Sicilian Passion for your Catering Needs
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl font-sans font-light">
            Bringing the authentic taste of Sicily to London and within the M25.
          </p>
          <Link 
            to="/book-now"
            className="bg-sicilian-red text-white text-lg font-bold py-4 px-10 rounded-full hover:bg-red-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Book your Event
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-sicilian-dark">Why Choose Dolce Delia?</h2>
            <div className="w-24 h-1 bg-sicilian-yellow mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-stone-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border-t-4 border-sicilian-green"
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 font-serif">{feature.title}</h3>
                <p className="text-gray-600 font-sans">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;