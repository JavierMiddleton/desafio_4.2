import "./App.css";
import Registro from "./components/Registro";
import React, { useState } from "react";

function App() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  return (
    <div className="main-container">
      <Registro
        error={error}
        success={success}
        setError={setError}
        setSuccess={setSuccess}
      />
    </div>
  );
}

export default App;
