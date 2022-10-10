import AuthReducer from './AuthReducer';
import DatabaseConnectionVisualReducer from './DatabaseConnectionVisual';
import { configureStore } from '@reduxjs/toolkit';

const ReduxStore = configureStore({
  reducer: {
    auth: AuthReducer,
    dbStatus: DatabaseConnectionVisualReducer,
  },
});

export default ReduxStore;
