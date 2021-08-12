import { Badge, Badges, Input, Img, ContainerImg } from ".";
import { MdTextFields, MdImage, MdClose, MdModeEdit } from "react-icons/md";
import { useEffect, useState } from "react";

export const AboutUsInformation = ({
  about_us
}) => {
  const [inputsData, setInputsData] = useState([]);

  useEffect(() => {
    setInputsData(about_us);
  }, [about_us]);
  
  const createInput = () => {
    const latestInput = document.querySelector(`.input${inputsData.length - 1}`);
    const textFields = inputsData.filter((input) => input.type === "text");

    if (textFields.length) {
      if (!latestInput?.value) {
        latestInput.focus();
        return;
      }
    }

    setInputsData([
      ...inputsData,
      {
        data: "",
        type: "text",
      },
    ]);
    const timer = setTimeout(() => {
      document.querySelector(`.input${inputsData.length}`).focus();
      clearTimeout(timer);
    }, 0);
  };
  
  const handleDelete = (event) => {
    if (event.target.value === "") {
      const filteredResponse = inputsData.filter((inputData, index) => index !== +event.target.id);
      setInputsData(filteredResponse);
      const timer = setTimeout(() => {
        const latestInput = document.querySelector(`.input${+event.target.id}`);
        if (latestInput) {
          latestInput.value = filteredResponse[event.target.id].data;
        }
        clearTimeout(timer);
      }, 0);
    } else {
      let copyInputs = JSON.parse(JSON.stringify(inputsData));// Talvez aquí
      const myInputLocal = copyInputs[event.target.id];
      if (myInputLocal) {
        myInputLocal.data = event.target.value;
      }
      setInputsData(copyInputs);
      // console.log(inputsData, myInputLocal);//FIXME: Arregla el problema de borrar y luego no registra valor
    }
  };

  const deleteImage = (event) => {
    const filteredResponse = inputsData.filter((inputData, index) => index !== +event.target.id);
    setInputsData(filteredResponse);
    document
      .querySelector(".Inputs")
      .querySelector(`.${event.target.classList[0]}`)
      ?.remove();
  };

  return (
    <>
      <div className="Inputs">
        {
          inputsData?.length ? inputsData.map((input, index) => {
            return input.type === "text" ? (
              <Input
                placeholder="Escribe tu párrafo aquí"
                key={input.id || index}
                id={index}
                className={`input${index}`}
                defaultValue={input.data}
                onChange={handleDelete} />
            ) : (
              <ContainerImg key={input.id || index}>
                <div className="cancel" onClick={deleteImage}>
                  <MdClose />
                </div>
                <Img src={input.data} id={index} className={`input${index}`} />
                <div className="edit">
                  <MdModeEdit />
                </div>
              </ContainerImg>
            )
          }) : <div></div>
        }
      </div>
      <Badges>
        <Badge onClick={createInput}><MdTextFields /></Badge>
        <Badge><MdImage /></Badge>
      </Badges>
    </>
  );
};
