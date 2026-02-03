
import React from 'react';
import { Stats as StatsType } from '../types';

interface StatsProps {
  stats: StatsType;
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <section className="py-16 bg-blue-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          <StatItem 
            value={stats.questions} 
            label="سوال تخصصی" 
            suffix="+" 
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
          <StatItem 
            value={stats.exams} 
            label="آزمون واقعی" 
            suffix="+" 
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
          <StatItem 
            value={stats.users} 
            label="کاربر فعال" 
            suffix="+" 
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
          />
        </div>
      </div>
    </section>
  );
};

const StatItem: React.FC<{ value: number; label: string; suffix?: string; icon: React.ReactNode }> = ({ value, label, suffix = '', icon }) => {
  return (
    <div className="flex flex-col items-center group">
      <div className="w-16 h-16 bg-blue-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors shadow-inner">
        {icon}
      </div>
      <div className="text-5xl font-black mb-2 tracking-tight">
        {value.toLocaleString('fa-IR')}{suffix}
      </div>
      <div className="text-blue-200 text-lg font-medium">{label}</div>
    </div>
  );
};

export default Stats;
