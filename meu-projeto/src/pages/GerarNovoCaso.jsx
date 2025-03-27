import React, { useState } from "react";

function GerarNovoCaso() {
  const [responsavel, setResponsavel] = useState("");
  const [data, setData] = useState("");
  const [local, setLocal] = useState("");
  const [informacoes, setInformacoes] = useState("");
  const [classificacao, setClassificacao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Novo caso criado:", { responsavel, data, local, informacoes, classificacao });
  };

  return (
    <div className="gerar-caso-container">
      <form onSubmit={handleSubmit}>
        <label>
          Responsável:
          <input
            type="text"
            value={responsavel}
            onChange={(e) => setResponsavel(e.target.value)}
            required
          />
        </label>
        <label>
          Data:
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
        </label>
        <label>
          Local:
          <input
            type="text"
            value={local}
            onChange={(e) => setLocal(e.target.value)}
            required
          />
        </label>
        <label>
          Informações:
          <textarea
            value={informacoes}
            onChange={(e) => setInformacoes(e.target.value)}
            required
          />
        </label>
        <label>
          Classificação:
          <input
            type="text"
            value={classificacao}
            onChange={(e) => setClassificacao(e.target.value)}
            required
          />
        </label>
        <button type="submit">Criar Caso</button>
      </form>
    </div>
  );
}

export default GerarNovoCaso;
