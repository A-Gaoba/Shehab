import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import FeaturedHotels from './FeaturedHotels';
import FeaturedActivities from './FeaturedActivities';
import TravelPackages from './TravelPackages';
import HomePageSEO from './HomePageSEO';
import { travelPackages, hotels, activities } from '../data/travelData';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  return (
    <>
      <HomePageSEO />
      <Hero />
      <AboutUs />

      {/* Customer Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              آراء العملاء
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              دائماً نسعى لتقديم أفضل خدماتنا لتحسين وتطوير خدماتنا
            </p>
            <button
              onClick={() => onPageChange('testimonials')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              تقييمات العملاء
            </button>
          </div>
        </div>
      </section>

      <FeaturedHotels hotels={hotels} onViewAll={() => onPageChange('hotels')} />
      <FeaturedActivities activities={activities} onViewAll={() => onPageChange('activities')} />
      <TravelPackages packages={travelPackages} onViewAll={() => onPageChange('packages')} />
    </>
  );
};

export default HomePage;
