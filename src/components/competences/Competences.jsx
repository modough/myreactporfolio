import "./competences.css";
import { ThemeContext } from "../context/context";
import { useContext } from "react";
import { Fragment } from "react";
import waveWhite from "../../assets/img/wave-white-bottom1.png";

const Competences = () => {
  const Theme = useContext(ThemeContext);
  const DarkMode = Theme.state.darkMode;

  return (
    <Fragment>
      <div className="bg-img-div">
        <img
          src={waveWhite}
          alt=""
          className="wave-top"
          style={{ display: DarkMode ? "none" : "" }}
        />
      </div>
      <div
        className="competences-container"
        id="competences"
        style={{ background: DarkMode ? "rgb(47,48,66)" : "" }}
      >
        <div className="competences-top">
          <span style={{ color: DarkMode ? "grey" : "" }}>Mes compétences</span>
          <span style={{ color: DarkMode ? "grey" : "" }}>
            Full-stack dans le dev, j'ai des compétences en UX, UI,
            réfèrencement et Seo
          </span>
          <div
            className="competences-line"
            style={{ borderBottom: DarkMode ? "3px solid grey" : "" }}
          >
            <div className="competences-line-div"></div>
          </div>
        </div>
        <div className="competences-bottom">
          <div className="competences-img" alt=""></div>
          <div className="competences-details">
            <div
              className="competences-details-title"
              style={{ color: DarkMode ? "grey" : "" }}
            >
              Voici certaines de mes compétences techniques que je mettrais à
              disposition !
            </div>
            <ol className="competences-lists">
              <li className="list1" style={{ color: DarkMode ? "grey" : "" }}>
                Dévelopeur:<br></br> Html, Css, Javascript, NodeJs, MongoDb,
                Express, React ...
              </li>
              <li className="list2" style={{ color: DarkMode ? "grey" : "" }}>
                Designer:<br></br> Adobe Illustrator, Photoshop, Sketch, Figma
              </li>
              <li className="list3" style={{ color: DarkMode ? "grey" : "" }}>
                Seo:<br></br> Google Analytics, SEMrush, Gephi
              </li>
            </ol>
            <a href="Mouhamed Mbaye (1).pdf" download="Mouhamed Mbaye (1).pdf">
              <button
                type="button"
                className="button"
                style={{
                  color: DarkMode ? "grey" : "",
                  border: DarkMode ? "grey" : "",
                  background: DarkMode ? "black" : "",
                }}
              >
                Télécharger CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Competences;
