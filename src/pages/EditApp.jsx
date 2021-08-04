import { Contact_Information } from "../components/Contact_Information/index.jsx";
import { Products } from "../components/Products/index.jsx"
import { SubTitle } from "../components/Title/index.jsx"
import { Title } from "../components/Title/index.jsx"
import { useEdit } from "../hooks/useEdit.js";

export const EditApp = () => {
  const editApp = useEdit();

  return (
    <div className="EditApp">
      <Title>Cambiar información</Title>
      <SubTitle>Productos:</SubTitle>
      <Products products={editApp.products}></Products>
      <SubTitle>Información de contacto:</SubTitle>
      <Contact_Information></Contact_Information>
      <SubTitle>Sobre nosotros(información):</SubTitle>
    </div>
  );
};