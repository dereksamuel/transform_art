import { useRef, useState } from "react";

import { ProductsComponent } from ".";
import { MdAdd } from "react-icons/md";
import { Product } from "./Product.jsx";
import { Modal } from "../Modal/index.jsx";
import { ProductsModal } from "../Modal/ProductsModal.jsx";
import { Alert } from "../Alert/index.jsx";

import { useCreateDB } from "../../hooks/useCreateDB.js";
import { useEditDB } from "../../hooks/useEditDB.js";
import { storage, db } from "../../helpers/firebase";
import Compressor from "compressorjs";

export const Products = ({ products }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [fileVideoURL, setVideoURL] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [fileURLBlob, setFileURLBlob] = useState(null);
  const [videoURLBlob, setVideoURLBlob] = useState(null);
  const [fileVideoName, setVideoName] = useState(null);
  const [file, setFile] = useState(null);

  const [fileVideo, setFileVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  const [inputChange, setInputChange] = useState(false);
  const [inputChangeVideo, setInputChangeVideo] = useState(false);
  
  const [videoInject, setVideoInject] = useState(false);

  const ref = useRef();

  const handleShowModal = (value = true, product) => {
    if (product) {
      setModalInfo(product);
    } else {
      setModalInfo(null);
    }
    if (value === false) {
      cleanData();
    }
    setShowModal(value);
  };

  const cleanData = () => {
    setFileURL(null);
    setVideoURL(null);
    setFileName(null);
    setFileURLBlob(null);
    setFile(null);
    setVideoName(null);
    setFileVideo(null);
    setInputChange(false);
    setInputChangeVideo(false);
    setLoading(false);
  };

  const handleDeleteProduct = async (element, timer) => {
    const storageRef = storage.ref();
    const fileRef = element.file_name ? storageRef.child(element.file_name) : null;
    const videoRef = element.file_video_name ? storageRef.child(element.file_video_name) : null;
    try {
      await Promise.all([
        fileRef?.delete(),
        videoRef?.delete(),
        db.collection("products").doc(element.id).delete(),
      ]);

      handleShowModal(false);
      setAlertMessage({
        text: "Producto eliminado con éxito",
        theme: "good",
        title: "Acción exitosa:",
      });
    } catch (error) {
      handleShowModal(false);
      setAlertMessage({
        text: "Producto eliminado sin éxito",
        theme: "bad",
        title: "Error:",
      });
    }
  };
  
  const handleAction = async (event, ref) => {
    event.preventDefault();
    const form = new FormData(ref.current);
    const objectParam = {
      name: form.get("name"),
      description: form.get("description"),
      price: form.get("price"),
      offer: form.get("offer"),
      width: form.get("width"),
      height: form.get("height"),
    };

    if (
      !objectParam.name ||
      !objectParam.price ||
      !objectParam.width ||
      !objectParam.height
    ) {
      console.error("Se requieren ciertos datos para actualizar");
      setAlertMessage({
        text: "Se requieren los campos: Nombre, precio, ancho, imágen y alto",
        theme: "bad",
        title: "Error:",
      });
      return;
    }

    setLoading(true);
    let setterVideoUrl;
    let setterFileUrl;
    if (!file && !modalInfo) {
      setAlertMessage({
        text: "Subir una imágen y un video es requerido",
        theme: "bad",
        title: "Error:",
      });
      return;
    }

    if (file) {
      try {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);

        if (modalInfo) {
          const refModalInfo = storageRef.child(modalInfo.file_name);
          await refModalInfo.delete().catch((error) => {
            console.error("[Error delete storage ref]: ", error);
            setAlertMessage({
              text: "Ha ocurrido un error al actualizar su producto ESPERE",
              theme: "bad",
              title: "Error:",
            });
          });
        }
        await fileRef.put(file);
        setterFileUrl = await fileRef.getDownloadURL();
        setFileURL(setterFileUrl);
        setFileName(file.name);
      } catch (error) {
        console.error(error);
        handleShowModal(false);
        setAlertMessage({
          text: "No se ha actualizado con éxito su producto posiblemente porque el archivo pesa mucho",
          theme: "bad",
          title: "Error:",
        });
      }
    }

    if (fileVideo) {
      try {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(fileVideo.name);

        if (modalInfo && modalInfo.file_video_name) {
          const refModalInfo = storageRef.child(modalInfo.file_video_name);
          await refModalInfo.delete().catch((error) => {
            console.error("[Error delete storage ref]: ", error);
            setAlertMessage({
              text: "Ha ocurrido un error al actualizar su producto ESPERE",
              theme: "bad",
              title: "Error:",
            });
          });
        }
        await fileRef.put(fileVideo);
        setterVideoUrl = await fileRef.getDownloadURL();
        setVideoURL(setterVideoUrl);
        setVideoName(fileVideo.name);
      } catch (error) {
        console.error(error);
        handleShowModal(false);
        setAlertMessage({
          text: "No se ha actualizado con éxito su producto posiblemente porque el video pesa mucho",
          theme: "bad",
          title: "Error:",
        });
      }
    }

    const action = modalInfo ? useEditDB : useCreateDB;
    const objectUrl = {
      src: setterFileUrl,
      file_name: file?.name,
      src_video: !videoInject ? setterVideoUrl || "" : "",
      file_video_name: !videoInject ? fileVideo?.name || "" : "",
    };

    try {
      await action({ collection: "products", docId: modalInfo?.id, data: 
        modalInfo ? {
          ...modalInfo,
          ...objectParam,
          src: inputChange ? objectUrl.src : modalInfo.src,
          src_video: inputChangeVideo ? objectUrl.src_video : modalInfo.src_video,
          file_name: inputChange ? file?.name || modalInfo.file_name : modalInfo.file_name,
          file_video_name: inputChangeVideo ? fileVideo?.name || "" : modalInfo.file_video_name,
        } : { ...objectParam, ...objectUrl }
      });
      setLoading(false);
      setAlertMessage({
        text: `Se ha ${
          modalInfo ? "actualizado" : "creado"
        } con éxito su producto`,
        theme: "good",
        title: "Acción exitosa:",
      });
      handleShowModal(false);
    } catch (error) {
      console.error("[load file ERROR]:", error);
      setLoading(false);
      // handleShowModal(false);
      setAlertMessage({
        text: `No se ha ${
          modalInfo ? "actualizado" : "creado"
        } con éxito su producto`,
        theme: "bad",
        title: "Error:",
      });
    }
  };

  const handleOnChangeFile = async (event) => {
    // const $buttonTextFile = document.querySelector("input::-webkit-file-upload-button");
    new Compressor(event.target.files[0], {
      quality: 0.7,
      success: (result) => {
        let sizeInMBresult = (result.size / (1024 * 1024)).toFixed(2);
        if (sizeInMBresult >= 3) {
          setAlertMessage({
            text: `Esta imágen pesa 3 megas o más`,
            theme: "bad",
            title: "Error:",
          });
          return;
        }

        setFile(result);
        setFileURLBlob(URL?.createObjectURL(new File([ result ], result.name, {
          type: "text/plain",
        })));
      },
    });

  };

  const handleOnChangeVideo = async (event) => {
    let sizeInMB = (event.target.files[0].size / (1024 * 1024)).toFixed(2);
    if (sizeInMB >= 3) {
      setVideoInject(true);
      setAlertMessage({
        text: `Este video pesa 3 megas o más`,
        theme: "bad",
        title: "Error:",
      });
      return;
    }
    setVideoInject(false);
    setFileVideo(event.target.files[0]);
    setVideoURLBlob(URL?.createObjectURL(new File([ event.target.files[0] ], event.target.files[0].name, {
      type: "text/plain",
    })));
  };

  return (
    <ProductsComponent>
      {
        alertMessage && <Alert text={alertMessage.text} deleteAlert={() => setAlertMessage(false)} theme={alertMessage.theme} title={alertMessage.title} />
      }
      {
        showModal && <Modal onClick={handleShowModal} closeButton>
          <ProductsModal
            handleAction={handleAction}
            modalInfo={modalInfo}
            setAlertMessage={setAlertMessage}
            handleShowModal={handleShowModal}
            onChange={handleOnChangeFile}
            formRef={ref}
            disabled={!modalInfo ? !file : loading}
            loading={loading}
            fileURLBlob={fileURLBlob}
            inputChange={inputChange}
            inputChangeVideo={inputChangeVideo}
            setInputChange={setInputChange}
            setInputChangeVideo={setInputChangeVideo}
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
