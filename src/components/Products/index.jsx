import { useState } from "react";

import { ProductsComponent } from ".";
import { MdAdd } from "react-icons/md";
import { Product } from "./Product.jsx";
import { Modal } from "../Modal/index.jsx";
import { ProductsModal } from "../Modal/ProductsModal.jsx";

export const Products = ({ products }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);

  const handleShowModal = (value = true, product) => {
    if (product) {
      setModalInfo(product);
    } else {
      setModalInfo(null);
    }
    setShowModal(value);
  };

  const handleDeleteProduct = () => {};

  return (
    <ProductsComponent>
      {
        showModal && <Modal onClick={handleShowModal} closeButton>
          <ProductsModal modalInfo={modalInfo}></ProductsModal>
        </Modal>
      }
      <li className="ProductItem" onClick={() => handleShowModal(true)}>
        <MdAdd></MdAdd>
      </li>
      {
        products?.map((productItem) => (
          <Product onClick={handleShowModal} product={productItem} key={productItem.id} />
        )) || <p>No hay</p>
      }
    </ProductsComponent>
  );
};
