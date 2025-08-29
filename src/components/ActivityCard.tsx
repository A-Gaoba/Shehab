import React from 'react';
import { Clock, Star, Zap } from 'lucide-react';
import { Activity } from '../data/travelData';

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'مغامرة': return 'bg-red-100 text-red-800';
      case 'طبيعة': return 'bg-green-100 text-green-800';
      case 'ثقافة': return 'bg-purple-100 text-purple-800';
      case 'طعام': return 'bg-orange-100 text-orange-800';
      case 'تسوق': return 'bg-blue-100 text-blue-800';
      case 'ترفيه': return 'bg-pink-100 text-pink-800';
      case 'إقامة': return 'bg-indigo-100 text-indigo-800';
      case 'معالم': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-white';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'سهل': return <Star className="w-4 h-4 text-green-600" />;
      case 'متوسط': return <Zap className="w-4 h-4 text-yellow-600" />;
      case 'صعب': return <Zap className="w-4 h-4 text-red-600" />;
      default: return <Star className="w-4 h-4 text-gray-300" />;
    }
  };

  return (
    <div className="group relative bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={activity.image}
          alt={activity.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getCategoryColor(activity.category)} backdrop-blur-sm`}>
            {activity.category}
          </span>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-xl font-bold mb-2">{activity.name}</h3>
          <div className="flex items-center space-x-3 rtl:space-x-reverse text-white/90">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{activity.duration}</span>
            </div>
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {getDifficultyIcon(activity.difficulty)}
              <span className="text-sm">{activity.difficulty}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3">
          {activity.description}
        </p>

        {/* Action Button */}
        <a
          href={`https://wa.me/79174828474?text=أهلاً، أريد الحجز في نشاط ${activity.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-2xl font-bold text-center hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl block group-hover:shadow-2xl"
        >
          <span className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
            <span>احجز الآن</span>
            <div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse"></div>
          </span>
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
      <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-red-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
    </div>
  );
};

export default ActivityCard;