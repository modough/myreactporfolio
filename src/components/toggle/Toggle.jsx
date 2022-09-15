import "./toggle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../context/context";
import { useContext } from "react";

const Toggle = () => {
  const Theme = useContext(ThemeContext);
  const DarkMode = Theme.state.darkMode;

  const handleToggle = () => {
    Theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle-container">
      <FontAwesomeIcon icon={faSun} />
      <FontAwesomeIcon icon={faMoon} />
      <div
        className="toggle-btn"
        onClick={handleToggle}
        style={DarkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
