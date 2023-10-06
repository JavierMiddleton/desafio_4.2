import React from "react";
import SocialButton from "./SocialButton";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Formulario from "./Formulario";
import Alert from "./Alert";

function Registro() {
  return (
    <div className="register-container">
      <h1 className="m2">Crea tu cuenta</h1>
      <div className="w-100 d-flex justify-content-center gap-3">
        <SocialButton iconClass={faFacebook} />
        <SocialButton iconClass={faGithub} />
        <SocialButton iconClass={faLinkedin} />
      </div>
      <p>Usa tu email para registrarte</p>
      <Formulario />
      <Alert colorAlert={"alert-danger"} messageAlert={"Prueba de alert"} />
    </div>
  );
}

export default Registro;
