import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar"; 
import "../styles/GerarLaudo.css"

function GerarLaudo() {
  const { id } = useParams();

  const handleExportPDF = () => {
    console.log("Exportando PDF do laudo...");
  };

  return (

    <div className="dashboard-container">
          <Sidebar /> {/* Adicionando o sidebar */}

    <div className="gerar-laudo-container">
      <h2>Geração de Laudo para Caso {id}</h2>
      <form>
        <label>Responsável</label>
        <input type="text" />
        <label>Nome do Caso</label>
        <input type="text" />
        <label>Descrição</label>
        <textarea />
        <label>Informações Adicionais</label>
        <textarea />
        <label>Assinatura Digital</label>
        <input type="file" />
        <button type="button" onClick={handleExportPDF}>
          Exportar em PDF
        </button>
      </form>
    </div>
  </div>
  );
}

export default GerarLaudo;
