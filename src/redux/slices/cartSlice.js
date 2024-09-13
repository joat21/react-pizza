import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item) {
        item.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice += action.payload.price;
      state.totalCount++;
    },

    removeItem(state, action) {
      const item = state.items.find((item) => item.id === action.payload);

      state.totalCount -= item.count;
      state.totalPrice -= item.count * item.price;

      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    decrementItemCount(state, action) {
      const item = state.items.find((item) => item.id === action.payload);

      if (item.count === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        item.count -= 1;
      }

      state.totalCount -= 1;
      state.totalPrice -= item.price;
    },

    clear(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
});

export const { addItem, removeItem, decrementItemCount, clear } = cartSlice.actions;

export default cartSlice.reducer;
