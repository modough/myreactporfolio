import "./porfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import waveTop from "../../assets/img/wave-white-bottom.png";
import Projet1 from "../../assets/img/projet1.png";
import Projet2 from "../../assets/img/projet2.png";
import Projet3 from "../../assets/img/projet3.png";
import Projet4 from "../../assets/img/projet4.png";
import Projet5 from "../../assets/img/projet5.png";
import Projet6 from "../../assets/img/projet6.png";
import Projet7 from "../../assets/img/projet7.png";
import { ThemeContext } from "../context/context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Porfolio = () => {
  const Theme = useContext(ThemeContext);
  const DarkMode = Theme.state.darkMode;
  return (
    <div
      className="porfolio"
      style={{ background: DarkMode ? "rgb(47,48,66)" : "" }}
    >
      <div className="porfolio-top">
        <span style={{ color: DarkMode ? "grey" : "" }}>Mon porfolio</span>
        <span style={{ color: DarkMode ? "grey" : "" }}>
          Quelques-uns de mes projets
        </span>
        <div
          className="porfolio-line"
          style={{ borderBottom: DarkMode ? "3px solid grey" : "" }}
        >
          <div className="porfolio-line-div"></div>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        grabCursor={true}
        className="porfolio-swipe"
      >
        <SwiperSlide className="porfolio-box">
          <motion.img
            src={Projet1}
            alt=""
            className="porfolio-box-img projet1"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </SwiperSlide>
        <SwiperSlide className="porfolio-box">
          <motion.img
            src={Projet2}
            alt=""
            className="porfolio-box-img projet2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </SwiperSlide>
        <SwiperSlide className="porfolio-box">
          <motion.img
            src={Projet3}
            alt=""
            className="porfolio-box-img projet3"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </SwiperSlide>
        <SwiperSlide className="porfolio-box">
          <motion.img
            src={Projet4}
            alt=""
            className="porfolio-box-img projet4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </SwiperSlide>
        <SwiperSlide className="porfolio-box">
          <motion.img
            src={Projet5}
            alt=""
            className="porfolio-box-img projet5"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </SwiperSlide>
        <SwiperSlide className="porfolio-box">
          <motion.img
            src={Projet6}
            alt=""
            className="porfolio-box-img projet6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </SwiperSlide>
        <SwiperSlide className="porfolio-box">
          <motion.img
            src={Projet7}
            alt=""
            className="porfolio-box-img projet7"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </SwiperSlide>
      </Swiper>
      <img
        src={waveTop}
        alt=""
        className="wave-white"
        style={{ display: DarkMode ? "none" : "" }}
      />
    </div>
  );
};

export default Porfolio;
