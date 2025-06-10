import React from 'react';
import { Vehicle } from '../data/travelData';

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  return (
    <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3">
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        {/* Vehicle Name Overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-white text-2xl font-bold">{vehicle.name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <p className="text-gray-600 leading-relaxed text-lg text-center">
          {vehicle.description}
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
      <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
    </div>
  );
};

export default VehicleCard;