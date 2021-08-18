import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProducts } from "../features/editApp/editAppSlice.js";
import { db } from "../helpers/firebase.js";

export const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.editApp.products);

  const fetchData = async () => {
    try {
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
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return products;
};
