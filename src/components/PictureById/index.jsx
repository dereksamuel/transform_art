import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { PictureItem } from "../PictureContent/PictureItem.jsx";

export const PictureById = ({ editApp }) => {
  const { id } = useParams();
  let product = editApp.products?.find((product) => product.id === id);

  return (
    <>
      <div className="Picture_ID">
        {
          product && editApp.products.length ? <PictureItem products={editApp.products} product={product} video={true} /> : ""
        }
      </div>
    </>
  );
};
