import React from 'react';
import { Users, Award, MapPin, Clock, Star, Heart } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              من نحن
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              نحن شركة سياحة روسية موثقة من وزارة السياحة الروسية متخصصة في تنظيم الرحلات للسياح العرب
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-8 bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-100 mb-2">+1000</h3>
              <p className="text-gray-300 font-medium">عميل سعيد</p>
            </div>

            <div className="text-center p-8 bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-100 mb-2">+10</h3>
              <p className="text-gray-300 font-medium">سنوات خبرة</p>
            </div>

            <div className="text-center p-8 bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-100 mb-2">3</h3>
              <p className="text-gray-300 font-medium">مدن رئيسية</p>
            </div>

            <div className="text-center p-8 bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-100 mb-2">24/7</h3>
              <p className="text-gray-300 font-medium">خدمة العملاء</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-6">لماذا تختار سفر روسيا؟</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">فريق عربي متخصص</h4>
                    <p className="text-gray-300">مرشدين سياحيين يتحدثون العربية ويفهمون احتياجات السياح العرب</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">خبرة واسعة في السياحة الروسية</h4>
                    <p className="text-gray-300">أكثر من 10 سنوات في تنظيم الرحلات السياحية إلى روسيا للعرب</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">أسعار تنافسية</h4>
                    <p className="text-gray-300">أفضل الأسعار مع خدمات مميزة وجودة عالية في السياحة الروسية</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">خدمة شاملة</h4>
                    <p className="text-gray-300">من الحجز حتى العودة، نهتم بكل تفاصيل رحلتك إلى روسيا</p>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="pt-6">
                <h4 className="text-lg font-semibold text-gray-200 mb-4 text-right">تابعنا على وسائل التواصل الاجتماعي</h4>
                <div className="flex justify-start  items-center space-x-4 rtl:space-x-reverse">
                  {/* Snapchat */}
                  <a
                    href="https://www.snapchat.com/add/russiatravel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
                    aria-label="تابعنا على سناب شات"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.423-.211-.847-.314-1.264-.847-3.383.268-6.393 2.53-8.847 2.722-3.049 6.82-3.449 9.592-1.146 1.921-1.469 2.847-3.8 2.847-6.275 0-6.176-5.26-11.276-11.276-11.276zm-6.72 16.781c-.66-.027-1.254-.4-1.593-1.039-.339-.639-.339-1.373 0-2.012.339-.639.933-1.012 1.593-1.039.66.027 1.254.4 1.593 1.039.339.639.339 1.373 0 2.012-.339.639-.933 1.012-1.593 1.039z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/russiatravel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
                    aria-label="تابعنا على انستغرام"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/79174828474?text=أهلاً، أريد معلومات عن الرحلات السياحية إلى روسيا"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
                    aria-label="تواصل معنا عبر واتساب"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@russiatravel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
                    aria-label="تابعنا على تيك توك"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.05-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </a>

                  {/* Telegram */}
                  <a
                    href="https://t.me/russiatravel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
                    aria-label="تواصل معنا عبر تيليجرام"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-600">
                <img
                  src="https://images.unsplash.com/photo-1751729105405-5751630f4769?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="فريق سفر روسيا - أفضل شركة سياحة روسية للعرب"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="mt-6 text-center">
                  <h4 className="text-xl font-bold text-white mb-2">فريقنا المتخصص في السياحة الروسية</h4>
                  <p className="text-gray-200">نعمل بشغف لتقديم أفضل تجربة سياحية لكم في روسيا</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-red-400/20 to-pink-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
