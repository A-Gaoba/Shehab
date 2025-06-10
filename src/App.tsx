import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PackageCard from './components/PackageCard';
import HotelCard from './components/HotelCard';
import ActivityCard from './components/ActivityCard';
import VehicleCard from './components/VehicleCard';
import Contact from './components/Contact';
import SEOHead from './components/SEOHead';
import StructuredData from './components/StructuredData';
import { travelPackages, hotels, activities, vehicles } from './data/travelData';
import { Users, Award, MapPin, Clock, Star, Heart } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // SEO data for different pages
  const getPageSEO = (page: string) => {
    switch (page) {
      case 'packages':
        return {
          title: "باقات السفر إلى روسيا - أفضل العروض السياحية | سفر روسيا",
          description: "اختر من أفضل باقات السفر إلى روسيا. جولات موسكو، عطلات سوتشي، ورحلات سانت بطرسبرغ مع مرشدين عرب. احجز الآن بأفضل الأسعار.",
          keywords: "باقات سفر روسيا, جولات موسكو, رحلات سوتشي, سانت بطرسبرغ, عروض سياحية روسيا"
        };
      case 'hotels':
        return {
          title: "أفضل الفنادق في روسيا - حجز فنادق موسكو وسوتشي | سفر روسيا",
          description: "احجز أفضل الفنادق في موسكو وسوتشي وسانت بطرسبرغ. فنادق 5 نجوم بأسعار مميزة مع خدمة حجز احترافية.",
          keywords: "فنادق موسكو, فنادق سوتشي, فنادق سانت بطرسبرغ, حجز فنادق روسيا, فنادق فاخرة روسيا"
        };
      case 'activities':
        return {
          title: "أنشطة وجولات سياحية في روسيا - تجارب لا تُنسى | سفر روسيا",
          description: "اكتشف أفضل الأنشطة السياحية في روسيا. جولات الكرملين، رحلات الهاسكي، عروض الباليه، والمزيد من التجارب المميزة.",
          keywords: "أنشطة روسيا, جولات سياحية موسكو, الكرملين, الهاسكي, الباليه الروسي, أنشطة سوتشي"
        };
      case 'transportation':
        return {
          title: "خدمات النقل في روسيا - سيارات ومرسيدس فاخرة | سفر روسيا",
          description: "خدمات نقل فاخرة في روسيا. سيارات مرسيدس، حافلات مريحة، وخدمة نقل VIP مع سائقين محترفين.",
          keywords: "نقل روسيا, سيارات مرسيدس روسيا, خدمة نقل VIP, سائق عربي روسيا"
        };
      case 'contact':
        return {
          title: "تواصل معنا - سفر روسيا | أفضل شركة سياحة روسية للعرب",
          description: "تواصل مع أفضل شركة سياحة روسية للعرب. خدمة عملاء 24/7، مرشدين عرب، وخبرة أكثر من 10 سنوات في السياحة الروسية.",
          keywords: "تواصل سفر روسيا, شركة سياحة روسية, مرشد عربي روسيا, خدمة عملاء سياحة"
        };
      default:
        return {
          title: "سفر روسيا - أفضل شركة سياحة روسية للعرب | رحلات موسكو وسوتشي وسانت بطرسبرغ",
          description: "أفضل شركة سياحة روسية للعرب. رحلات مميزة إلى موسكو وسوتشي وسانت بطرسبرغ مع مرشدين عرب محترفين. احجز رحلتك الآن بأفضل الأسعار وخدمة 5 نجوم.",
          keywords: "سفر روسيا, سياحة روسيا, رحلات موسكو, سوتشي, سانت بطرسبرغ, سياحة عربية, مرشد عربي روسيا"
        };
    }
  };

  const breadcrumbData = {
    itemListElement: [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": "https://russia-travel.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": currentPage === 'packages' ? 'الباقات' : 
                currentPage === 'hotels' ? 'الفنادق' :
                currentPage === 'activities' ? 'الأنشطة' :
                currentPage === 'transportation' ? 'النقل' :
                currentPage === 'contact' ? 'تواصل معنا' : 'الرئيسية',
        "item": `https://russia-travel.com/${currentPage}`
      }
    ]
  };

  const renderContent = () => {
    const pageSEO = getPageSEO(currentPage);
    
    switch (currentPage) {
      case 'home':
        return (
          <>
            <SEOHead {...pageSEO} />
            <Hero />
            
            {/* About Us Section */}
            <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  {/* Section Header */}
                  <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl mb-6">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-6">
                      من نحن
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                      نحن أفضل شركة سياحة روسية متخصصة في تنظيم الرحلات للسياح العرب، نقدم خدمات مميزة ومرشدين عرب محترفين لضمان تجربة لا تُنسى في موسكو وسوتشي وسانت بطرسبرغ
                    </p>
                  </div>

                  {/* Stats and Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">+1000</h3>
                      <p className="text-gray-600 font-medium">عميل سعيد</p>
                    </div>

                    <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">+10</h3>
                      <p className="text-gray-600 font-medium">سنوات خبرة</p>
                    </div>

                    <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">3</h3>
                      <p className="text-gray-600 font-medium">مدن رئيسية</p>
                    </div>

                    <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">24/7</h3>
                      <p className="text-gray-600 font-medium">خدمة العملاء</p>
                    </div>
                  </div>

                  {/* About Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <h3 className="text-3xl font-bold text-gray-800 mb-6">لماذا تختار سفر روسيا؟</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4 rtl:space-x-reverse">
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <Star className="w-4 h-4 text-red-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 mb-1">فريق عربي متخصص</h4>
                            <p className="text-gray-600">مرشدين سياحيين يتحدثون العربية ويفهمون احتياجات السياح العرب</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4 rtl:space-x-reverse">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <Star className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 mb-1">خبرة واسعة في السياحة الروسية</h4>
                            <p className="text-gray-600">أكثر من 10 سنوات في تنظيم الرحلات السياحية إلى روسيا للعرب</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4 rtl:space-x-reverse">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <Star className="w-4 h-4 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 mb-1">أسعار تنافسية</h4>
                            <p className="text-gray-600">أفضل الأسعار مع خدمات مميزة وجودة عالية في السياحة الروسية</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4 rtl:space-x-reverse">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <Star className="w-4 h-4 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 mb-1">خدمة شاملة</h4>
                            <p className="text-gray-600">من الحجز حتى العودة، نهتم بكل تفاصيل رحلتك إلى روسيا</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                        <img
                          src="https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=600&auto=format&fit=crop&q=60"
                          alt="فريق سفر روسيا - أفضل شركة سياحة روسية للعرب"
                          className="w-full h-80 object-cover rounded-2xl"
                        />
                        <div className="mt-6 text-center">
                          <h4 className="text-xl font-bold text-gray-800 mb-2">فريقنا المتخصص في السياحة الروسية</h4>
                          <p className="text-gray-600">نعمل بشغف لتقديم أفضل تجربة سياحية لكم في روسيا</p>
                        </div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-red-400/20 to-pink-400/20 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Hotels Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-slate-50">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl mb-6">
                    <span className="text-white text-2xl">🏨</span>
                  </div>
                  <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
                    أفضل الفنادق في روسيا
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    اختر من بين أفضل الفنادق الفاخرة في موسكو وسوتشي وسانت بطرسبرغ مع خدمات استثنائية ومرافق عالمية
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {hotels.slice(0, 3).map((hotel) => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                  ))}
                </div>
                <div className="text-center">
                  <button
                    onClick={() => setCurrentPage('hotels')}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    aria-label="عرض جميع الفنادق في روسيا"
                  >
                    عرض جميع الفنادق
                  </button>
                </div>
              </div>
            </section>

            {/* Featured Activities Section */}
            <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mb-6">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
                    أنشطة مميزة في روسيا
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                    onClick={() => setCurrentPage('activities')}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    aria-label="عرض جميع الأنشطة السياحية في روسيا"
                  >
                    عرض جميع الأنشطة
                  </button>
                </div>
              </div>
            </section>

            {/* Travel Packages Section */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl mb-6">
                    <span className="text-white text-2xl">📦</span>
                  </div>
                  <h2 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-6">
                    باقاتنا السياحية المميزة
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    اختر من بين أفضل الباقات السياحية إلى روسيا المصممة خصيصاً للسياح العرب
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {travelPackages.map((pkg) => (
                    <PackageCard key={pkg.id} package={pkg} />
                  ))}
                </div>
                <div className="text-center">
                  <button
                    onClick={() => setCurrentPage('packages')}
                    className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    aria-label="عرض جميع باقات السفر إلى روسيا"
                  >
                    عرض جميع الباقات
                  </button>
                </div>
              </div>
            </section>
          </>
        );

      case 'packages':
        return (
          <>
            <SEOHead {...pageSEO} />
            <StructuredData type="breadcrumb" data={breadcrumbData} />
            <section className="pt-24 pb-16 bg-gray-50 min-h-screen">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">باقات السفر إلى روسيا</h1>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    استكشف أجمل المدن الروسية مع باقاتنا المتنوعة والمميزة المصممة خصيصاً للسياح العرب
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {travelPackages.map((pkg) => (
                    <PackageCard key={pkg.id} package={pkg} />
                  ))}
                </div>
              </div>
            </section>
          </>
        );

      case 'hotels':
        return (
          <>
            <SEOHead {...pageSEO} />
            <StructuredData type="breadcrumb" data={breadcrumbData} />
            <section className="pt-24 pb-16 bg-gray-50 min-h-screen">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">أفضل الفنادق في روسيا</h1>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    أفضل الفنادق الفاخرة في موسكو وسوتشي وسانت بطرسبرغ مع خدمة حجز احترافية
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {hotels.map((hotel) => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                  ))}
                </div>
              </div>
            </section>
          </>
        );

      case 'activities':
        return (
          <>
            <SEOHead {...pageSEO} />
            <StructuredData type="breadcrumb" data={breadcrumbData} />
            <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mb-6">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
                    الأنشطة والمغامرات في روسيا
                  </h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    اكتشف مجموعة متنوعة من الأنشطة المثيرة والتجارب الفريدة التي ستجعل رحلتك إلى روسيا لا تُنسى
                  </p>
                </div>

                {/* Filter Categories */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {['الكل', 'مغامرة', 'طبيعة', 'ثقافة', 'طعام', 'تسوق', 'ترفيه'].map((category) => (
                    <button
                      key={category}
                      className="px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
                      aria-label={`فلترة الأنشطة حسب ${category}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {activities.map((activity) => (
                    <ActivityCard key={activity.id} activity={activity} />
                  ))}
                </div>
              </div>
            </section>
          </>
        );

      case 'transportation':
        return (
          <>
            <SEOHead {...pageSEO} />
            <StructuredData type="breadcrumb" data={breadcrumbData} />
            <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 via-blue-50 to-slate-50 min-h-screen">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl mb-8 shadow-2xl">
                    <span className="text-white text-3xl">🚗</span>
                  </div>
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                    خدمات النقل والمواصلات في روسيا
                  </h1>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                    استمتع بخدمات النقل الفاخرة مع أسطولنا المتنوع من السيارات والحافلات المرسيدس الحديثة في روسيا
                  </p>
                  
                  {/* Contact Info Banner */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto shadow-lg border border-blue-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">للحجز والاستفسار</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <a
                        href="https://wa.me/79659262292"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 rtl:space-x-reverse bg-green-600 text-white px-4 py-3 rounded-xl hover:bg-green-700 transition-colors font-medium"
                        aria-label="تواصل عبر واتساب لحجز خدمات النقل"
                      >
                        <span>واتساب: +7 965 926 22 92</span>
                      </a>
                      <a
                        href="tel:+79659262292"
                        className="flex items-center justify-center space-x-2 rtl:space-x-reverse bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium"
                        aria-label="اتصال مباشر لحجز خدمات النقل"
                      >
                        <span>هاتف: +7 965 926 22 92</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Vehicle Types Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {['الكل', 'سيارة فاخرة', 'ميني فان', 'حافلة صغيرة', 'حافلة كبيرة'].map((type) => (
                    <button
                      key={type}
                      className="px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 shadow-sm hover:shadow-md font-medium border border-blue-100"
                      aria-label={`فلترة المركبات حسب ${type}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {vehicles.map((vehicle) => (
                    <VehicleCard key={vehicle.id} vehicle={vehicle} />
                  ))}
                </div>

                {/* Additional Services */}
                <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100">
                  <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">خدمات إضافية</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-white/80 rounded-2xl shadow-lg">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🛡️</span>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">تأمين شامل</h4>
                      <p className="text-gray-600 text-sm">جميع مركباتنا مؤمنة بالكامل لضمان سلامتكم</p>
                    </div>
                    <div className="text-center p-6 bg-white/80 rounded-2xl shadow-lg">
                      <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">👨‍✈️</span>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">سائقين محترفين</h4>
                      <p className="text-gray-600 text-sm">سائقين ذوي خبرة ويتحدثون العربية</p>
                    </div>
                    <div className="text-center p-6 bg-white/80 rounded-2xl shadow-lg">
                      <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">⏰</span>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">خدمة 24/7</h4>
                      <p className="text-gray-600 text-sm">متوفرون في أي وقت لخدمتكم</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );

      case 'contact':
        return (
          <>
            <SEOHead {...pageSEO} />
            <StructuredData type="breadcrumb" data={breadcrumbData} />
            <div className="pt-16">
              <Contact />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>{renderContent()}</main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">روسيا</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">سفر روسيا</h3>
                  <p className="text-gray-400 text-sm">أفضل شركة سياحة روسية للعرب</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                نحن متخصصون في تنظيم أفضل الرحلات السياحية إلى روسيا مع خدمات مميزة ومرشدين عرب محترفين في موسكو وسوتشي وسانت بطرسبرغ.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2">
                <li><button onClick={() => setCurrentPage('home')} className="text-gray-400 hover:text-white transition-colors">الرئيسية</button></li>
                <li><button onClick={() => setCurrentPage('packages')} className="text-gray-400 hover:text-white transition-colors">باقات السفر</button></li>
                <li><button onClick={() => setCurrentPage('hotels')} className="text-gray-400 hover:text-white transition-colors">الفنادق</button></li>
                <li><button onClick={() => setCurrentPage('activities')} className="text-gray-400 hover:text-white transition-colors">الأنشطة</button></li>
                <li><button onClick={() => setCurrentPage('transportation')} className="text-gray-400 hover:text-white transition-colors">النقل</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="text-gray-400 hover:text-white transition-colors">تواصل معنا</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
              <div className="space-y-3">
                <a 
                  href="https://wa.me/79174828474" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 rtl:space-x-reverse text-gray-400 hover:text-green-400 transition-colors"
                  aria-label="تواصل معنا عبر واتساب"
                >
                  <span>واتساب: +7 917 482 8474</span>
                </a>
                <a 
                  href="tel:+79174828474"
                  className="flex items-center space-x-3 rtl:space-x-reverse text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="اتصل بنا مباشرة"
                >
                  <span>هاتف: +7 917 482 8474</span>
                </a>
                <p className="text-gray-400">موسكو، روسيا الاتحادية</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 سفر روسيا - أفضل شركة سياحة روسية للعرب. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;