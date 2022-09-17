import Toggle from "../toggle/Toggle";
import { ThemeContext } from "../context/context";
import { useContext } from "react";
import "./navbar.css";
import { Link } from "react-scroll";

import { Fragment } from "react";

const Navbar = () => {
  const Theme = useContext(ThemeContext);
  const DarkMode = Theme.state.darkMode;
  return (
    <Fragment>
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <div
            className="navbar-name"
            style={{ color: DarkMode ? "grey" : "" }}
          >
            Mouhamed
          </div>
          <Toggle />
        </div>
        <div className="navbar-right">
          <div className="navbar-list">
            <ul style={{ listStyleType: "none" }}>
              <Link activeClass="active" to="intro" spy={true} smooth={true}>
                <li
                  style={{ color: DarkMode ? "grey" : "" }}
                  className="navbar-list-li"
                >
                  Accueil
                </li>
              </Link>
              <Link
                activeClass="active"
                to="competences"
                spy={true}
                smooth={true}
              >
                <li
                  style={{ color: DarkMode ? "grey" : "" }}
                  className="navbar-list-li"
                >
                  Compétences
                </li>
              </Link>
              <Link activeClass="active" to="porfolio" spy={true} smooth={true}>
                <li
                  style={{ color: DarkMode ? "grey" : "" }}
                  className="navbar-list-li"
                >
                  Porfolio
                </li>
              </Link>
            </ul>
          </div>
          <Link activeClass="active" to="contact" spy={true} smooth={true}>
            <button
              type="button"
              className="btn"
              style={{
                color: DarkMode ? "grey" : "",
                background: DarkMode ? "black" : "",
              }}
            >
              Contactez Moi
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
