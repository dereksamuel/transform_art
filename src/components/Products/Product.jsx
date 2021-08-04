export const Product = ({ product }) => {
  return (
    <li className="ProductItem iterable">
      <img
        src={product.src}
        alt={product.name}
        className="ProductItem__image" />
    </li>
  );
};
