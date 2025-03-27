import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const casos = [
    { id: 1, nome: "Caso 1", responsavel: "Dr. Silva" },
    { id: 2, nome: "Caso 2", responsavel: "Dr. Souza" },
  ];

  return (
    <div className="dashboard-container">
      <h2>Casos Odontológicos Periciais</h2>
      <div className="cards-container">
        {casos.map((caso) => (
          <div key={caso.id} className="card">
            <h3>{caso.nome}</h3>
            <p>Responsável: {caso.responsavel}</p>
            <Link to={`/detalhamento/${caso.id}`}>Ver detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
