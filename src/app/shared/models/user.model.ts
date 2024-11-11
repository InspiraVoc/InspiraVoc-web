export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: 'Estudiante' | 'Mentor' | '';
  phone: string;
  profileImage?: string;
  preferences?: {
    interests: string;
    language: string;
    timezone: string;
  };
  vocationalTestResult?: {
    category: string;
    description: string;
  }; 
}
