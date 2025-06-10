import React from 'react';
import { MapPin, Star, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-red-800 to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.4%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <div className="mb-8 space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              اكتشف سحر
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400">
                روسيا
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-medium">
              رحلات استثنائية مصممة خصيصاً للسياح العرب
            </p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
              استكشف جمال موسكو التاريخية، استمتع بشواطئ سوتشي الساحرة، واغمر نفسك في ثقافة سانت بطرسبرغ العريقة
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <MapPin className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">3 مدن رئيسية</h3>
              <p className="text-blue-200">موسكو، سوتشي، سانت بطرسبرغ</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">خدمة مميزة</h3>
              <p className="text-blue-200">مرشدين عرب محترفين</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <Calendar className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">حجز فوري</h3>
              <p className="text-blue-200">تأكيد خلال 24 ساعة</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/79174828474"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              احجز رحلتك الآن عبر واتساب
            </a>
            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
              استكشف الباقات
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 animate-float">
        <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full opacity-20 blur-xl"></div>
      </div>
      <div className="absolute bottom-1/4 right-10 animate-float-delayed">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
      </div>
    </div>
  );
};

export default Hero;