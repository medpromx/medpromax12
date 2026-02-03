
import React from 'react';
import { FEATURES_DATA } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">ویژگی‌های پلتفرم</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            هر آنچه برای موفقیت در آزمون‌های پزشکی نیاز دارید، یک‌جا جمع کرده‌ایم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES_DATA.map((feature) => (
            <div 
              key={feature.id}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group border border-gray-100"
            >
              <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-4xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
