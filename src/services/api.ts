import axios from 'axios';
import { storageService } from '../shared/utils/storage';

const api = axios.create({
  baseURL: 'http://192.168.1.168:3030/api', // Replace with actual API
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = storageService.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      storageService.removeToken();
      storageService.removeUser();
    }
    return Promise.reject(error);
  }
);

export default api;