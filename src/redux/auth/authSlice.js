import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, registration } from './operation';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: '',
    isRefreshing: false,
    isLoggedIn: false,
  },
  extraReducers: builder => {
    builder
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      })
      .addCase(registration.pending, state => {
        state.isLoggedIn = false;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isLoggedIn = false;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, state => {
        state.isLoggedIn = false;
        state.token = '';
        state.user = null;
      });
  },
});

export const authReducer = authSlice.reducer;
