import "./footer.css";
import { ThemeContext } from "../context/context";
import { useContext } from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const Theme = useContext(ThemeContext);
  const DarkMode = Theme.state.darkMode;
  return (
    <div className="footer">
      <div class="footer-top">
        <a href="https://www.facebook.com/profile.php?id=100076500051415">
          <i
            className="fa fa-facebook-square"
            style={{ color: DarkMode ? "grey" : "" }}
          ></i>
        </a>
        <a href="https://www.github.com">
          <i
            className="fa fa-github-square"
            style={{ color: DarkMode ? "grey" : "" }}
          ></i>
        </a>
        <a href="https://www.linkedin.com/in/mouhamed-mbaye-343012230/">
          <i
            className="fa fa-linkedin-square"
            style={{ color: DarkMode ? "grey" : "" }}
          ></i>
        </a>

        <a href="https://twitter.com/">
          <i
            className="fa fa-twitter-square"
            style={{ color: DarkMode ? "grey" : "" }}
          ></i>
        </a>
      </div>
      <div class="footer-bottom">
        <ul>
          <Link activeClass="active" to="intro" spy={true} smooth={true}>
            <li style={{ color: DarkMode ? "grey" : "" }}>Accueil</li>
          </Link>
          <Link activeClass="active" to="competences" spy={true} smooth={true}>
            <li style={{ color: DarkMode ? "grey" : "" }}>Compétences</li>
          </Link>
          <Link activeClass="active" to="porfolio" spy={true} smooth={true}>
            <li style={{ color: DarkMode ? "grey" : "" }}>Porfolio</li>
          </Link>
          <Link activeClass="active" to="contact" spy={true} smooth={true}>
            <li style={{ color: DarkMode ? "grey" : "" }}>Contact</li>
          </Link>
        </ul>
        <span className="copyright" style={{ color: DarkMode ? "grey" : "" }}>
          © Copyright 2022
        </span>
      </div>
    </div>
  );
};

export default Footer;
