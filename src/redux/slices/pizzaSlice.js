import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems = createAsyncThunk(
  "pizza/fetchItems",
  async (params) => {
    const { sortBy, category, search } = params;
    const { data } = await axios.get(
      `https://1fa97bb2e797534b.mokky.dev/pizzas?sortBy=${sortBy}${category}${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "pending",
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "pending";
        state.items = [];
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "succes";
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = "error";
        state.items = [];
      });
  },
});

export default pizzaSlice.reducer;
