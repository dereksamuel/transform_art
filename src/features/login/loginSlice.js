import { createSlice } from "@reduxjs/toolkit";
import functionReducer from "../reusableReducer";

const rememberMe = JSON.parse(sessionStorage.getItem("rememberMe")) || false;

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    currentUser: null,
    rememberMe,
    loading: true,
  },
  reducers: {
    changeCurrentUser: (state, action) => functionReducer(state, action, "currentUser"),
    changeRememberMe: (state, action) => functionReducer(state, action, "rememberMe"),
    changeLoading: (state, action) => functionReducer(state, action, "loading"),
  },
});

export const { changeCurrentUser, changeRememberMe, changeLoading } = loginSlice.actions;

export default loginSlice.reducer;
