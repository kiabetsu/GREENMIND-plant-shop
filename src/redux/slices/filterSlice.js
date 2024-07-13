import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterPriceMin: 0,
  filterPriceMax: 30000,
  care: [],
  hight: [],
  currentPage: 1,
  search: '',
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
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setFilters: (state, action) => {
      state.sort = action.payload.sort;
      state.currentPage = Number(action.payload.currentPage);
      if(action.payload.hight && action.payload.hight.length !== 0)
        state.hight = Array(action.payload.hight);
      if(action.payload.care && action.payload.care.length !== 0)
        state.care = Array(action.payload.care);
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
  setSearch,
} = filterSlice.actions;

export default filterSlice.reducer;
