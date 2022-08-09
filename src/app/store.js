import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../features/slices/imageSlice'


export const store = configureStore({
  reducer: {
    images: imageReducer
  },
});
