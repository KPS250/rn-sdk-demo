import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import appReducer from './slices/appSlice';

export const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
});
