import React from 'react';
import HotelCard from './HotelCard';
import { Hotel } from '../data/travelData';

interface FeaturedHotelsProps {
  hotels: Hotel[];
  onViewAll: () => void;
}

const FeaturedHotels: React.FC<FeaturedHotelsProps> = ({ hotels, onViewAll }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl mb-6">
            <span className="text-white text-2xl">🏨</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            أفضل الفنادق في روسيا
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            اختر من بين أفضل الفنادق الفاخرة في موسكو وسوتشي وسانت بطرسبرغ مع خدمات استثنائية ومرافق عالمية
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {hotels.slice(0, 3).map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={onViewAll}
            className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            aria-label="عرض جميع الفنادق في روسيا"
          >
            عرض جميع الفنادق
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHotels;
