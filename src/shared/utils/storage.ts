import { createMMKV } from 'react-native-mmkv';

export const storage = createMMKV({ id: 'doctor-app' });

// Storage keys
export const STORAGE_KEYS = {
  TOKEN: 'authToken',
  USER: 'user',
  THEME: 'theme',
} as const;

// Helper functions
export const storageService = {
  setToken: (token: string) => {
    storage.set(STORAGE_KEYS.TOKEN, token);
  },

  getToken: () => {
    return storage.getString(STORAGE_KEYS.TOKEN);
  },

  removeToken: () => {
    storage.remove(STORAGE_KEYS.TOKEN);
  },

  setUser: (user: string) => {
    storage.set(STORAGE_KEYS.USER, user);
  },

  getUser: () => {
    const user = storage.getString(STORAGE_KEYS.USER);
    return user ? JSON.parse(user) : null;
  },

  removeUser: () => {
    storage.remove(STORAGE_KEYS.USER);
  },

  clearAll: () => {
    storage.clearAll();
  },
};