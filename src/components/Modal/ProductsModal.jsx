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
  fileURLBlob,
  handleAction,
  disabled,
  loading,
  onChange,
  handleOnChangeVideo,
  inputChange,
  setInputChange,
  inputChangeVideo,
  setInputChangeVideo,
  formRef: ref,
}) => {
  let timer = null;
  const [statusTab, setStatusTab] = useState("information");
  const [previsualization, setPrevisualization] = useState(false);
  const refFile = useRef(null);

  const handlePrevisualization = () => {
    setPrevisualization(!previsualization);
  };

  const generateFile = (src, name) => {
    const fileGeneration = new File([src], name, {
      type: "text/plain",
    });
    return fileGeneration;
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
            {
              modalInfo && <div className="title" onClick={handlePrevisualization}>
                <Title color="var(--color-dark)">Previsualizar</Title>
              </div>
            }
            {
              fileURLBlob ?
                <img src={fileURLBlob} alt="previewUrl" className="full__image" />
              : modalInfo?.src ? (
                <figure className="image">
                  <img src={modalInfo.src} alt={modalInfo.name} className="full__image" />
                  <h3 className="Title">{modalInfo.name}</h3>
                </figure>
              ) : (
                <div>
                  <figure className="full__image__empty">
                  </figure>
                </div>
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
                    {
                      !modalInfo ? (
                        <>
                          <div className="container__input">
                            <Input
                              inputProps={{
                                type: "file",
                                id: "SrcImage",
                                filename: modalInfo?.src || "",
                                placeholder: "Dirección de la imágen",
                                name: "src",
                                onChange,
                                accept: "image/*",
                                ref: refFile,
                                // setRefFile: generateFile(modalInfo?.src, modalInfo?.file_name),
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
                                // defaultValue: generateFile(modalInfo?.src_video, modalInfo?.file_video_name),
                              }}
                              prependColors="white"
                            >
                              <MdVideocam />
                            </Input>
                          </div>
                        </>
                      ) : <>
                          {
                            !inputChange ? 
                            <div className="container__input">
                              <Input
                                inputProps={{
                                  type: "text",
                                  id: "SrcImage",
                                  placeholder: "Dirección de la imágen",
                                  name: "src",
                                  defaultValue: modalInfo.file_name,
                                  readOnly: true,
                                  // setRefFile: generateFile(modalInfo?.src, modalInfo?.file_name),
                                }}
                                prependColors="white"
                              >
                                <MdImage />
                              </Input>
                              <Button padding="5px" theme="primary-outline" onClick={() => setInputChange(true)} type="button">Cambiar</Button>
                            </div> : <div className="container__input">
                              <Input
                                inputProps={{
                                  type: "file",
                                  id: "SrcImage",
                                  filename: modalInfo?.src || "",
                                  placeholder: "Dirección de la imágen",
                                  name: "src",
                                  onChange,
                                  accept: "image/*",
                                  ref: refFile,
                                  // setRefFile: generateFile(modalInfo?.src, modalInfo?.file_name),
                                }}
                                prependColors="white"
                              >
                                <MdImage />
                              </Input>
                              <Button padding="5px" theme="light-outline" onClick={() => setInputChange(false)} type="button">Cancelar</Button>
                            </div>
                          }
                          {
                            !inputChangeVideo ? <div className="container__input">
                              <Input
                                inputProps={{
                                  type: "text",
                                  id: "Video",
                                  placeholder: "Dirección del video",
                                  name: "src_video",
                                  readOnly: true,
                                  defaultValue: modalInfo.file_video_name,
                                  // defaultValue: generateFile(modalInfo?.src_video, modalInfo?.file_video_name),
                                }}
                                prependColors="white"
                              >
                                <MdVideocam />
                              </Input>
                              <Button padding="5px" theme="primary-outline" onClick={() => setInputChangeVideo(true)} type="button">Cambiar</Button>
                            </div> :  <div className="container__input">
                              <Input
                                inputProps={{
                                  type: "file",
                                  id: "Video",
                                  placeholder: "Dirección del video",
                                  name: "src_video",
                                  accept: "video/mp4,video/x-m4v,video/*",
                                  onChange: handleOnChangeVideo,
                                  // defaultValue: generateFile(modalInfo?.src_video, modalInfo?.file_video_name),
                                }}
                                prependColors="white"
                              >
                                <MdVideocam />
                              </Input>
                              <Button padding="5px" theme="light-outline" onClick={() => setInputChangeVideo(false)} type="button">Cancelar</Button>
                            </div>
                          }
                        </>
                    }
                  </div>
                </div>
              <div className="d-flex buttons">
                {
                  modalInfo && <DeleteButton modalInfo={modalInfo} disabled={loading || disabled} timer={timer} functionClick={handleDeleteProduct} />
                }
                <Button theme="primary" padding="10px" type="submit" disabled={loading || disabled}>
                  {
                    loading ? "Cargando" : "Guardar"
                  }
                </Button>
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
