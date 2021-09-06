import { Title } from "../components/Title/index.jsx";
import { Button } from "../components/Button/index.jsx";
import { useSelector } from "react-redux";

export const Cart = () => {
  const productsToAdd = useSelector((state) => state.cart.productsToAdd);

  return (
    <div className="Cart">
      <Title>Carrito de compras</Title>
      <ul>
        {
          productsToAdd?.map((product) => (
            <li>{ product.name }</li>
          ))
        }
      </ul>
      {/* <CartContent></CartContent> */}
      <Button>Continuar compra</Button>
    </div>
  );
};
