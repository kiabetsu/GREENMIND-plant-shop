import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterPriceMin: 0,
  filterPriceMax: 30000,
  care: [],
  hight: [],
  currentPage: 1,

  sort: {
    name: "popular",
    sortProperty: "rating",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setCare: (state, action) => {
      state.care = action.payload;
    },
    setHight: (state, action) => {
      state.hight = action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSort, setCare, setHight, decrement, incrementByAmount } =
  filterSlice.actions;

export default filterSlice.reducer;
