import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '@/services/api';

export type LoginPayload = {
  email: string;
  password: string;
};

export type SignupPayload = {
  name: string;
  email: string;
  phone: string;
  role: string;
  password: string;
  confirmPassword: string;
};

export const loginAction = createAsyncThunk(
  'auth/login',
  async (data: LoginPayload, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/login', data);
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || 'Login failed',
      );
    }
  },
);

export const signupAction = createAsyncThunk(
  'auth/signup',
  async (data: SignupPayload, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/signup', data);
      return response.data.data;
    } catch (error: any) {
      console.error("bhdbfhd--signupAction--error", error)
      return rejectWithValue(
        error.response?.data?.message || 'Signup failed',
      );
    }
  },
);
