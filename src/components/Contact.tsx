import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">تواصل معنا</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نحن هنا لمساعدتك في تخطيط رحلتك المثالية إلى روسيا
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">معلومات التواصل</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="bg-green-100 p-3 rounded-full">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">واتساب (الأسرع)</h4>
                      <a 
                        href="https://wa.me/79174828474" 
                        className="text-green-600 hover:text-green-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +7 917 482 8474
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">هاتف</h4>
                      <a 
                        href="tel:+79174828474" 
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        +7 917 482 8474
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="bg-red-100 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">البريد الإلكتروني</h4>
                      <a 
                        href="mailto:info@russia-travel.com" 
                        className="text-red-600 hover:text-red-700 transition-colors"
                      >
                        info@russia-travel.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">العنوان</h4>
                      <p className="text-gray-600">موسكو، روسيا الاتحادية</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">أوقات العمل</h4>
                      <p className="text-gray-600">يومياً من 9:00 ص إلى 9:00 م</p>
                      <p className="text-sm text-gray-500">(بتوقيت موسكو)</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="bg-indigo-100 p-3 rounded-full">
                      <Globe className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">اللغات</h4>
                      <p className="text-gray-600">العربية، الروسية، الإنجليزية</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://wa.me/79174828474?text=أهلاً، أريد معلومات عن الرحلات السياحية إلى روسيا"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                >
                  <MessageCircle className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">واتساب فوري</h4>
                  <p className="text-sm opacity-90">للرد السريع والحجز</p>
                </a>

                <a
                  href="tel:+79174828474"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                >
                  <Phone className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">اتصال مباشر</h4>
                  <p className="text-sm opacity-90">للاستفسارات العاجلة</p>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">موقعنا</h3>
              <div className="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143398.1342534212!2d37.43896444999999!3d55.755864499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z2YXZiNiz2YPZiNmI2Iwg2LHZiNiz2YrYpw!5e0!3m2!1sar!2s!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="موقع مكتبنا في موسكو"
                ></iframe>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">لماذا تختارنا؟</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>فريق عربي متخصص في السياحة الروسية</span>
                  </li>
                  <li className="flex items-center space-x-2 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>خبرة أكثر من 10 سنوات في تنظيم الرحلات</span>
                  </li>
                  <li className="flex items-center space-x-2 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>أسعار تنافسية وخدمات مميزة</span>
                  </li>
                  <li className="flex items-center space-x-2 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>مرشدين سياحيين يتحدثون العربية</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;