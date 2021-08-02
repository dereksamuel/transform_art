import { Link } from "react-router-dom";
import { NavBar } from "../global_Styles.js";

export const Footer = () => {
  return (
    <NavBar>
      <div className="NavBar__container">
        <p className="NavBar__text">@Copyright 2020 terminos y condiciones reservados - TransformART</p>
        <ul className="Links">
          <li className="Links__item">
            <Link to="/login">Inicar sesión</Link>
          </li>
          <li className="Links__item">
            <Link to="/about_us">Sobre nosotros</Link>
          </li>
        </ul>
      </div>
    </NavBar>
  );
};