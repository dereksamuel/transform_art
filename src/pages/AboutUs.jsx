import { AboutUsContent } from "../components/AboutUsContent/index.jsx";
import { Title } from "../components/Title/index.jsx";

export const AboutUs = ({ editApp }) => {
  return (
    <div className="AboutUs">
      <Title>Sobre nosotros</Title>
      <AboutUsContent about_us={editApp.about_us}></AboutUsContent>
    </div>
  );
};
