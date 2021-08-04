import { ProductsComponent } from ".";
import { MdAdd } from "react-icons/md";
import { Product } from "./Product.jsx";

export const Products = ({ products }) => {
  return (
    <ProductsComponent>
      <li className="ProductItem">
        <MdAdd></MdAdd>
      </li>
      {
        products?.map((productItem) => (
          <Product product={productItem} key={productItem.id} />
        )) || <p>No hay</p>
      }
    </ProductsComponent>
  );
};
