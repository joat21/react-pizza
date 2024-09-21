import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Meta, PizzaItem, Status } from '../../entities/model';

type FetchedData = {
  meta: Meta;
  items: PizzaItem[];
};

type FetchItemsParams = {
  sortBy: string;
  category: string;
  search: string;
  currentPage: number;
};

// Record<string, string> & { currentPage: number }
export const fetchItems = createAsyncThunk(
  'pizza/fetchItemsStatus',
  async (params: FetchItemsParams) => {
    const { sortBy, category, search, currentPage } = params;
    const { data } = await axios.get<FetchedData>(
      `https://1fa97bb2e797534b.mokky.dev/pizzas?page=${currentPage}&limit=8&sortBy=${sortBy}${category}${search}`
    );

    return data;
  }
);

interface PizzaState {
  meta: Meta | null;
  items: PizzaItem[];
  status: Status;
}

const initialState: PizzaState = {
  meta: null,
  items: [],
  status: Status.PENDING,
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = Status.PENDING;
        state.items = [];
      })
      .addCase(
        fetchItems.fulfilled,
        (state, action: PayloadAction<FetchedData>) => {
          state.status = Status.SUCCEEDED;
          state.items = action.payload.items;
          state.meta = action.payload.meta;
        }
      )
      .addCase(fetchItems.rejected, (state) => {
        state.status = Status.FAILED;
        state.items = [];
      });
  },
});

export default pizzaSlice.reducer;
