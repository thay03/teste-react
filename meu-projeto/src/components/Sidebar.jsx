import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/banco-odontologico">Banco Odontológico</Link></li>
        <li><Link to="/gerar-novo-caso">Gerar Novo Caso</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
