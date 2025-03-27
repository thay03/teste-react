import React from "react";
import { useParams } from "react-router-dom";

function GerarLaudo() {
  const { id } = useParams();

  const handleExportPDF = () => {
    console.log("Exportando PDF do laudo...");
  };

  return (
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
  );
}

export default GerarLaudo;
