import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";
import plantSlice from "./slices/plantSlice";

export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
    plantSlice
  },
});
