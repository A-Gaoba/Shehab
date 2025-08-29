import React from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navRef = React.useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const navItems = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'packages', label: 'الباقات' },
    { id: 'hotels', label: 'الفنادق' },
    { id: 'activities', label: 'الأنشطة' },
    { id: 'transportation', label: 'النقل' },
    { id: 'services', label: 'الخدمات' },
    { id: 'testimonials', label: 'آراء العملاء' },
    { id: 'contact', label: 'تواصل معنا' }
  ];

  return (
    <nav ref={navRef} className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm shadow-lg z-50 border-b border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* Logo - Responsive sizing */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-xl">شهاب</span>
            </div>
            <div className="text-right">
              <h1 className="text-lg sm:text-xl font-bold text-white">شهاب موسكو</h1>
              <p className="text-xs text-gray-300 hidden sm:block">Shehab Moscow</p>
            </div>
          </div>

          {/* Desktop Navigation - Better breakpoints */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`px-3 xl:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm xl:text-base whitespace-nowrap ${currentPage === item.id
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-red-400 hover:bg-gray-800 hover:shadow-md'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Tablet Navigation - Medium screens */}
          <div className="hidden md:flex lg:hidden items-center space-x-4 rtl:space-x-reverse">
            {navItems.slice(0, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`px-2 py-1 rounded-md font-medium transition-all duration-300 text-sm ${currentPage === item.id
                  ? 'bg-red-600 text-white'
                  : 'text-gray-300 hover:text-red-400 hover:bg-gray-800'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
              aria-label="فتح القائمة الإضافية"
              title="فتح القائمة الإضافية"
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Contact Buttons - Responsive sizing */}
          <div className="hidden lg:flex items-center space-x-3 rtl:space-x-reverse">
            <a
              href="https://wa.me/79174828474"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 rtl:space-x-reverse bg-green-600 text-white px-3 xl:px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 hover:shadow-lg text-sm xl:text-base"
            >
              <MessageCircle size={16} className="xl:w-4 xl:h-4" />
              <span className="hidden xl:inline">واتساب</span>
              <span className="xl:hidden">💬</span>
            </a>
            <a
              href="tel:+79174828474"
              className="flex items-center space-x-2 rtl:space-x-reverse bg-gray-700 text-white px-3 xl:px-4 py-2 rounded-lg hover:bg-gray-600 transition-all duration-300 hover:shadow-lg text-sm xl:text-base"
            >
              <Phone size={16} className="xl:w-4 xl:h-4" />
              <span className="hidden xl:inline">اتصل</span>
              <span className="xl:hidden">📞</span>
            </a>
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden lg:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-all duration-300 hover:shadow-md"
            aria-label={isMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Enhanced Mobile & Tablet Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-900/98 backdrop-blur-md border-t border-gray-700 shadow-2xl">
            <div className="container mx-auto px-4 sm:px-6 py-6">
              <div className="space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onPageChange(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-right px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-[0.98] ${currentPage === item.id
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-red-400 border border-gray-700 hover:border-gray-600'
                      }`}
                  >
                    {item.label}
                  </button>
                ))}

                {/* Contact buttons in mobile menu */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-gray-700">
                  <a
                    href="https://wa.me/79174828474"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 rtl:space-x-reverse bg-green-600 text-white px-4 py-3 rounded-xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <MessageCircle size={20} />
                    <span className="font-medium">تواصل عبر واتساب</span>
                  </a>
                  <a
                    href="tel:+79174828474"
                    className="flex items-center justify-center space-x-2 rtl:space-x-reverse bg-gray-700 text-white px-4 py-3 rounded-xl hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Phone size={20} />
                    <span className="font-medium">اتصل بنا الآن</span>
                  </a>
                </div>

                {/* Quick stats in mobile menu */}
                <div className="mt-6 pt-6 border-t border-gray-700 text-center">
                  <div className="grid grid-cols-3 gap-4 text-gray-400 text-sm">
                    <div>
                      <div className="text-red-400 font-bold">1000+</div>
                      <div>عميل راضي</div>
                    </div>
                    <div>
                      <div className="text-red-400 font-bold">10+</div>
                      <div>سنوات خبرة</div>
                    </div>
                    <div>
                      <div className="text-red-400 font-bold">24/7</div>
                      <div>خدمة العملاء</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;