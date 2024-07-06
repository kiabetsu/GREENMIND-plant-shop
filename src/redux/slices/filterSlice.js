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
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action) => {
      state.sort = action.payload.sort;
      state.currentPage = action.payload.currentPage;
      state.hight = action.payload.hight;
      state.care = action.payload.care;
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
export const {
  setSort,
  setCare,
  setHight,
  setCurrentPage,
  decrement,
  incrementByAmount,
  setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
