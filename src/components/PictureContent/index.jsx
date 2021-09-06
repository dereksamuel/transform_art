// import { useEffect, useState } from "react";
import { Container } from ".";
import { PictureItem } from "./PictureItem";

export const PictureContent = ({ products, id, number, from }) => {
  // const [productsColor, setProductsColor] = useState([]);
  // let arrayColors = [];

  // useEffect(() => {
  //   // eslint-disable-next-line no-undef
  //   const colorThief = new ColorThief();

  //   products?.map((product) => {
  //     const image = new Image();
  //     image.crossOrigin = 'Anonymous';
  //     image.src = product.src;

  //     image.addEventListener("load", function() {
  //       arrayColors.push({
  //         ...product,
  //         rgb: colorThief.getColor(image),
  //       });
  //       setProductsColor(arrayColors);
  //       image.removeEventListener("load", () => {});
  //     });
  //   });
  // }, []);

  return <Container from={from}>
    {
      products?.map((product, index) => !(index > number) ? (
        id ?
          product.id !== id ? <PictureItem products={products} key={product.id} product={product} video={false} /> : ""
          :
          <PictureItem products={products} key={product.id} product={product} video={false} />
      ) : "")
    }
  </Container>
};
