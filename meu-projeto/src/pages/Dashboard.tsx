// src/pages/Dashboard.js
import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar"; 
import "../styles/Dashboard.css"

function Dashboard() {
  const casos = [
    { id: 1, nome: "Caso 1", responsavel: "Dr. Silva", status: " Em andamento" },
    { id: 2, nome: "Caso 2", responsavel: "Dr. Souza", status: "Resolvido" },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar /> {/* Adicionando o sidebar */}
      
      <div className="content-container">
        <h2>Casos em andamento</h2>
        <div className="cards-container">
          {casos.map((caso) => (
            <div key={caso.id} className="card">
              <h3>{caso.nome}</h3>
              <p>Responsável: {caso.responsavel}</p>
              <p>Status : {caso.status}</p>
              <Link to={`/detalhamento/${caso.id}`}>Ver detalhes</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
