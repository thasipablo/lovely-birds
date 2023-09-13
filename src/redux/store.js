import { configureStore } from '@reduxjs/toolkit';
import { birdsSlice } from './books/birdsSlice';

const store = configureStore({
  reducer: {
    bird: birdsSlice.reducer,
  },
});

export default store;
