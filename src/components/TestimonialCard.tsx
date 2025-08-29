import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../data/travelData';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-400'
          }`}
      />
    ));
  };

  return (
    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700">
      {/* Header */}
      <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-600"
        />
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg">{testimonial.name}</h3>
          <p className="text-gray-400 text-sm">{testimonial.country}</p>
        </div>
        <div className="flex space-x-1 rtl:space-x-reverse">
          {renderStars(testimonial.rating)}
        </div>
      </div>

      {/* Comment */}
      <p className="text-gray-300 leading-relaxed mb-4 line-clamp-4">
        "{testimonial.comment}"
      </p>

      {/* Trip Info */}
      <div className="border-t border-gray-700 pt-4">
        <div className="flex justify-between items-center text-sm">
          <span className="text-blue-400 font-medium">{testimonial.trip}</span>
          <span className="text-gray-500">{testimonial.date}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
