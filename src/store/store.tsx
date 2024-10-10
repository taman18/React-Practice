
import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './slice/countrySlice';

const store = configureStore({
  reducer: {
    countrySlice: countryReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
