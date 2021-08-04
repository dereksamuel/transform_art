import { useEffect, useRef, useState } from "react";
import { MdAttachMoney, MdLocalOffer, MdSpaceBar, MdVerticalAlignBottom, MdImage, MdVideocam, MdModeEdit } from "react-icons/md";
import { Button } from "../Button/index.jsx";
import { DeleteButton } from "../DeleteButton/index.jsx";
import { Input, Textarea } from "../Input/index.jsx";
import { Title } from "../Title/index.jsx";

export const ProductsModal = ({
  modalInfo,
  handleDeleteProduct,
  // handleShowModal,
  // setAlertMessage,
  handleAction,
  disabled,
  onChange,
  handleOnChangeVideo,
}) => {
  let timer = null;
  const [statusTab, setStatusTab] = useState("information");
  const [previsualization, setPrevisualization] = useState(false);

  // INPUTS MODAL
  const ref = useRef();

  const handlePrevisualization = () => {
    setPrevisualization(!previsualization);
  };

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {
        !previsualization ? (
          <div>
            <div className="title" onClick={handlePrevisualization}>
              <Title color="var(--color-dark)">Previsualizar</Title>
            </div>
            {
              modalInfo?.src ? (
                <figure className="image">
                  <img src={modalInfo.src} alt={modalInfo.name} className="full__image" />
                  <h3 className="Title">{modalInfo.name}</h3>
                </figure>
              ) : (
                <figure className="full__image__empty">
                </figure>
              )
            }
            <form ref={ref} className="content" onSubmit={(event) => handleAction(event, ref, timer)}>
              <div className="d-flex-dk">
                <p
                  style={ statusTab === "information" ? { color: "var(--color-light)", } : {}}
                  onClick={() => setStatusTab("information")}
                >Información</p>
                <p
                  style={ statusTab === "video" ? { color: "var(--color-light)", } : {}}
                  onClick={() => setStatusTab("video")}
                >Video e imágen</p>
              </div>
                <div style={statusTab !== "information" ? { display: "none", } : { display: "block", }}>
                  <div className="input">
                    <Input
                      inputProps={{
                        type: "text",
                        required: true,
                        id: "name",
                        defaultValue: modalInfo?.name,
                        placeholder: "Nombre",
                        name: "name",
                      }}
                      prependColors="white"
                    >
                      <MdModeEdit />
                    </Input>
                  </div>
                  <Textarea
                    txtProps={{
                      placeholder: "Descripción",
                      name: "description",
                      defaultValue: modalInfo?.description || "",
                    }}
                  />
                  <div className="d-flex">
                    <div className="container__input">
                      <Input
                        inputProps={{
                          type: "number",
                          id: "price",
                          min: "0",
                          placeholder: "Precio",
                          name: "price",
                          required: true,
                          defaultValue: modalInfo?.price || "",
                        }}
                        prependColors="white"
                      >
                        <MdAttachMoney />
                      </Input>
                    </div>
                    <div className="container__input">
                      <Input
                        inputProps={{
                          type: "number",
                          min: "0",
                          id: "oferta",
                          placeholder: "Oferta",
                          name: "offer",
                          defaultValue: modalInfo?.offer || "",
                        }}
                        prependColors="white"
                      >
                        <MdLocalOffer />
                      </Input>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="container__input">
                      <Input
                        inputProps={{
                          type: "number",
                          min: "0",
                          id: "Ancho",
                          placeholder: "Ancho del cuadro",
                          name: "width",
                          required: true,
                          defaultValue: modalInfo?.width || "",
                        }}
                        prependColors="white"
                      >
                        <MdSpaceBar />
                      </Input>
                    </div>
                    <div className="container__input">
                      <Input
                        inputProps={{
                          type: "number",
                          min: "0",
                          id: "Alto",
                          placeholder: "Alto del cuadro",
                          name: "height",
                          required: true,
                          defaultValue: modalInfo?.height || "",
                        }}
                        prependColors="white"
                      >
                        <MdVerticalAlignBottom />
                      </Input>
                    </div>
                  </div>
                  {/* <Input
                    inputProps={{
                      type: "select",
                      min: "0",
                      id: "Tipo",
                      placeholder: "Tipo de cuadro",
                    }}
                    prependColors="white"
                  >
                    <MdVerticalAlignBottom />
                  </Input> */}
                </div>
                <div style={statusTab !== "video" ? { display: "none", } : { display: "block", }}>
                  <div className="d-flex">
                    <div className="container__input">
                      <Input
                        inputProps={{
                          type: "file",
                          id: "SrcImage",
                          filename: modalInfo?.name || "",
                          placeholder: "Dirección de la imágen",
                          name: "src",
                          onChange,
                        }}
                        prependColors="white"
                      >
                        <MdImage />
                      </Input>
                    </div>
                    <div className="container__input">
                      <Input
                        inputProps={{
                          type: "file",
                          id: "Video",
                          placeholder: "Dirección del video",
                          name: "src_video",
                          accept: "video/mp4,video/x-m4v,video/*",
                          onChange: handleOnChangeVideo,
                        }}
                        prependColors="white"
                      >
                        <MdVideocam />
                      </Input>
                    </div>
                  </div>
                </div>
              <div className="d-flex buttons">
                {
                  modalInfo && <DeleteButton modalInfo={modalInfo} disabled={disabled} timer={timer} functionClick={handleDeleteProduct} />
                }
                <Button theme="primary" padding="10px" type="submit" disabled={disabled}>Guardar</Button>
              </div>
            </form>
          </div>
        ) : (
          <div className="Prev">
            <div className="title" onClick={handlePrevisualization}>
              <Title color="var(--color-dark)">Editar</Title>
            </div>
            <figure className="Prev__image">
              <img src={modalInfo.src} alt={modalInfo.name} className="Prev__full__image" />
              <h3 className="Prev__Title">{modalInfo.name}</h3>
            </figure>
          </div>
        )
      }
    </>
  );
};
