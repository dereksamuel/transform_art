import { AboutUsInformation } from "../components/AboutUsInformation/index.jsx";
import { Contact_Information as ContactInformation } from "../components/Contact_Information/index.jsx";
import { Products } from "../components/Products/index.jsx";
import { SubTitle } from "../components/Title/index.jsx";
import { Title } from "../components/Title/index.jsx";
import { Button } from "../components/Button/index.jsx";
import { FlexContainer } from "../components/Button/index.js";

import { useEdit } from "../hooks/useEdit.js";

export const EditApp = () => {
  const editApp = useEdit();

  return (
    <div className="EditApp">
      <Title>Cambiar información</Title>
      <SubTitle>Productos:</SubTitle>
      <Products products={editApp.products}></Products>
      <SubTitle>Información de contacto:</SubTitle>
      <ContactInformation contact_information={editApp.contact_information}></ContactInformation>
      <SubTitle>Sobre nosotros(información):</SubTitle>
      <AboutUsInformation about_us={editApp.about_us} />
      <FlexContainer>
        <Button>Guardar</Button>
      </FlexContainer>
    </div>
  );
};