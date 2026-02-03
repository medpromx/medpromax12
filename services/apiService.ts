
import { Specialty, Stats } from '../types';

const API_BASE_URL = 'https://www.medicalpromax.ir/api';

export const apiService = {
  async getSpecialties(): Promise<Specialty[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/specialties/`);
      if (!response.ok) throw new Error('Failed to fetch specialties');
      return await response.json();
    } catch (error) {
      console.error('Error fetching specialties:', error);
      // Fallback data if API is down for demo purposes
      return [
        { id: 1, slug: 'medicine', name_fa: 'پزشکی', icon: '🩺', description: 'آمادگی آزمون‌های دستیاری، پیش‌کارورزی و ارتقاء', is_active: true },
        { id: 2, slug: 'dentistry', name_fa: 'دندانپزشکی', icon: '🦷', description: 'بانک سوالات تخصصی دندانپزشکی و رزیدنتی', is_active: true }
      ];
    }
  },

  async getStats(): Promise<Stats> {
    try {
      const response = await fetch(`${API_BASE_URL}/questions/stats/`);
      if (!response.ok) throw new Error('Failed to fetch stats');
      return await response.json();
    } catch (error) {
      console.error('Error fetching stats:', error);
      return { questions: 25000, users: 12000, exams: 450 };
    }
  }
};
