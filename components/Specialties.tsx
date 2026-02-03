
import React from 'react';
import { Specialty } from '../types';

interface SpecialtiesProps {
  specialties: Specialty[];
}

const Specialties: React.FC<SpecialtiesProps> = ({ specialties }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">انتخاب تخصص</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            رشته تخصصی خود را انتخاب کنید تا به بانک سوالات و آزمون‌های مرتبط دسترسی پیدا کنید.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {specialties.map((specialty) => (
            <div 
              key={specialty.id}
              className="group relative bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl"
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-4xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  {specialty.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {specialty.name_fa}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {specialty.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform duration-300">
                    ورود به بانک سوالات
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
