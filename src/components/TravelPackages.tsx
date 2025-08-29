import React from 'react';
import PackageCard from './PackageCard';
import { TravelPackage } from '../data/travelData';

interface TravelPackagesProps {
  packages: TravelPackage[];
  onViewAll: () => void;
}

const TravelPackages: React.FC<TravelPackagesProps> = ({ packages, onViewAll }) => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl mb-6">
            <span className="text-white text-2xl">📦</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            باقاتنا السياحية المميزة
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            اختر من بين أفضل الباقات السياحية إلى روسيا المصممة خصيصاً للسياح العرب
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={onViewAll}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            aria-label="عرض جميع باقات السفر إلى روسيا"
          >
            عرض جميع الباقات
          </button>
        </div>
      </div>
    </section>
  );
};

export default TravelPackages;
