import "./intro.css";
import Profile from "../../assets/img/profilePhoto.jpg";
import { Fragment } from "react";

import { ThemeContext } from "../context/context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  const Theme = useContext(ThemeContext);
  const DarkMode = Theme.state.darkMode;
  return (
    <Fragment>
      <div
        className="intro"
        id="intro"
        style={{ background: DarkMode ? "rgb(47,48,66)" : "" }}
      >
        <div className="intro-left">
          <div className="intro-name">
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ color: DarkMode ? "grey" : "" }}
            >
              Salut ! Moi c'est{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              Mouhamed Mbaye.{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              style={{ color: DarkMode ? "grey" : "" }}
            >
              Je suis un Curieux, un Motivé, un MERN Éxperimenté, un MongoDb
              Passionné, un Étudiant en ReactJs, en gros un Full Stack Dev !
            </motion.span>
          </div>
          <Link activeClass="active" to="contact" spy={true} smooth={true}>
            <button
              type="button"
              className="intro-btn"
              style={{
                color: DarkMode ? "grey" : "",
                border: DarkMode ? "grey" : "",
                background: DarkMode ? "black" : "",
              }}
            >
              Recruter Moi !
            </button>
          </Link>
          <div className="intro-social">
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
            <a href="https://www.youtube.com/">
              <i
                className="fa fa-youtube-square"
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
        </div>
        <div className="intro-right">
          <div className="intro-pic">
            <img src={Profile} alt="" className="profilePicture" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Intro;
