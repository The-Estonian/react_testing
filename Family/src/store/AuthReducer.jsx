import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { isAuthenticated: false };

const isAuthenticated = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = isAuthenticated.actions;
export default isAuthenticated.reducer;
