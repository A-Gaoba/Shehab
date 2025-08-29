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
      <FeaturedHotels hotels={hotels} onViewAll={() => onPageChange('hotels')} />
      <FeaturedActivities activities={activities} onViewAll={() => onPageChange('activities')} />
      <TravelPackages packages={travelPackages} onViewAll={() => onPageChange('packages')} />
    </>
  );
};

export default HomePage;
