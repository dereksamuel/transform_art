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
import { useDeleteDB } from "../hooks/useDeleteDB.js";
import { Alert } from "../components/Alert/index.jsx";

export const EditApp = () => {
  const editApp = useEdit();
  const [inputsData, setInputsData] = useState([]);
  const [deleteInputsData, setDeleteInputsData] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const inputHouseRef = useRef(null);
  const inputPrivateRef = useRef();

  const handleSaveData = async () => {
    const action = !editApp.about_us.length ? useCreateDB : useEditDB;
    const actionCreate = useCreateDB;
    const update = useEditDB;
    const deleteDB = useDeleteDB;
    const ID = editApp.contact_information[0].id;
    const saveData = {
      inputsData: inputsData.map((inputData, index) => ({
        ...inputData,
        createdDk: false,
        INDEX: index,
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
      if (deleteInputsData.length) {
        deleteInputsData.map(async (deleteInputData) => {
          await deleteDB({
            collection: "about_us",
            docId: deleteInputData.id,
          })?.catch((error) => {
            console.error("[fallo al borrar]: ", error);
          });
        });
        setDeleteInputsData([]);
      }
      saveData.inputsData.map(async (inputData) => {
        setDeleteInputsData([]);
        if (!editApp.about_us[inputData.INDEX]) {
          await actionCreate({
            collection: "about_us",
            data: inputData,
          })?.catch((error) => {
            console.error(error);
            setAlertMessage({
              text: "No se ha creado con éxito",
              theme: "bad",
              title: "Error:",
            });
          });

          setAlertMessage({
            text: "Se ha creado con éxito",
            theme: "good",
            title: "Éxito:",
          });
          return "";
        }
        await action({
          collection: "about_us",
          docId: inputData.id,
          data: inputData,
        })?.catch((error) => {
          console.error(error);
          setAlertMessage({
            text: "No se ha guardado con éxito",
            theme: "bad",
            title: "Error:",
          });
        });
        setAlertMessage({
          text: "Se ha guardado con éxito",
          theme: "good",
          title: "Éxito:",
        });
      });
    }
  };

  return (
    <div className="EditApp">
      {
        alertMessage && <Alert text={alertMessage.text} deleteAlert={() => setAlertMessage(false)} theme={alertMessage.theme} title={alertMessage.title} />
      }
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
        //FIXME: corregir que se guarda y me desordena los indices
        deleteInputsData={deleteInputsData}
        setDeleteInputsData={setDeleteInputsData}
        about_us={editApp.about_us}
        inputsData={inputsData}
        products={editApp.products}
        setInputsData={setInputsData} />
      <FlexContainer>
        <Button onClick={handleSaveData}>Guardar</Button>
      </FlexContainer>
    </div>
  );
};