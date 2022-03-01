import React, { useRef, useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "../../../stylesheets/work.css";
import emailjs from "@emailjs/browser";

const Work = (props) => {
  const { language } = props;
  const form = useRef();
  const reCaptcha = useRef(null);
  const [captchaIsValid, setCaptchaIsValid] = useState(false);
  const [formInputs, setFormInputs] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [divColor, setDivColor] = useState("transparent");
  const [alertMessage, setAlertMessage] = useState("");
  const [messageSent, setMessageSent] = useState("");
  const { fullName, email, phone, message } = formInputs;

  useEffect(() => {
    if (captchaIsValid) {
      setTimeout(() => {
        setCaptchaIsValid(false);
      }, 60000);
    }
  }, [captchaIsValid]);
  useEffect(() => {
    setDivColor("transparent");
    if (
      alertMessage != language
        ? "Your message has been succesfully sent"
        : "Tu mensaje ha sido enviado de forma exitosa" && alertMessage != ""
    ) {
      setDivColor("rgb(239, 109, 109)");
    }
    if (messageSent == true) {
      setDivColor("#B5FE83");
    }
  }, [alertMessage]);

  const handleInputChange = (e) => {
    setAlertMessage("");
    setMessageSent(false);
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptcha = () => {
    if (reCaptcha.current.getValue()) {
      setCaptchaIsValid(true);
    }
  };

  const validateForm = (e) => {
    e.preventDefault();
    if (!captchaIsValid) {
      setAlertMessage(
        language
          ? "Please complete the captcha"
          : "Por favor completa el captcha"
      );
    } else {
      if (
        fullName.trim() === "" ||
        !email.includes("@") ||
        email.trim() === "" ||
        message.trim() === ""
      ) {
        setAlertMessage(
          language
            ? "Please complete the obligatory inputs"
            : "Por favor completa los campos obligatorios"
        );
      } else {
        sendEmail(e);
      }
    }
  };

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_EMAIL_USER_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setAlertMessage(
      language
        ? "Your message has been succesfully sent"
        : "Tu mensaje ha sido enviado de forma exitosa"
    );
    setMessageSent(true);
    setFormInputs({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="contact-form">
      <h2 className="form-title">
        {language ? "Get in touch" : "Estemos en contacto"}
      </h2>
      <form onSubmit={validateForm} ref={form}>
        <input
          type="text"
          className="field"
          placeholder={language ? "Your Name" : "Tu Nombre"}
          name="fullName"
          onChange={handleInputChange}
          value={fullName}
        />
        <input
          type="email"
          className="field"
          placeholder={language ? "Your Email" : "Tu Email"}
          name="email"
          onChange={handleInputChange}
          value={email}
        />
        <input
          type="text"
          className="field"
          placeholder={language ? "Phone (optional)" : "Teléfono (opcional)"}
          name="phone"
          onChange={handleInputChange}
          value={phone}
        />
        <textarea
          placeholder={language ? "Message" : "Mensaje"}
          className="field form-textarea"
          name="message"
          onChange={handleInputChange}
        ></textarea>
        <div className="captcha">
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_CAPTCHA_ID}
            onChange={handleCaptcha}
            theme="dark"
            ref={reCaptcha}
          />
        </div>
        <button className="btn" type="submit">
          {language ? "Send" : "Enviar"}
        </button>
        <div className="result-row" style={{ "background-color": divColor }}>
          {alertMessage}
        </div>
      </form>
    </div>
  );
};

export default Work;
