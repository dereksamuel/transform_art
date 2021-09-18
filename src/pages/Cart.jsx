import { Title } from "../components/Title/index.jsx";
import { Button } from "../components/Button/index.jsx";
import { useSelector } from "react-redux";
import CartContent from "../components/CartContent/index.jsx";

export const Cart = ({ editApp }) => {
  const productsToAdd = useSelector((state) => state.cart.productsToAdd);
  const products = editApp.products?.filter((product) => {
    return productsToAdd.find((pa) => {
      return pa.id === product.id;
    });
  }) || null;

  return (
    <div className="Cart">
      <Title>Carrito de compras</Title>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {
            editApp.products?.map((product) => (
              <CartContent key={product.id} {...product} productsToAdd={productsToAdd}></CartContent>
            ))
          }
        </tbody>
      </table>
      {/* <CartContent></CartContent> */}
      <Button>Continuar compra</Button>
    </div>
  );
};
