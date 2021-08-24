import { createSlice } from "@reduxjs/toolkit";
import functionReducer from "../reusableReducer";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productsToAdd: [],
  },
  reducers: {
    changeProduct: (state, action) => {
      localStorage.setItem("cartProducts", action.payload);
      return functionReducer(state, action, "productsToAdd");
    },
  },
});

export const { changeProduct } = cartSlice.actions;

export default cartSlice.reducer;
