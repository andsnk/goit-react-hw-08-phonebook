import { createSlice } from '@reduxjs/toolkit';
import { refreshUser, registration } from './operation';

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
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state, { payload }) => {
        state.isLoggedIn = false;
        state.isRefreshing = true;
      });
  },
});

export const authReducer = authSlice.reducer;
