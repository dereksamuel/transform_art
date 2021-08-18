/* eslint-disable jsx-a11y/anchor-has-content */
import { Title } from "../Title/index.jsx";
import Decorative1 from "../../assets/decorative_1.png";
import Decorative2 from "../../assets/decorative_2.png";
import Decorative3 from "../../assets/decorative_3.png";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdPhone } from "react-icons/md";
import { HomeComponent } from "./index.js";

export const HomeContent = ({ contact_information }) => {
  return (
    <HomeComponent>
      <div className="content">
        <article>
          <Title>¡Contáctanos!</Title>
          <p>Bienvenid@ a esta impresionante galería de arte
            nosotros nos aseguramos de que estas
            impresionantes obras de arte las tengas hoy en
            tus manos con un increíble relieve especial, nos
            enfocamos en CUADROS DECORATIVOS,
            ¿te llamó la atención algo? contáctanos en
            estas aplicaciones:</p>
            <a className="whatsapplink" href={`https://wa.me/1${contact_information[0]?.phone_number_personal}`} target="_blank" rel="noreferrer">
              <AiOutlineWhatsApp className="whatsapp" />
              WhatsApp: {
                contact_information[0]?.phone_number_personal
              }
            </a>
            <a className="homelink">
              <MdPhone className="homeAll" />
              Casa: {
                contact_information[0]?.phone_number_house
              }
            </a>
        </article>
        <figure>
          <img src={Decorative1} alt="Decorative1" />
        </figure>
      </div>
      <div className="content twoDecorative">
        <figure className="Decorative2">
          <img src={Decorative2} alt="Decorative2" />
        </figure>
        <article>
          <Title>Busca tus productos favoritos</Title>
          <p>Puedes ver más accediendo a tus tipos de cuadro
            favoritos si aún no tienes no dudes en buscarlos,
            también puedes crear tu propio arte de una forma
            impresionante, anímate ¿Qué esperas?</p>
          <p>Puedes buscar con Google lo siguiente y lo embelleceremos:</p>
          <a className="link" href="https://www.google.com/search?q=pinturas&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi7irSB9LjyAhVjSzABHTUFBD0Q_AUoAXoECAIQAw" target="_blank" rel="noreferrer">
            Pinturas 🎨
          </a>
          <a className="link" href="https://www.google.com/search?q=paisajes&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi7irSB9LjyAhVjSzABHTUFBD0Q_AUoAXoECAIQAw" target="_blank" rel="noreferrer">
            Paisajes 🌴🌴
          </a>
          <a className="link" href="https://www.google.com/search?q=abstractos&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi7irSB9LjyAhVjSzABHTUFBD0Q_AUoAXoECAIQAw" target="_blank" rel="noreferrer">
            Abstractos ✨
          </a>
          <a className="link" href="https://www.google.com/search?q=Pintores&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi7irSB9LjyAhVjSzABHTUFBD0Q_AUoAXoECAIQAw" target="_blank" rel="noreferrer">
            Pintores 👨
          </a>
        </article>
      </div>
    </HomeComponent>
  );
};
