import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import filterReducer from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    filter: filterReducer,
  },
});
