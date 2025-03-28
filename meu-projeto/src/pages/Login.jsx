import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Login.css"
import icon from "../assets/icon.webp"

function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario && senha) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">
       <div className="icon">
        <img src={icon} alt="icon-app" />
        </div>
      <form onSubmit={handleSubmit} className="login-from">
       
        <label>
          Usuário:
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
            size="30"
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
