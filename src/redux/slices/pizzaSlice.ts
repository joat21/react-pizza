import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { PizzaItem, Status } from '../../entities/model';

export const fetchItems = createAsyncThunk(
  'pizza/fetchItemsStatus',
  async (params: Record<string, string>) => {
    const { sortBy, category, search } = params;
    const { data } = await axios.get<PizzaItem[]>(
      `https://1fa97bb2e797534b.mokky.dev/pizzas?sortBy=${sortBy}${category}${search}`
    );

    return data;
  }
);

interface PizzaState {
  items: PizzaItem[];
  status: Status;
}

const initialState: PizzaState = {
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
        (state, action: PayloadAction<PizzaItem[]>) => {
          state.status = Status.SUCCEEDED;
          state.items = action.payload;
        }
      )
      .addCase(fetchItems.rejected, (state) => {
        state.status = Status.FAILED;
        state.items = [];
      });
  },
});

export default pizzaSlice.reducer;
