
import React from 'react';

interface HeroProps {
  questionCount: number;
}

const Hero: React.FC<HeroProps> = ({ questionCount }) => {
  const formattedCount = questionCount.toLocaleString('fa-IR');

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 gradient-bg">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-right">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6">
              بزرگترین بانک سوالات پزشکی ایران
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-blue-950 leading-tight md:leading-[1.2] mb-8">
              پلتفرم جامع آمادگی <br />
              <span className="text-blue-600">آزمون‌های تخصصی پزشکی</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              بیش از <span className="font-bold text-blue-700">{formattedCount}</span> سوال تخصصی با پاسخ‌های کاملاً تشریحی، شبیه‌ساز آزمون‌های واقعی و تحلیل هوشمند عملکرد شما برای موفقیت در کنکورهای پزشکی.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white text-lg font-bold rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-1">
                شروع یادگیری رایگان
              </button>
              <button className="w-full sm:w-auto px-10 py-4 bg-white text-blue-900 text-lg font-bold rounded-2xl border border-gray-200 hover:border-blue-600 transition-all flex items-center justify-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                مشاهده دمو سوالات
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://picsum.photos/id/482/800/600" 
                alt="Medical Study" 
                className="w-full h-auto grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-teal-100 rounded-full blur-3xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
