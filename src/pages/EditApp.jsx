import { AboutUsInformation } from "../components/AboutUsInformation/index.jsx";
import { Contact_Information as ContactInformation } from "../components/Contact_Information/index.jsx";
import { Products } from "../components/Products/index.jsx";
import { SubTitle } from "../components/Title/index.jsx";
import { Title } from "../components/Title/index.jsx";
import { Button } from "../components/Button/index.jsx";
import { FlexContainer } from "../components/Button/index.js";

import { useEdit } from "../hooks/useEdit.js";
import { useState, useRef } from "react";
import { useCreateDB } from "../hooks/useCreateDB.js";
import { useEditDB } from "../hooks/useEditDB.js";

export const EditApp = () => {
  const editApp = useEdit();
  const [inputsData, setInputsData] = useState([]);
  const inputHouseRef = useRef(null);
  const inputPrivateRef = useRef();

  const handleSaveData = async () => {
    const action = useCreateDB;
    const update = useEditDB;
    const ID = editApp.contact_information[0].id;
    const saveData = {
      inputsData: inputsData.map((inputData) => ({
        ...inputData,
        createdDk: false,
      })),
      inputPrivateRef: inputPrivateRef.current.value,
      inputHouseRef: inputHouseRef.current.value,
    };

    console.log(saveData.inputHouseRef);
    if (
      editApp.contact_information[0]?.phone_number_house !== saveData.inputHouseRef ||
      editApp.contact_information[0]?.phone_number_personal !== saveData.inputPrivateRef
    ) {
      await update({
        collection: "contact_information",
        docId: ID,
        data: {
          phone_number_house: saveData.inputHouseRef,
          phone_number_personal: saveData.inputPrivateRef,
        },
      });
    }

    if (editApp.about_us !== saveData.inputsData) {
      saveData.inputsData.map((inputData) => {
        action({
          collection: "about_us",
          data: inputData,
        }).then(() => {
          console.log("Creado con éxito");
        }).catch((error) => {
          console.error(error);
        });
      });
    }

    console.log(saveData);
  };

  return (
    <div className="EditApp">
      <Title>Cambiar información</Title>
      <SubTitle>Productos:</SubTitle>
      <Products products={editApp.products}></Products>
      <SubTitle>Información de contacto:</SubTitle>
      <ContactInformation
        contact_information={editApp.contact_information}
        inputHouseRef={inputHouseRef}
        inputPrivateRef={inputPrivateRef}
      ></ContactInformation>
      <SubTitle>Sobre nosotros(información):</SubTitle>
      <AboutUsInformation
        about_us={editApp.about_us}
        inputsData={inputsData}
        setInputsData={setInputsData} />
      <FlexContainer>
        <Button onClick={handleSaveData}>Guardar</Button>
      </FlexContainer>
    </div>
  );
};