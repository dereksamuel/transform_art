import { Badge, Badges, Input, Img, ContainerImg } from ".";
import { MdTextFields, MdImage, MdClose, MdModeEdit } from "react-icons/md";
import { useEffect } from "react";

export const AboutUsInformation = ({
  about_us,
  inputsData,
  setInputsData,
  deleteInputsData,
  setDeleteInputsData,
}) => {

  useEffect(() => {
    setInputsData(about_us);
  }, [about_us, setInputsData]);

  const createInput = () => {
    const latestInput = document.querySelector(`.input${inputsData.length - 1}`);
    const textFields = inputsData.filter((input) => input.type === "text");

    // if (textFields.length) {
    //   if (!latestInput?.value) {
    //     latestInput.focus();
    //     return;
    //   }
    // }

    setInputsData([
      ...inputsData,
      {
        data: "",
        type: "text",
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

  const deleteImage = (event) => {
    const filteredResponse = inputsData.filter((inputData, index) => index !== +event.target.id);
    setInputsData(filteredResponse);
    document
      .querySelector(".Inputs")
      .querySelector(`.${event.target.classList[0]}`)
      ?.remove();
  };

  const handleShowModal = () => {
  };

  return (
    <>
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
        <Badge onClick={handleShowModal}><MdImage /></Badge>
      </Badges>
    </>
  );
};
