import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAboutUs, changeContactInformation, changeLoading, changeProducts } from "../features/editApp/editAppSlice.js";
import { db } from "../helpers/firebase.js";

export const useEdit = () => {
  const dispatch = useDispatch();
  const editApp = useSelector((state) => state.editApp);

  const fetchData = async () => {
    try {
      // const resultObject = {};

      // const mapItem = (doc) => {
      //   console.log("Hola");
      //   return ({
      //     id: doc.id,
      //     ...doc.data(),
      //   });
      // };

      // const promises = await Promise.all([
      //   db.collection("products").get(mapItem),
      //   db.collection("contact_information").get(mapItem),
      //   db.collection("about_us").get(mapItem),
      // ]);

      // console.log(promises, resultObject);
    
    
      // const results = {
      //   products: promises[0],
      //   contact_information: promises[1],
      //   about_us: promises[2],
      // };

      // dispatch(changeLoading(false));
      // dispatch(changeAboutUs(results.about_us));
      // dispatch(changeContactInformation(results.contact_information));
      // dispatch(changeProducts(results.products));
    db.collection("products").onSnapshot((querySnapshot) => {
      let products = [];
      querySnapshot.forEach((doc) => {
        products.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      dispatch(changeProducts(products));
    });

    db.collection("contact_information").onSnapshot((querySnapshot) => {
      let ci = [];
      querySnapshot.forEach((doc) => {
        ci.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      dispatch(changeContactInformation(ci));
    });

    db.collection("about_us").onSnapshot((querySnapshot) => {
      let about_us = [];
      querySnapshot.forEach((doc) => {
        about_us.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      dispatch(changeAboutUs(about_us));
    });
    } catch (error) {
      dispatch(changeLoading(false));
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return editApp;
};
