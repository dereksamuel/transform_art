/* eslint-disable no-undef */
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { changeRememberMe } from "../../features/login/loginSlice.js";
import { NavBar } from "../global_Styles.js";
import firebase from "../../helpers/firebase";

export const Footer = ({ currentUser }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = (event) => {
    event.preventDefault();
  
    firebase.auth().signOut();
    sessionStorage.removeItem("rememberMe");
    dispatch(changeRememberMe(false));
    history.push("/login");
  };

  return (
    <NavBar>
      <div className="NavBar__container">
        <p className="NavBar__text">@Copyright 2020 terminos y condiciones reservados - TransformART</p>
        <ul className="Links">
          <li className="Links__item">
            <Link to={currentUser ? "/edit_app" : "/login"}>
              { currentUser ? "Editar app" : "Inicar sesión" }
            </Link>
          </li>
          <li className="Links__item">
            {
              currentUser && <a href="/" onClick={handleLogout}>Cerrar Sesión</a>
            }
          </li>
          <li className="Links__item">
            <Link to="/about_us">Sobre nosotros</Link>
          </li>
        </ul>
      </div>
    </NavBar>
  );
};
