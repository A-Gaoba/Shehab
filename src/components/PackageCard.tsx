import React from 'react';
import { MapPin, Clock, Star } from 'lucide-react';
import { Package } from '../data/travelData';

interface PackageCardProps {
  package: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ package: pkg }) => {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-700">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <MapPin size={16} />
            <span className="font-medium">{pkg.city}</span>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            {pkg.price}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>

        <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-300 mb-4">
          <Clock size={16} />
          <span>{pkg.duration}</span>
        </div>

        <p className="text-gray-300 mb-4 leading-relaxed">{pkg.description}</p>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-2">المعالم المشمولة:</h4>
          <ul className="space-y-1">
            {pkg.highlights.map((highlight, index) => (
              <li key={index} className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <a
          href={`https://wa.me/79174828474?text=أهلاً، أريد الحجز في ${pkg.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-xl font-bold text-center hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl block"
        >
          احجز الآن
        </a>
      </div>
    </div>
  );
};

export default PackageCard;