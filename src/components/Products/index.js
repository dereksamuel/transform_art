import styled from "@emotion/styled";

export const ProductsComponent = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(11.5rem, 1fr));
  align-content: center;
  text-align: center;
  justify-content: center;
  justify-items: center;
  gap: 15px;
  li.ProductItem {
    border-radius: 10px;
    max-width: 200px;
    width: 100%;
    min-height: 200px;
    max-height: 200px;
    height: 100%;
    border: var(--color-light_gray) 1px solid;
    color: gray;
    cursor: pointer;
    transition: 0.5s background;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
    p {
      vertical-align: middle;
    }
  }
  li.ProductItem:hover {
    background: var(--color-light_gray);
  }
`;
