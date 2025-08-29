import React from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'packages', label: 'الباقات' },
    { id: 'hotels', label: 'الفنادق' },
    { id: 'activities', label: 'الأنشطة' },
    { id: 'transportation', label: 'النقل' },
    { id: 'contact', label: 'تواصل معنا' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm shadow-lg z-50 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">روسيا</span>
            </div>
            <div className="text-right">
              <h1 className="text-xl font-bold text-white">سفر روسيا</h1>
              <p className="text-xs text-gray-300">رحلات مميزة للسياح العرب</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${currentPage === item.id
                  ? 'bg-red-600 text-white'
                  : 'text-gray-300 hover:text-red-400 hover:bg-gray-800'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-3 rtl:space-x-reverse">
            <a
              href="https://wa.me/79174828474"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 rtl:space-x-reverse bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle size={18} />
              <span>واتساب</span>
            </a>
            <a
              href="tel:+79174828474"
              className="flex items-center space-x-2 rtl:space-x-reverse bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <Phone size={18} />
              <span>اتصل</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-800"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-right px-4 py-3 rounded-lg font-medium transition-all duration-300 ${currentPage === item.id
                    ? 'bg-red-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-red-400'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-2 mt-4 pt-4 border-t border-gray-700">
                <a
                  href="https://wa.me/79174828474"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 rtl:space-x-reverse bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageCircle size={18} />
                  <span>تواصل عبر واتساب</span>
                </a>
                <a
                  href="tel:+79174828474"
                  className="flex items-center justify-center space-x-2 rtl:space-x-reverse bg-gray-700 text-white px-4 py-3 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <Phone size={18} />
                  <span>اتصل بنا الآن</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;