
export interface Specialty {
  id: number;
  slug: string;
  name_fa: string;
  icon: string;
  description: string;
  is_active: boolean;
}

export interface Stats {
  questions: number;
  users: number;
  exams: number;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ExamLevel {
  id: number;
  name: string;
  slug: string;
}
