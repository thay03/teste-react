import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/Detalhamento.css"


function DetalhamentoCaso() {
  const { id } = useParams();

  const caso = {
    nome: "Caso 1",
    responsavel: "Dr. Silva",
    status: "Em andamento",
    localizacao: "Rua X, 123",
    descricao: "Descrição detalhada do caso...",
  };

  return (

    <div className="dashboard-container">
          <Sidebar /> {/* Adicionando o sidebar */}

    <div className="detalhamento-container">
      <h2>Detalhamento do Caso: {caso.nome}</h2>
      <p><strong>Responsável:</strong> {caso.responsavel}</p>
      <p><strong>Status:</strong> {caso.status}</p>
      <p><strong>Localização:</strong> {caso.localizacao}</p>
      <p><strong>Descrição:</strong> {caso.descricao}</p>
      <button>Baixar Anexos</button>
    </div>
  </div>
  );
}

export default DetalhamentoCaso;
