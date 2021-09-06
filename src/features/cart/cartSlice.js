import { createSlice } from "@reduxjs/toolkit";
import functionReducer from "../reusableReducer";

const key = "cartProducts";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productsToAdd: localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [],
  },
  reducers: {
    changeProduct: (state, action) => {
      localStorage.setItem(key, action.payload ? JSON.stringify(action.payload) : null);
      return functionReducer(state, action, "productsToAdd");
    },
  },
});

export const { changeProduct } = cartSlice.actions;

export default cartSlice.reducer;
