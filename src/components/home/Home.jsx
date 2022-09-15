import Intro from "../intro/Intro";
import "./home.css";
import Navbar from "../navbar/Navbar.jsx";
import Competences from "../competences/Competences";

import Experience from "../experience/Experience";
import Porfolio from "../porfolio/Porfolio";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import { ThemeContext } from "../context/context";
import { useContext } from "react";

const Home = () => {
  const Theme = useContext(ThemeContext);
  const DarkMode = Theme.state.darkMode;
  return (
    <div
      className="home"
      style={{
        background: DarkMode ? "black" : "",
        color: DarkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Competences />
      <Experience />
      <Porfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
