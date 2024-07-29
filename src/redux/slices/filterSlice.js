import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  minPrice: 0,
  maxPrice: 30000,
  minPrice2: 0,
  maxPrice2: 30000,
  care: [],
  hight: [],
  currentPage: 1,
  search: '',
  sort: {
    name: "popular",
    sortProperty: "rating",
  },
  hiddenFilter: false,
  popupFilter: false,
  hiddenSort: true,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },    
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setMinPrice2: (state, action) => {
      state.minPrice2 = action.payload;
    },    
    setMaxPrice2: (state, action) => {
      state.maxPrice2 = action.payload;
    },
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
    setHiddenFilter: (state, action) => {
      state.hiddenFilter = action.payload;
    },
    setPopupFilter: (state, action) => {
      state.popupFilter = action.payload;
    },
    setHiddenSort: (state, action) => {
      state.hiddenSort = action.payload;
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
  setMinPrice,
  setMaxPrice,
  setMinPrice2,
  setMaxPrice2,
  setSort,
  setCare,
  setHight,
  setCurrentPage,
  decrement,
  incrementByAmount,
  setFilters,
  setSearch,
  setHiddenFilter,
  setPopupFilter,
  setHiddenSort,
} = filterSlice.actions;

export default filterSlice.reducer;
