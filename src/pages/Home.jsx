import { Carrousel } from "../components/Carrousel/index.jsx"
import { HomeContent } from "../components/HomeContent/index.jsx";

export const Home = ({ editApp }) => {
  return <section className="Home">
    <Carrousel products={editApp.products}></Carrousel>
    <HomeContent contact_information={editApp.contact_information} />
  </section>;
};
