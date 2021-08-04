import { configureStore } from "@reduxjs/toolkit";
import editAppSlice from "./features/editApp/editAppSlice";
import loginSlice from "./features/login/loginSlice";

export default configureStore({
  reducer: {
    login: loginSlice,
    editApp: editAppSlice,
  },
});
