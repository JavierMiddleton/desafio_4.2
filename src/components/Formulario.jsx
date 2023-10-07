import { useState } from "react";

const Formulario = ({ errorAlert, successAlert }) => {
  //useState consts
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  // Regular Expression valid email pattern
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );

  // Validate Input function
  const validateInput = (e) => {
    e.preventDefault();
    //Validation if
    if (nombre === "" || email === "" || pass === "" || confirmPass === "") {
      errorAlert("Rellena todos los campos.");
      successAlert("");
    } else if (pass !== confirmPass) {
      errorAlert("Las contraseñas no coinciden.");
      successAlert("");
      //Reg Ex pattern test. If not correct, sends True to run next block
    } else if (!validEmail.test(email)) {
      errorAlert("Ingresa un email válido.");
      successAlert("");
    } else {
      successAlert("¡Logrado!");
      errorAlert("");
    }
  };

  return (
    <>
      <form className="form-css" onSubmit={validateInput}>
        <input
          type="text"
          placeholder="Nombre"
          name="username"
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="tuemail@ejemplo.com"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contraseña"
          name="pass"
          onChange={(e) => setPass(e.target.value)}
        />
        <input
          type="text"
          placeholder="Confirma tu contraseña"
          name="confirm-pass"
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        <button className="btn btn-success mt-3" type="submit">
          Registrarse
        </button>
      </form>
    </>
  );
};
export default Formulario;
