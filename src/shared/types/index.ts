// User roles
export type UserRole = 'doctor' | 'patient';

// User base type
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: string;
}

// Doctor specific
export interface Doctor extends User {
  role: 'doctor';
  specialization: string;
  licenseNumber: string;
  experience: number; // years
  bio?: string;
  rating?: number;
}

// Patient specific
export interface Patient {
  role: 'patient';
  dateOfBirth?: string;
  bloodType?: string;
  allergies?: string[];
  medicalHistory?: string[];
}

// Auth types
export interface AuthState {
  user: Doctor | (User & Patient) | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

// Appointment types
export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  reason: string;
  notes?: string;
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}