import "./contact.css";
import Mail from "../../assets/img/mailz.jpeg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import waveBottom from "../../assets/img/wave-white-bottom1.png";
import { useState } from "react";
import { ThemeContext } from "../context/context";
import { useContext } from "react";
import { Fragment } from "react";

const Contact = () => {
  const Theme = useContext(ThemeContext);
  const DarkMode = Theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wyoxk22",
        "template_ylw63mh",
        form.current,
        "51LGWYh2B1Hv9NnoJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },

        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Fragment>
      <div className="img-div">
        <img
          src={waveBottom}
          alt=""
          className="wave-bottom"
          style={{ display: DarkMode ? "none" : "" }}
        />
      </div>
      <div
        className="contact"
        id="contact"
        style={{ background: DarkMode ? "rgb(47,48,66)" : "" }}
      >
        <div className="contact-top">
          <span style={{ color: DarkMode ? "grey" : "" }}>Contact</span>
          <span style={{ color: DarkMode ? "grey" : "" }}>
            En tant que recruteur, ce formulaire vous est exclusivement dédié.
            Je vous réponds dés réception de votre mail.
          </span>
          <div
            className="contact-line"
            style={{ borderBottom: DarkMode ? "3px solid grey" : "" }}
          >
            <div className="contact-line-div"></div>
          </div>
        </div>
        <div className="contact-bottom">
          <div className="contact-bottom-box">
            <div className="box-left">
              <img
                alt=""
                src={Mail}
                style={{ objectFit: "cover", opacity: ".5" }}
              />
            </div>
            <form className="box-right" ref={form} onSubmit={sendEmail}>
              <label htmlFor="name" style={{ color: DarkMode ? "grey" : "" }}>
                Nom
              </label>
              <input type="text" name="name" className="name" required />
              <label htmlFor="email" style={{ color: DarkMode ? "grey" : "" }}>
                Email
              </label>
              <input type="email" name="email" className="email" required />
              <label
                htmlFor="message"
                style={{ color: DarkMode ? "grey" : "" }}
              >
                Message
              </label>
              <textarea name="message" required />
              <button
                type="submit"
                className=""
                style={{
                  color: DarkMode ? "grey" : "",
                  border: DarkMode ? "grey" : "",
                  background: DarkMode ? "black" : "",
                }}
              >
                Envoyer
              </button>
              {done && (
                <span
                  className="confirmation-message"
                  style={{ color: DarkMode ? "grey" : "" }}
                >
                  Message envoyé ! Merci
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
