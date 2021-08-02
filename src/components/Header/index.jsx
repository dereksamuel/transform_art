import Logo from "../Logo";
import { Input } from "../Input";
import { Link } from "react-router-dom";
import { MdShoppingCart, MdMenu, MdClose } from "react-icons/md";
import { NavBar } from "../global_Styles";

export const Header = () => {
  const toggleMenu = () => {
    const $linksHeader = document.querySelector("#links_header");
    $linksHeader.classList.toggle("Links_Header");
    $linksHeader.classList.toggle("toggleMenu");
  };

  return (
    <NavBar>
      <div className="NavBar__container">
        <Link to="/" className="Link__image"><Logo className="NavBar__image" /></Link>
        <div className="inputMdBefore">
          <Input
            inputProps={{
              type: "search",
              placeholder: "Busca aquí tu cuadro",
            }}
          />
        </div>
        <span className="Links__menu" onClick={toggleMenu}><MdMenu className="Links__item--icon" /></span>
        <ul className="Links Links_Header" id="links_header">
          <li className="cancelButton"><MdClose onClick={toggleMenu} /></li>
          <li className="Links__item input_after">
            <Input
              inputProps={{
                type: "search",
                placeholder: "Busca aquí tu cuadro",
              }}
            />
          </li>
          <li className="Links__item"><Link to="/pictures">Cuadros</Link></li>
          <li className="Links__item"><Link to="/create_my_picture">Cree su obra de arte</Link></li>
          <li className="Links__item">
            <Link to="/cart" className="container__item">
              <MdShoppingCart className="Links__item--icon" />
              <p className="badge badge_orange">1</p>
            </Link>
          </li>
        </ul>
      </div>
    </NavBar>
  );
};