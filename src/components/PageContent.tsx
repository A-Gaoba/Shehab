import React, { useState, useMemo } from 'react';
import SEOHead from './SEOHead';
import StructuredData from './StructuredData';
import PackageCard from './PackageCard';
import HotelCard from './HotelCard';
import ActivityCard from './ActivityCard';
import VehicleCard from './VehicleCard';
import ServiceCard from './ServiceCard';
import Contact from './Contact';
import { travelPackages, hotels, activities, vehicles, services, testimonials } from '../data/travelData';

interface PageContentProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const PageContent: React.FC<PageContentProps> = ({ currentPage, onPageChange }) => {
  // State for activity filtering
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');

  // Get unique categories from activities data
  const activityCategories = useMemo(() => {
    const categories = ['الكل', ...new Set(activities.map(activity => activity.category))];
    return categories;
  }, []);

  // Filter activities based on selected category
  const filteredActivities = useMemo(() => {
    if (selectedCategory === 'الكل') {
      return activities;
    }
    return activities.filter(activity => activity.category === selectedCategory);
  }, [selectedCategory]);

  // Handle category change with smooth scroll
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // Smooth scroll to activities section
    const activitiesSection = document.querySelector('[data-section="activities"]');
    if (activitiesSection) {
      activitiesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };
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
      case 'services':
        return {
          title: "خدماتنا المتميزة - سفر روسيا | تأشيرات، طيران، فنادق، وأكثر",
          description: "اكتشف مجموعة شاملة من خدمات السفر إلى روسيا. تأشيرات، حجوزات طيران، فنادق، نقل، تأمين، وجولات سياحية مع خدمة عملاء متميزة.",
          keywords: "خدمات سفر روسيا, تأشيرات روسيا, حجز طيران, فنادق روسيا, نقل مطار, تأمين سفر, جولات سياحية, ترجمة وثائق"
        };
      case 'testimonials':
        return {
          title: "تقييمات وآراء العملاء - سفر روسيا | شهادات العملاء الحقيقية",
          description: "اقرأ تقييمات وآراء عملائنا الحقيقية عن تجاربهم مع شركة سفر روسيا. شهادات موثقة من عملاء من جميع أنحاء الوطن العربي.",
          keywords: "تقييمات سفر روسيا, آراء العملاء, شهادات العملاء, تجارب السفر, مراجعات العملاء, تقييم الخدمة"
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
                currentPage === 'services' ? 'الخدمات' :
                  currentPage === 'testimonials' ? 'آراء العملاء' :
                    currentPage === 'contact' ? 'تواصل معنا' : 'الرئيسية',
        "item": `https://russia-travel.com/${currentPage}`
      }
    ]
  };

  const renderContent = () => {
    const pageSEO = getPageSEO(currentPage);

    switch (currentPage) {
      case 'packages':
        return (
          <>
            <SEOHead {...pageSEO} />
            <StructuredData type="breadcrumb" data={breadcrumbData} />
            <section className="pt-24 pb-16 bg-gray-900 min-h-screen">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h1 className="text-4xl font-bold text-white mb-4">باقات السفر إلى روسيا</h1>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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
            <section className="pt-24 pb-16 bg-gray-900 min-h-screen">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h1 className="text-4xl font-bold text-white mb-4">أفضل الفنادق في روسيا</h1>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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
            <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen" data-section="activities">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl mb-6">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
                    الأنشطة والمغامرات في روسيا
                  </h1>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    اكتشف مجموعة متنوعة من الأنشطة المثيرة والتجارب الفريدة التي ستجعل رحلتك إلى روسيا لا تُنسى
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {activityCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`px-6 py-2 rounded-full backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-md font-medium border ${selectedCategory === category
                        ? 'bg-gradient-to-r from-red-600 to-red-700 text-white border-red-500 shadow-lg scale-105'
                        : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700 hover:text-white border-gray-700 hover:scale-105'
                        }`}
                      aria-label={`فلترة الأنشطة حسب ${category}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Activity Count Display */}
                <div className="text-center mb-8">
                  <p className="text-gray-400 text-lg">
                    {selectedCategory === 'الكل'
                      ? `جميع الأنشطة (${filteredActivities.length})`
                      : `أنشطة ${selectedCategory} (${filteredActivities.length})`
                    }
                  </p>
                </div>

                {filteredActivities.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fadeIn">
                    {filteredActivities.map((activity) => (
                      <ActivityCard key={activity.id} activity={activity} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-6">🔍</div>
                    <h3 className="text-2xl font-bold text-gray-300 mb-4">
                      لا توجد أنشطة في هذه الفئة
                    </h3>
                    <p className="text-gray-500 mb-8">
                      جرب اختيار فئة أخرى أو عرض جميع الأنشطة
                    </p>
                    <button
                      onClick={() => handleCategoryChange('الكل')}
                      className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      عرض جميع الأنشطة
                    </button>
                  </div>
                )}
              </div>
            </section>
          </>
        );

      case 'transportation':
        return (
          <>
            <SEOHead {...pageSEO} />
            <StructuredData type="breadcrumb" data={breadcrumbData} />
            <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-gray-600 to-gray-800 rounded-3xl mb-8 shadow-2xl">
                    <span className="text-white text-3xl">🚗</span>
                  </div>
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
                    خدمات النقل والمواصلات في روسيا
                  </h1>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                    استمتع بخدمات النقل الفاخرة مع أسطولنا المتنوع من السيارات والحافلات المرسيدس الحديثة في روسيا
                  </p>

                  <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto shadow-lg border border-gray-700">
                    <h3 className="text-lg font-bold text-white mb-4">للحجز والاستفسار</h3>
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
                        className="flex items-center justify-center space-x-2 rtl:space-x-reverse bg-gray-700 text-white px-4 py-3 rounded-xl hover:bg-gray-600 transition-colors font-medium"
                        aria-label="اتصال مباشر لحجز خدمات النقل"
                      >
                        <span>هاتف: +7 965 926 22 92</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {['الكل', 'سيارة فاخرة', 'ميني فان', 'حافلة صغيرة', 'حافلة كبيرة'].map((type) => (
                    <button
                      key={type}
                      className="px-6 py-3 rounded-full bg-gray-800/80 backdrop-blur-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md font-medium border border-gray-700"
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

                <div className="mt-16 bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-700">
                  <h3 className="text-2xl font-bold text-center text-white mb-8">خدمات إضافية</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-gray-700/80 rounded-2xl shadow-lg">
                      <div className="w-16 h-16 bg-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🛡️</span>
                      </div>
                      <h4 className="font-bold text-white mb-2">تأمين شامل</h4>
                      <p className="text-gray-300 text-sm">جميع مركباتنا مؤمنة بالكامل لضمان سلامتكم</p>
                    </div>
                    <div className="text-center p-6 bg-gray-700/80 rounded-2xl shadow-lg">
                      <div className="w-16 h-16 bg-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">👨‍✈️</span>
                      </div>
                      <h4 className="font-bold text-white mb-2">سائقين محترفين</h4>
                      <p className="text-gray-300 text-sm">سائقين ذوي خبرة ويتحدثون العربية</p>
                    </div>
                    <div className="text-center p-6 bg-gray-700/80 rounded-2xl shadow-lg">
                      <div className="w-16 h-16 bg-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">⏰</span>
                      </div>
                      <h4 className="font-bold text-white mb-2">خدمة 24/7</h4>
                      <p className="text-gray-300 text-sm">متوفرون في أي وقت لخدمتكم</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );

      case 'services':
        return (
          <>
            <SEOHead {...pageSEO} />
            <StructuredData type="breadcrumb" data={breadcrumbData} />
            <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl mb-8 shadow-2xl">
                    <span className="text-white text-3xl">🛎️</span>
                  </div>
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
                    خدماتنا المتميزة
                  </h1>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    نحن في شركة المراونة للسفر نقدم خدمة متكاملة لجميع احتياجاتكم في السفر إلى روسيا مع ضمانة الجودة والخدمة المتميزة
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>

                {/* Call to Action Section */}
                <div className="mt-20 text-center">
                  <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-3xl p-12 border border-blue-800/30">
                    <h2 className="text-3xl font-bold text-white mb-6">
                      هل تحتاج مساعدة في اختيار الخدمة المناسبة؟
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                      فريقنا المتخصص جاهز لمساعدتك في اختيار أفضل الخدمات التي تناسب احتياجاتك وميزانيتك
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <a
                        href="https://wa.me/79174828474?text=أهلاً، أريد استشارة حول خدماتكم"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        استشارة مجانية عبر واتساب
                      </a>
                      <button
                        onClick={() => onPageChange('contact')}
                        className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                      >
                        تواصل معنا
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );

      case 'testimonials':
        return (
          <>
            <SEOHead {...pageSEO} />
            <StructuredData type="breadcrumb" data={breadcrumbData} />
            <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-3xl mb-8 shadow-2xl">
                    <span className="text-white text-3xl">⭐</span>
                  </div>
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
                    آراء وتقييمات عملائنا
                  </h1>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                    نفتخر بثقة عملائنا وتقييماتهم الإيجابية. اقرأ تجارب العملاء الحقيقية مع شركة سفر روسيا
                  </p>

                  {/* Statistics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
                    <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                      <div className="text-3xl font-bold text-yellow-400 mb-2">1000+</div>
                      <div className="text-gray-300">عميل راضي</div>
                    </div>
                    <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                      <div className="text-3xl font-bold text-yellow-400 mb-2">4.9/5</div>
                      <div className="text-gray-300">متوسط التقييم</div>
                    </div>
                    <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                      <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
                      <div className="text-gray-300">نسبة الرضا</div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Screenshots */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700"
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.description}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white text-sm leading-relaxed">
                            {testimonial.description}
                          </p>
                        </div>
                      </div>

                      {/* WhatsApp/Snapchat Icon Overlay */}
                      <div className="absolute top-4 right-4">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">💬</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="mt-20 text-center">
                  <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 backdrop-blur-sm rounded-3xl p-12 border border-yellow-800/30">
                    <h2 className="text-3xl font-bold text-white mb-6">
                      انضم إلى عائلة عملائنا السعداء
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                      احجز رحلتك الآن واستمتع بتجربة لا تُنسى مع أفضل شركة سياحة روسية للعرب
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <a
                        href="https://wa.me/79174828474?text=أهلاً، أريد حجز رحلة إلى روسيا"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        احجز رحلتك الآن
                      </a>
                      <button
                        onClick={() => onPageChange('packages')}
                        className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                      >
                        استكشف الباقات
                      </button>
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

  return renderContent();
};

export default PageContent;
