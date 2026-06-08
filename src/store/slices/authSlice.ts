import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, Doctor, User } from '../../shared/types';
import { storageService } from '../../shared/utils/storage';
import { loginAction, signupAction } from '../actions/authAction';

const initialState: AuthState = {
  user: storageService.getUser(),
  token: storageService.getToken() || null,
  isLoading: false,
  isAuthenticated: !!storageService.getToken(),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: Doctor | User; token: string }>,
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;

      storageService.setToken(action.payload.token);
      storageService.setUser(JSON.stringify(action.payload.user));
    },

    setUser: (state, action: PayloadAction<Doctor | User>) => {
      state.user = action.payload;
      storageService.setUser(JSON.stringify(action.payload));
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    logout: state => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;

      storageService.removeToken();
      storageService.removeUser();
    },
  },

  extraReducers: builder => {
    builder
      .addCase(loginAction.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;

        storageService.setToken(action.payload.token);
        storageService.setUser(JSON.stringify(action.payload.user));
      })
      .addCase(loginAction.rejected, state => {
        state.isLoading = false;
      })

      .addCase(signupAction.pending, state => {
        state.isLoading = true;
      })
      .addCase(signupAction.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(signupAction.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const { setCredentials, setUser, setLoading, logout } = authSlice.actions;
export default authSlice.reducer;