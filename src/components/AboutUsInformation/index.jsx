import { Badge, Badges, Input } from ".";
import { MdTextFields, MdImage } from "react-icons/md";
import { useState } from "react";

export const AboutUsInformation = () => {
  const [inputs, setInputs] = useState([
    ...document.querySelectorAll(".Inputs input")
  ]);
  const [inputsData, setInputsData] = useState([]);
  
  const createInput = () => {
    const newInput = document.createElement("input");
    setInputsData([
      ...inputsData,
      {
        value: "",
      }
    ]);
    setInputs([
      ...inputs,
      newInput,
    ]);
  };
  
  const handleDelete = (event) => {
    // const myInput = inputs[event.target.id];
    if (event.target.value === "") {
      const filteredResponse = inputsData.filter((inputData, index) => index !== +event.target.id);
      setInputsData(filteredResponse);
      document
        .querySelector(".Inputs")
        .querySelector(`.${event.target.classList[0]}`)
        ?.remove();
      // const inputsDelete = inputs.filter(($input) => {
      //   console.log($input.classList[0], event.target.classList[0], $input.classList[0] !== event.target.classList[0]);
      //   if ($input.classList[0] !== event.target.classList[0]) {
      //     $input.remove()
      //     return $input.classList[0] !== event.target.classList[0];
      //   }
      //   return;
      // });
      // setInputs(inputsDelete);
      // setTimeout(() => {
      //   setInputs([
      //     ...document.querySelectorAll(".Inputs input")
      //   ]);
      // }, 0);
    } else {
      let copyInputs = JSON.parse(JSON.stringify(inputsData));// Talvez aquí
      const myInputLocal = copyInputs[event.target.id];
      if (myInputLocal) {
        myInputLocal.value = event.target.value;
      }
      setInputsData(copyInputs);
      console.log(inputsData, myInputLocal);//FIXME: Arregla el problema de borrar y luego no registra valor
    }
  };

  return (
    <>
      <div className="Inputs">
        {
          inputs.length ? inputs.map((input, index) => (
            <Input key={index} id={index} className={`input${index}`} defaultValue={input.value} onChange={handleDelete} />
          )) : <></>
        }
      </div>
      <Badges>
        <Badge onClick={createInput}><MdTextFields /></Badge>
        <Badge><MdImage /></Badge>
      </Badges>
    </>
  );
};
