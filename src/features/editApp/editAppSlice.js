import { createSlice } from "@reduxjs/toolkit";
import functionReducer from "../reusableReducer";

export const editAppSlice = createSlice({
  name: "editApp",
  initialState: {
    products: [],
    contact_information: [],
    about_us: [],
    loading: true,
  },
  reducers: {
    changeProducts: (state, action) => functionReducer(state, action, "products"),
    changeContactInformation: (state, action) => functionReducer(state, action, "contact_information"),
    changeAboutUs: (state, action) => functionReducer(state, action, "about_us"),
    changeLoading: (state, action) => functionReducer(state, action, "loading"),
  },
});

export const {
  changeProducts,
  changeAboutUs,
  changeContactInformation,
  changeLoading,
} = editAppSlice.actions;

export default editAppSlice.reducer;
