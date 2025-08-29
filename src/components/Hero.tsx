import React from 'react';
import { MapPin, Star, Calendar } from 'lucide-react';
import SEOHead from './SEOHead';
import StructuredData from './StructuredData';
import LazyImage from './LazyImage';

const Hero: React.FC = () => {
  const heroStructuredData = {
    name: "سفر روسيا",
    description: "أفضل شركة سياحة روسية للعرب. رحلات مميزة إلى موسكو وسوتشي وسانت بطرسبرغ مع مرشدين عرب محترفين",
    url: "https://russia-travel.com",
    logo: "https://russia-travel.com/logo.png",
    telephone: "+79174828474",
    email: "info@russia-travel.com",
    address: {
      "@type": "PostalAddress",
      "streetAddress": "Moscow",
      "addressLocality": "Moscow",
      "addressCountry": "RU"
    },
    areaServed: ["Russia", "Moscow", "Sochi", "Saint Petersburg"],
    serviceType: ["Travel Agency", "Tour Operator", "Hotel Booking"],
    aggregateRating: {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "1000",
      "bestRating": "5"
    }
  };

  return (
    <>
      <SEOHead
        title="سفر روسيا - أفضل شركة سياحة روسية للعرب | رحلات موسكو وسوتشي وسانت بطرسبرغ"
        description="أفضل شركة سياحة روسية للعرب. رحلات مميزة إلى موسكو وسوتشي وسانت بطرسبرغ مع مرشدين عرب محترفين. احجز رحلتك الآن بأفضل الأسعار وخدمة 5 نجوم."
        keywords="سفر روسيا, سياحة روسيا, رحلات موسكو, سوتشي, سانت بطرسبرغ, سياحة عربية, مرشد عربي روسيا, فنادق موسكو, باقات سياحية روسيا, شركة سياحة روسية"
      />

      <StructuredData type="organization" data={heroStructuredData} />

      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <LazyImage
            src="https://images.unsplash.com/photo-1547448415-e9f5b28e570d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="خلفية سفر روسيا - مناظر طبيعية روسية خلابة"
            className="w-full h-full object-cover"
            loading="eager"
            width={1170}
            height={780}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/85 to-black/90"></div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.4%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-3 sm:px-4 relative z-10 flex items-center justify-center min-h-screen">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Main Heading */}
            <header className="mb-6 md:mb-8 space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                اكتشف سحر
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400">
                  روسيا
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-medium px-2" role="banner">
                رحلات استثنائية مصممة خصيصاً للسياح العرب
              </p>
            </header>

            {/* Stats */}
            <section className="grid grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-12" aria-label="إحصائيات الشركة">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-6 border border-white/20">
                <div className="flex items-center justify-center mb-2 md:mb-3">
                  <MapPin className="w-5 h-5 md:w-8 md:h-8 text-yellow-400" />
                </div>
                <h2 className="text-sm md:text-2xl font-bold mb-1 md:mb-2">3 مدن رئيسية</h2>
                <p className="text-xs md:text-base text-gray-300">موسكو، سوتشي، سانت بطرسبرغ</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-6 border border-white/20">
                <div className="flex items-center justify-center mb-2 md:mb-3">
                  <Star className="w-5 h-5 md:w-8 md:h-8 text-yellow-400" />
                </div>
                <h2 className="text-sm md:text-2xl font-bold mb-1 md:mb-2">خدمة 5 نجوم</h2>
                <p className="text-xs md:text-base text-gray-300">مرشدين عرب محترفين</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-6 border border-white/20">
                <div className="flex items-center justify-center mb-2 md:mb-3">
                  <Calendar className="w-5 h-5 md:w-8 md:h-8 text-yellow-400" />
                </div>
                <h2 className="text-sm md:text-2xl font-bold mb-1 md:mb-2">حجز فوري</h2>
                <p className="text-xs md:text-base text-gray-300">تأكيد خلال 24 ساعة</p>
              </div>
            </section>

            {/* CTA Buttons */}
            <nav className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-2" aria-label="إجراءات الحجز">
              <a
                href="https://wa.me/79174828474?text=أهلاً، أريد معلومات عن الرحلات السياحية إلى روسيا"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                aria-label="احجز رحلتك الآن عبر واتساب - سفر روسيا"
              >
                احجز رحلتك الآن عبر واتساب
              </a>
              <button
                className="w-full sm:w-auto bg-white/20 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
                aria-label="استكشف باقات السفر إلى روسيا"
              >
                استكشف الباقات
              </button>
            </nav>
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
    </>
  );
};

export default Hero;