import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { SortBy, SortType } from '../../entities/model';

interface FilterState {
  categoryId: number;
  sort: SortType;
  searchValue: string;
}

const initialState: FilterState = {
  categoryId: 0,
  sort: { name: 'популярные', sortBy: SortBy.RATING_DESC },
  searchValue: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },

    setSort(state, action: PayloadAction<SortType>) {
      state.sort = action.payload;
    },

    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const selectFilter = (state: RootState) => state.filter;

export const { setCategoryId, setSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
