import React from 'react';
import { Service } from '../data/travelData';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'تأشيرات': return 'bg-blue-100 text-blue-800';
      case 'طيران': return 'bg-sky-100 text-sky-800';
      case 'إقامة': return 'bg-purple-100 text-purple-800';
      case 'نقل': return 'bg-green-100 text-green-800';
      case 'تأمين': return 'bg-orange-100 text-orange-800';
      case 'جولات': return 'bg-red-100 text-red-800';
      case 'تذاكر': return 'bg-pink-100 text-pink-800';
      case 'خدمات': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="group relative bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Icon Badge */}
        <div className="absolute top-4 left-4">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
            <span className="text-2xl">{service.icon}</span>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getCategoryColor(service.category)} backdrop-blur-sm`}>
            {service.category}
          </span>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-xl font-bold leading-tight">{service.name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3">
          {service.description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3 text-sm">المميزات:</h4>
          <ul className="space-y-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-400">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></div>
                <span>{feature}</span>
              </li>
            ))}
            {service.features.length > 3 && (
              <li className="text-xs text-gray-500">
                +{service.features.length - 3} مميزات أخرى
              </li>
            )}
          </ul>
        </div>

        {/* Action Button */}
        <a
          href={`https://wa.me/79174828474?text=أهلاً، أريد الاستفسار عن خدمة ${service.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-2xl font-bold text-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl block group-hover:shadow-2xl"
        >
          <span className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
            <span>طلب الخدمة</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </span>
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
      <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
    </div>
  );
};

export default ServiceCard;
