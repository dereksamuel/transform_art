import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentUser, changeLoading } from "../features/login/loginSlice";

import firebase from "../helpers/firebase.js";

/* eslint-disable no-undef */
export const useUser = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.login.loading);
  const currentUser = useSelector((state) => state.login.currentUser);

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(changeCurrentUser({
          ...user.providerData[0],
          id: user.uid,
          refreshToken: user.refreshToken,
        }));
      } else {
        dispatch(changeCurrentUser(user));
      }
      if (loading) {
        dispatch(changeLoading(false));
      }
    });
    return subscriber;
  }, []);//unsubsbribe on unmount

  return {
    loading,
    currentUser
  };
};
