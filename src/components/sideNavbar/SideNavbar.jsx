import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Fragment } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../context/context";
import { useContext } from "react";
import "./sideNavbar.css";
import Toggle from "../toggle/Toggle";

const SideNavbar = () => {
  const Theme = useContext(ThemeContext);
  const DarkMode = Theme.state.darkMode;
  const [sidebar, setSidebar] = useState(false);
  const showSideNavbar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="sidenavbar">
      <div className="sidenavbar-bars">
        <Link to="#" className="menu">
          <FontAwesomeIcon
            icon={faBars}
            className="bars"
            style={{ color: DarkMode ? "grey" : "" }}
            onClick={showSideNavbar}
          />
        </Link>
        <Toggle />
      </div>
      <nav className={sidebar ? "sidebar-menu active" : "sidebar-menu"}>
        <ul className="sidebar-menu-elm">
          <Link activeClass="active" to="intro" spy={true} smooth={true}>
            <li
              style={{ color: DarkMode ? "grey" : "" }}
              onClick={showSideNavbar}
            >
              Accueil
            </li>
          </Link>
          <Link activeClass="active" to="competences" spy={true} smooth={true}>
            <li
              style={{ color: DarkMode ? "grey" : "" }}
              onClick={showSideNavbar}
            >
              Compétences
            </li>
          </Link>
          <Link activeClass="active" to="porfolio" spy={true} smooth={true}>
            <li
              style={{ color: DarkMode ? "grey" : "" }}
              onClick={showSideNavbar}
            >
              Porfolio
            </li>
          </Link>
          <Link activeClass="active" to="contact" spy={true} smooth={true}>
            <li
              style={{ color: DarkMode ? "grey" : "" }}
              onClick={showSideNavbar}
            >
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default SideNavbar;
