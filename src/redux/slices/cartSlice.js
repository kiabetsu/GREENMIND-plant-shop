import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action){
      console.log(action)
      const findItem = state.items.find(obj => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      }else {
        state.items.push({...action.payload, count: 1, countPrice: action.payload.price});
      }
      state.fullPrice = state.items.reduce((sum, obj) => {return obj.price * obj.count + sum}, 0)
    },
    removeItem(state, action){
      const findItem = state.items.find(obj => obj.id === action.payload.id);
      findItem.count --;
      if (findItem.count<1){
        state.items = state.items.filter(obj => obj.id !== action.payload.id);
      }
    },
    clearItems(state){
      state.items = [];
      state.fullPrice = 0;
    },

  },
});

export const {
  addItem, removeItem, clearItems, 
} = cartSlice.actions;

export default cartSlice.reducer;