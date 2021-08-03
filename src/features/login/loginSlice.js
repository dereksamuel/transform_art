import { createSlice } from "@reduxjs/toolkit";
import functionReducer from "../reusableReducer";

const rememberMe = JSON.parse(sessionStorage.getItem("rememberMe")) || false;

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    currentUser: null,
    rememberMe,
  },
  reducers: {
    changeCurrentUser: (state, action) => functionReducer(state, action, "currentUser"),
    changeRememberMe: (state, action) => functionReducer(state, action, "rememberMe"),
  },
});

export const { changeCurrentUser, changeRememberMe } = loginSlice.actions;

export default loginSlice.reducer;
