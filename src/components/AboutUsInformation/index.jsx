import { Badge, Badges, Input, Img, ContainerImg, ImgContainer } from ".";
import { MdTextFields, MdImage, MdClose, MdModeEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import { Modal } from "../Modal/index.jsx";

export const AboutUsInformation = ({
  about_us,
  inputsData,
  setInputsData,
  deleteInputsData,
  products,
  setDeleteInputsData,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalSelected, setModalSelected] = useState({});
  // const [arrayImages, setArrayImages] = useState([]);

  useEffect(() => {
    setInputsData(about_us);
  }, [about_us, setInputsData]);

  const createInput = (type = "text", data = "") => {
    setInputsData([
      ...inputsData,
      {
        data,
        type,
        createdDk: true,
      },
    ]);
    const timer = setTimeout(() => {
      document.querySelector(`.input${inputsData.length}`).focus();
      clearTimeout(timer);
    }, 0);
  };

  const handleChange = (event) => {
    let copyInputs = JSON.parse(JSON.stringify(inputsData));// Talvez aquí
    const myInputLocal = copyInputs.find((input) => input.id === event.target.id) || copyInputs[event.target.id];

    if (myInputLocal) {
      myInputLocal.data = event.target.value;
    } else {
      throw new Error("The input is not the same that me");
    }

    setInputsData(copyInputs);
  };
  
  const handleDelete = (event, id) => {
    handleChange(event);
    if (event.target.value === "") {
      const newInputsData = inputsData.filter((input, index) => {
        return input.id ? input.id !== id : index !== +id;
      });
      const deleteInput = inputsData.find((input, index) => {
        return input.id ? input.id === id : index === +id;
      });

      setDeleteInputsData([
        ...deleteInputsData,
        deleteInput,
      ]);
      setInputsData(newInputsData);
    }
  };

  const deleteImage = (event, id) => {
    const newInputsData = inputsData.filter((input, index) => {
      return input.id ? input.id !== id : index !== +id;
    });
    const deleteInput = inputsData.find((input, index) => {
      return input.id ? input.id === id : index === +id;
    });

    setDeleteInputsData([
      ...deleteInputsData,
      deleteInput,
    ]);
    setInputsData(newInputsData);
  };

  const handleShowModal = (value = true, product) => {
    // if (product) {
    //   setModalInfo(product);
    // } else {
    //   setModalInfo({});
    // }
    // if (value === false) {
    //   cleanData();
    // }
    setShowModal(value);
  };

  const handleShowModalImage = () => {
    handleShowModal(true);
  };

  const changeImg = (id) =>  {
    const findMe = inputsData.find((inputData, indexInput) => inputData.id ? inputData.id === id : indexInput === id);
    // setArrayImages([
    //   ...arrayImages,
    //   findMe,
    // ]);
    setModalSelected(findMe);
    handleShowModal(true);
  }

  const handlePutImage = (product) => {
    if (Object.keys(modalSelected).length) {
      const inputsDataFiltered = inputsData.map((inputData) => {
        if (inputData.data === modalSelected.data) {
          inputData = {
            ...inputData,
            data: product.src,
          };
        }
        return inputData;
      });
      // const inputsDataFilteredImages = arrayImages.map((arrayImages) => {
      //   if (arrayImages.data === modalSelected.data) {
      //     arrayImages = {
      //       ...arrayImages,
      //       data: product.src,
      //     };
      //   }
      //   return arrayImages;
      // });
      // setArrayImages(inputsDataFilteredImages);

      setInputsData(inputsDataFiltered);
      handleShowModal(false);
      setModalSelected({});
    } else {
      createInput("file", product.src);
      handleShowModal(false);
      setModalSelected({});
    }
  };

  return (
    <>
      {
        showModal && <Modal onClick={handleShowModal} closeButton>
          <ImgContainer>
            {
              products?.map((product, index) => (
                <img
                  onClick={() => handlePutImage(product)}
                  src={product.src}
                  alt={product.name}
                  key={product.id || index}
                  className={modalSelected.data === product.src ? "select" : "unselect"} />
              ))
            }
          </ImgContainer>
        </Modal>
      }
      <div className="Inputs">
        {
          inputsData?.length ? inputsData.slice().sort((a, b) => a.INDEX - b.INDEX).map((input, index) => {
            return input.type === "text" ? (
              <div key={input.id || index}>
                {
                  input.createdDk ? <Input
                    placeholder="Escribe tu párrafo aquí"
                    id={index}
                    className={`input${index}`}
                    value={input.data}
                    onChange={(event) => handleDelete(event, input.id || index)} /> :
                    <Input
                      placeholder="Escribe tu párrafo aquí"
                      id={input.id || index}
                      className={`input${input.id || index}`}
                      defaultValue={input.data}
                      onChange={(event) => handleDelete(event, input.id || index)} />
                }
              </div>
            ) : (
              <ContainerImg key={input.id || index}>
                <div className="cancel" onClick={(event) => deleteImage(event, input.id || index)}>
                  <MdClose />
                </div>
                <Img src={input.data} id={index} className={`input${index}`} />
                <div className="edit" onClick={() => changeImg(input.id || index)}>
                  <MdModeEdit />
                </div>
              </ContainerImg>
            )
          }) : <div></div>
        }
      </div>
      <Badges>
        <Badge onClick={() => createInput("text", "")}><MdTextFields /></Badge>
        <Badge onClick={handleShowModalImage}><MdImage /></Badge>
      </Badges>
    </>
  );
};
