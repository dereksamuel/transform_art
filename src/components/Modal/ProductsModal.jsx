import { useRef, useState } from "react";
import { MdAttachMoney, MdLocalOffer, MdSpaceBar, MdVerticalAlignBottom, MdImage, MdVideocam, MdModeEdit } from "react-icons/md";
import { Button } from "../Button/index.jsx";
import { DeleteButton } from "../DeleteButton/index.jsx";
import { Input, Textarea } from "../Input/index.jsx";
import { Title } from "../Title/index.jsx";

export const ProductsModal = ({
  modalInfo,
  handleDeleteProduct,
}) => {
  const [statusTab, setStatusTab] = useState("information");
  const [previsualization, setPrevisualization] = useState(false);

  // INPUTS MODAL
  const ref = useRef();

  const handlePrevisualization = () => {
    setPrevisualization(!previsualization);
  };

  const handleAction = async (event) => {
    event.preventDefault();

    // const action = modalInfo ? useEditProduct : useCreateProduct;
    const form = new FormData(ref.current);
    const objectParam = {
      name: form.get("name"),
      description: form.get("description"),
      price: form.get("price"),
      offer: form.get("offer"),
      width: form.get("width"),
      height: form.get("height"),
      src: form.get("src"),
      src_video: form.get("src_video"),
    };

    console.log(objectParam);
    // await action(objectParam);
  };

  return (
    <>
      {
        !previsualization ? (
          <div>
            <div className="title" onClick={handlePrevisualization}>
              <Title color="var(--color-dark)">Previsualizar</Title>
            </div>
            {
              modalInfo ? (
                <figure className="image">
                  <img src={modalInfo.src} alt={modalInfo.name} className="full__image" />
                  <h3 className="Title">{modalInfo.name}</h3>
                </figure>
              ) : (
                <figure className="full__image__empty">
                </figure>
              )
            }
            <form ref={ref} className="content" onSubmit={handleAction}>
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
                        }}
                        prependColors="white"
                      >
                        <MdVideocam />
                      </Input>
                    </div>
                  </div>
                </div>
              <div className="d-flex buttons">
                <DeleteButton functionClick={handleDeleteProduct} />
                <Button theme="primary" padding="10px" type="submit">Guardar</Button>
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
