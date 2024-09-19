import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItemType } from '../../entities/model';
import { RootState } from '../store';

interface CartState {
  items: CartItemType[];
  totalPrice: number;
  totalCount: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItemType>) {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item) {
        item.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice += action.payload.price;
      state.totalCount++;
    },

    removeItem(state, action: PayloadAction<string>) {
      const item = state.items.find((item) => item.id === action.payload);

      if (!item) {
        return;
      }

      state.totalCount -= item.count;
      state.totalPrice -= item.count * item.price;

      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    decrementItemCount(state, action: PayloadAction<string>) {
      const item = state.items.find((item) => item.id === action.payload);

      if (!item) {
        return;
      }

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

export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((item) => item.id === id);

export const { addItem, removeItem, decrementItemCount, clear } =
  cartSlice.actions;

export default cartSlice.reducer;
