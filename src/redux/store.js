import { configureStore } from "@reduxjs/toolkit";
import search from "./slices/searchSlice";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";
import pizza from "./slices/pizzaSlice";

export const store = configureStore({
  reducer: {
    search,
    filter,
    cart,
    pizza,
  },
});
