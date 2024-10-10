
import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './slice/countrySlice';

const store = configureStore({
  reducer: {
    countrySlice: countryReducer,
  },
});

export default store;
