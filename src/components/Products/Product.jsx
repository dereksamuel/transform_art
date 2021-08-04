export const Product = ({ product, onClick }) => {
  return (
    <li className="ProductItem iterable" onClick={() => onClick(true, product)}>
      <img
        src={product.src}
        alt={product.name}
        className="ProductItem__image" />
    </li>
  );
};
