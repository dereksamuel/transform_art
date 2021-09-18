import { useHistory } from "react-router-dom";
import { MdAdd, MdRemove } from "react-icons/md";
import { ItemCart } from ".";
import { Button } from "../Button/index.jsx";
import { Input } from "../Input/index.jsx";
import { Link } from "react-router-dom";

const CartContext = ({ src, name, description, offer, price, productsToAdd, id, }) => {
  const productSelected = useHistory().location?.state?.productSelected;
  const calculateOffer = (offer, price) => {
    const percentagePrice = 100 - offer;
    return (price * percentagePrice) / 100;
  };

  const realPrice = calculateOffer(offer, price) || price;
  const selected = productsToAdd.filter((productAdded) => productAdded.id === id);

  return (
    <ItemCart selected={productSelected ? productSelected.id === id : false}>
      <td>
        <img src={src} alt={name} />
        <article>
          <Link to={`/picture/${id}`}>
            <h4>{name}</h4>
          </Link>
          {
            description && <p>{description}</p>
          }
        </article>
      </td>
      <td>
        <div className="Total">
          <p>Precio: ${new Intl.NumberFormat().format(realPrice)}</p>
        </div>
      </td>
      <td className="buttons">
        <Input inputProps={{
          placeholder: "Cantidad",
          defaultValue: selected.length,
        }} prependTWO={<MdAdd />}>
          <MdRemove></MdRemove>
        </Input>
        <Button theme="danger">Eliminar</Button>
      </td>
      <td>
        <div className="Total">
          <p>Precio: ${new Intl.NumberFormat().format(realPrice)}</p>
        </div>
      </td>
    </ItemCart>
  );
};

export default CartContext;
