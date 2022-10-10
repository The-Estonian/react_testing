import { createSlice } from '@reduxjs/toolkit';

const DatabaseConnectionVisual = createSlice({
  name: 'dbVisual',
  initialState: {
    ConnectionVisual: {
      status: 'CONNECTED',
      title: 'Connection ready to be used',
    },
  },
  reducers: {
    refreshNotification(state, action) {
      state.ConnectionVisual = {
        status: action.payload.status,
        title: action.payload.title,
      };
    },
  },
});

export const dbVisualActions = DatabaseConnectionVisual.actions;
export default DatabaseConnectionVisual.reducer;
