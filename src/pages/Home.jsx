import { Carrousel } from "../components/Carrousel/index.jsx"
import { HomeContent } from "../components/HomeContent/index.jsx";
import { useEdit } from "../hooks/useEdit";

export const Home = () => {
  const editApp = useEdit();

  return <section className="Home">
    <Carrousel products={editApp.products}></Carrousel>
    <HomeContent contact_information={editApp.contact_information} />
  </section>;
};
