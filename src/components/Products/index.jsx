import { useState } from "react";

import { ProductsComponent } from ".";
import { MdAdd } from "react-icons/md";
import { Product } from "./Product.jsx";
import { Modal } from "../Modal/index.jsx";
import { ProductsModal } from "../Modal/ProductsModal.jsx";
import { Alert } from "../Alert/index.jsx";

import { useCreateDB } from "../../hooks/useCreateDB.js";
import { useEditProduct } from "../../hooks/useEditProduct.js";
import { storage, db } from "../../helpers/firebase";

export const Products = ({ products }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [fileVideoURL, setVideoURL] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [fileVideoName, setVideoName] = useState(null);

  const handleShowModal = (value = true, product) => {
    if (product) {
      setModalInfo(product);
    } else {
      setModalInfo(null);
    }
    setShowModal(value);
  };

  const handleDeleteProduct = async (element, timer) => {
    try {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(element.file_name);
      const videoRef = storageRef.child(element.file_video_name);

      console.log(videoRef, fileRef);
      if (videoRef && fileRef) {
        await Promise.all([
          fileRef.delete(),
          videoRef.delete(),
          db.collection("products").doc(element.id).delete(),
        ]);
      }

      setShowModal(false);
      setAlertMessage({
        text: "Producto eliminado con éxito",
        theme: "good",
        title: "Acción exitosa:",
      });
      timer = setTimeout(() => {
        clearTimeout(timer);
        setAlertMessage(null);
      }, 3500);
    } catch (error) {
      console.error(error);
      setShowModal(false);
      setAlertMessage({
        text: "Producto eliminado sin éxito",
        theme: "bad",
        title: "Error:",
      });
      timer = setTimeout(() => {
        setAlertMessage(null);
      }, 3500);
    }
  };

  const handleAction = async (event, ref, timer) => {
    event.preventDefault();
    if (!fileURL || !fileVideoURL) {
      timer = setTimeout(() => {
        setAlertMessage({
          text: "Subir una imágen y un video es requerido",
          theme: "bad",
          title: "Error:",
        });
      }, 3500);
      return;
    }

    const action = modalInfo ? useEditProduct : useCreateDB;
    const form = new FormData(ref.current);
    const objectParam = {
      name: form.get("name"),
      description: form.get("description"),
      price: form.get("price"),
      offer: form.get("offer"),
      width: form.get("width"),
      height: form.get("height"),
      src: fileURL,
      src_video: fileVideoURL,
      file_name: fileName,
      file_video_name: fileVideoName,
    };

    try {
      await action({ collection: "products", data: objectParam });
      setAlertMessage({
        text: "Se ha creado con éxito su producto",
        theme: "good",
        title: "Acción exitosa:",
      });
      timer = setTimeout(() => {
        setAlertMessage(null);
        clearTimeout(timer);
      }, 5000);
      handleShowModal(false);
    } catch (error) {
      console.error(error);
      setAlertMessage({
        text: "No se ha creado con éxito su producto",
        theme: "bad",
        title: "Error:",
      });
    }
  };

  const handleOnChangeFile = async (event) => {
    // const $buttonTextFile = document.querySelector("input[name="]");
    const file = event.target.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);

    await fileRef.put(file);
    setFileURL(await fileRef.getDownloadURL());
    setFileName(file.name);
  };

  const handleOnChangeVideo = async (event) => {
    // const $buttonTextFile = document.querySelector("input[name="]");
    const file = event.target.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);

    await fileRef.put(file);
    setVideoURL(await fileRef.getDownloadURL());
    setVideoName(file.name);
  };

  return (
    <ProductsComponent>
      {
        alertMessage && <Alert text={alertMessage.text} theme={alertMessage.theme} title={alertMessage.title} />
      }
      {
        showModal && <Modal onClick={handleShowModal} closeButton>
          <ProductsModal
            handleAction={handleAction}
            modalInfo={modalInfo}
            setAlertMessage={setAlertMessage}
            handleShowModal={handleShowModal}
            onChange={handleOnChangeFile}
            disabled={!modalInfo && (!fileURL || !fileVideoURL)}
            handleOnChangeVideo={handleOnChangeVideo}
            handleDeleteProduct={handleDeleteProduct}></ProductsModal>
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
