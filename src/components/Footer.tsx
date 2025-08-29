import React from 'react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">روسيا</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">شهاب موسكو</h3>
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
              <li><button onClick={() => onPageChange('home')} className="text-gray-400 hover:text-white transition-colors">الرئيسية</button></li>
              <li><button onClick={() => onPageChange('packages')} className="text-gray-400 hover:text-white transition-colors">باقات السفر</button></li>
              <li><button onClick={() => onPageChange('hotels')} className="text-gray-400 hover:text-white transition-colors">الفنادق</button></li>
              <li><button onClick={() => onPageChange('activities')} className="text-gray-400 hover:text-white transition-colors">الأنشطة</button></li>
              <li><button onClick={() => onPageChange('transportation')} className="text-gray-400 hover:text-white transition-colors">النقل</button></li>
              <li><button onClick={() => onPageChange('contact')} className="text-gray-400 hover:text-white transition-colors">تواصل معنا</button></li>
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
                className="flex items-center space-x-3 rtl:space-x-reverse text-gray-400 hover:text-gray-200 transition-colors"
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
            © 2024 شهاب موسكو - أفضل شركة سياحة روسية للعرب. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
