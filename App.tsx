
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import Stats from './components/Stats';
import Features from './components/Features';
import LoadingSpinner from './components/UI/LoadingSpinner';
import { Specialty, Stats as StatsType } from './types';
import { apiService } from './services/apiService';

const App: React.FC = () => {
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [stats, setStats] = useState<StatsType>({ questions: 0, users: 0, exams: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [specialtiesData, statsData] = await Promise.all([
          apiService.getSpecialties(),
          apiService.getStats()
        ]);
        setSpecialties(specialtiesData);
        setStats(statsData);
      } catch (err) {
        setError('خطا در بارگذاری اطلاعات. لطفاً دوباره تلاش کنید.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {loading ? (
          <div className="min-h-[60vh] flex items-center justify-center">
            <LoadingSpinner />
          </div>
        ) : error ? (
          <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold mb-4">{error}</h2>
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-2 bg-blue-600 text-white rounded-xl"
            >
              تلاش مجدد
            </button>
          </div>
        ) : (
          <div className="animate-in fade-in duration-1000">
            <Hero questionCount={stats.questions} />
            <Specialties specialties={specialties} />
            <Stats stats={stats} />
            <Features />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
