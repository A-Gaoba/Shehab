import React from 'react';
import ActivityCard from './ActivityCard';
import { Activity } from '../data/travelData';

interface FeaturedActivitiesProps {
  activities: Activity[];
  onViewAll: () => void;
}

const FeaturedActivities: React.FC<FeaturedActivitiesProps> = ({ activities, onViewAll }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl mb-6">
            <span className="text-white text-2xl">🎯</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            أنشطة مميزة في روسيا
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            اكتشف مجموعة متنوعة من الأنشطة المثيرة والتجارب الفريدة في روسيا - من جولات الكرملين إلى رحلات الهاسكي
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {activities.slice(0, 3).map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={onViewAll}
            className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            aria-label="عرض جميع الأنشطة السياحية في روسيا"
          >
            عرض جميع الأنشطة
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedActivities;
