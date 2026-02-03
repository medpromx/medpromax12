
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">
              M
            </div>
            <span className="text-xl font-extrabold text-blue-900 tracking-tight">
              Medical<span className="text-blue-600">Pro</span>Max
            </span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">صفحه اصلی</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">دوره‌ها</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">بانک سوالات</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">درباره ما</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:block px-5 py-2.5 text-blue-600 font-bold hover:bg-blue-50 rounded-xl transition-all">
            ورود
          </button>
          <button className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl shadow-md shadow-blue-100 hover:bg-blue-700 hover:-translate-y-0.5 transition-all">
            ثبت‌نام رایگان
          </button>
          
          <button 
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl p-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          <a href="#" className="px-4 py-2 text-gray-700 font-medium bg-gray-50 rounded-lg">صفحه اصلی</a>
          <a href="#" className="px-4 py-2 text-gray-700 font-medium">دوره‌ها</a>
          <a href="#" className="px-4 py-2 text-gray-700 font-medium">بانک سوالات</a>
          <a href="#" className="px-4 py-2 text-gray-700 font-medium">درباره ما</a>
        </div>
      )}
    </header>
  );
};

export default Header;
