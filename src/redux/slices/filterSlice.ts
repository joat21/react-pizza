import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { SortBy, SortType } from '../../entities/model';

interface FilterState {
  categoryId: number;
  sort: SortType;
  searchValue: string;
  currentPage: number;
}

const initialState: FilterState = {
  categoryId: 0,
  sort: { name: 'популярные', sortBy: SortBy.RATING_DESC },
  searchValue: '',
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
      state.currentPage = 1;
    },

    setSort(state, action: PayloadAction<SortType>) {
      state.sort = action.payload;
      state.currentPage = 1;
    },

    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
      state.currentPage = 1;
    },

    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const selectFilter = (state: RootState) => state.filter;

export const { setCategoryId, setSort, setSearchValue, setCurrentPage } =
  filterSlice.actions;

export default filterSlice.reducer;
