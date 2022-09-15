import "./experience.css";
import { ThemeContext } from "../context/context";
import { useContext } from "react";

const Experience = () => {
  const Theme = useContext(ThemeContext);
  const DarkMode = Theme.state.darkMode;
  return (
    <div
      className="experience"
      style={{ background: DarkMode ? "rgb(47,48,66)" : "" }}
    >
      <div className="experience-top"></div>

      <div className="chart">
        <div className="experience-container">
          <div
            className="experience-chart"
            style={{ color: DarkMode ? "grey" : "" }}
          >
            +1{" "}
          </div>
          <span style={{ color: DarkMode ? "grey" : "" }}>ans </span>
          <span>D'expérience</span>
        </div>
        <div className="experience-container">
          <div
            className="experience-chart"
            style={{
              color: DarkMode ? "grey" : "",
            }}
          >
            +10{" "}
          </div>
          <span style={{ color: DarkMode ? "grey" : "" }}>Projets </span>
          <span>achevés</span>
        </div>
        <div className="experience-container">
          <div
            className="experience-chart"
            style={{ color: DarkMode ? "grey" : "" }}
          >
            +2{" "}
          </div>
          <span style={{ color: DarkMode ? "grey" : "" }}>Compagnies</span>
          <span>travaillées</span>
        </div>
      </div>
      <div className="experience-bottom"></div>
    </div>
  );
};

export default Experience;
