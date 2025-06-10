import React from 'react';
import { MapPin, Star, Wifi, Car, Coffee, Dumbbell } from 'lucide-react';
import { Hotel } from '../data/travelData';

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  const getAmenityIcon = (amenity: string) => {
    if (amenity.includes('واي فاي')) return <Wifi size={16} />;
    if (amenity.includes('مطعم') || amenity.includes('طعام')) return <Coffee size={16} />;
    if (amenity.includes('لياقة')) return <Dumbbell size={16} />;
    return <Car size={16} />;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <MapPin size={16} />
            <span className="font-medium">{hotel.city}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800">{hotel.name}</h3>
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[...Array(hotel.rating)].map((_, index) => (
              <Star key={index} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">{hotel.description}</p>

        {/* Room Types */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">أنواع الغرف:</h4>
          <div className="flex flex-wrap gap-2">
            {hotel.roomTypes.map((room, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {room}
              </span>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-2">المرافق:</h4>
          <div className="grid grid-cols-2 gap-2">
            {hotel.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-600">
                <div className="text-blue-600">
                  {getAmenityIcon(amenity)}
                </div>
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={`https://wa.me/79174828474?text=أهلاً، أريد حجز غرفة في ${hotel.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-bold text-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl block"
        >
          احجز الآن
        </a>
      </div>
    </div>
  );
};

export default HotelCard;