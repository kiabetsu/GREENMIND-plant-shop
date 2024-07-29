import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import filterSlice from "./filterSlice";


export const fetchPlants = createAsyncThunk('plant/fetchPlants', async(_, thunkAPI) => {
  const { currentPage, care, hight, search, sort } = thunkAPI.getState().filterSlice;
  const { data } = await axios.get(
    `https://660bbfc3ccda4cbc75dd9c98.mockapi.io/items?page=${currentPage}&limit=12${
      care.length === 0 ? '' : `&care=[${care}]`
    }${hight.length === 0 ? '' : `&hightType=[${hight}]`}${
      search ? `&name=${search}` : ``
    }&sortBy=${sort.sortProperty}`,)
    return data
});


const initialState = {
  status: 'loading',
  items: [],
};

export const plantSlice = createSlice({
  name: "plant",
  initialState,
  reducers: {
    setItems(state, action){
      state.items = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlants.pending, (state) => {
      state.items = [];
      state.status = 'loading';
    });
    builder.addCase(fetchPlants.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchPlants.rejected, (state) => {
      state.items = [];
      state.status = 'error';
    });
  },
});



export default plantSlice.reducer;