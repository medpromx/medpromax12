
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-20 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <span className="text-2xl font-black text-white">
                Medical<span className="text-blue-500">Pro</span>Max
              </span>
            </div>
            <p className="leading-relaxed mb-8 font-medium">
              تخصص ما، موفقیت شماست. پلتفرم مدیکال پرو مکس بزرگترین جامعه آنلاین پزشکان و دانشجویان پزشکی برای آمادگی آزمون‌های سراسری.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <i className="fab fa-telegram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-black mb-8 border-r-4 border-blue-600 pr-4">لینک‌های سریع</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#" className="hover:text-blue-500 transition-colors">صفحه اصلی</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">لیست دوره‌ها</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">بانک سوالات</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">سوالات متداول</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-black mb-8 border-r-4 border-blue-600 pr-4">تخصص‌ها</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#" className="hover:text-blue-500 transition-colors">پزشکی عمومی</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">دندانپزشکی</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">داروسازی</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">رزیدنتی و دستیاری</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-black mb-8 border-r-4 border-blue-600 pr-4">ارتباط با ما</h4>
            <ul className="space-y-4 font-medium">
              <li className="flex items-start gap-3">
                <span className="text-blue-500">📍</span>
                تهران، خیابان آزادی، مرکز نوآوری سلامت
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">📞</span>
                ۰۲۱-۸۸۸۸۴۴۴۴
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-blue-500">✉️</span>
                support@medicalpromax.ir
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <p>© ۱۴۰۳ تمام حقوق این وب‌سایت متعلق به مدیکال پرو مکس می‌باشد.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">قوانین و مقررات</a>
            <a href="#" className="hover:text-white">حریم خصوصی</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
