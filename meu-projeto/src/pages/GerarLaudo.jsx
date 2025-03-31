import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import jsPDF from "jspdf";
import "../styles/GerarLaudo.css";

function GerarLaudo() {
  const { id } = useParams(); // Obtém o parâmetro de ID da URL

  const [dados, setDados] = useState({
    numeroCaso: "",
    data: "",
    perito: "",
    nomePaciente: "",
    nascimento: "",
    sexo: "",
    documento: "",
    filiacao: "",
    localExame: "",
    motivo: "",
    metodos: [],
    achados: "",
    diagnostico: "",
    grauCerteza: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setDados((prev) => ({
        ...prev,
        metodos: checked
          ? [...prev.metodos, value]
          : prev.metodos.filter((m) => m !== value),
      }));
    } else {
      setDados((prev) => ({ ...prev, [name]: value }));
    }
  };

  const gerarPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica");
    doc.setFontSize(16);
    doc.text("LAUDO ODONTOLÓGICO PERICIAL", 20, 20);

    doc.setFontSize(12);
    doc.text(`Número do Caso: ${dados.numeroCaso}`, 20, 30);
    doc.text(`Data: ${dados.data}`, 20, 40);
    doc.text(`Perito Responsável: ${dados.perito}`, 20, 50);

    doc.text("IDENTIFICAÇÃO DO EXAMINADO", 20, 70);
    doc.text(`Nome: ${dados.nomePaciente}`, 20, 80);
    doc.text(`Nascimento: ${dados.nascimento}`, 20, 90);
    doc.text(`Sexo: ${dados.sexo}`, 20, 100);
    doc.text(`Documento: ${dados.documento}`, 20, 110);
    doc.text(`Filiação: ${dados.filiacao}`, 20, 120);

    doc.text("INFORMAÇÃO DO EXAME", 20, 140);
    doc.text(`Local: ${dados.localExame}`, 20, 150);
    doc.text(`Motivo da Perícia: ${dados.motivo}`, 20, 160);
    doc.text(`Métodos Utilizados: ${dados.metodos.join(", ")}`, 20, 170);

    doc.text("ACHADOS PERICIAIS", 20, 190);
    doc.text(`Descrição: ${dados.achados}`, 20, 200);

    doc.text("CONCLUSÃO", 20, 220);
    doc.text(`Diagnóstico: ${dados.diagnostico}`, 20, 230);
    doc.text(`Grau de Certeza: ${dados.grauCerteza}`, 20, 240);

    doc.text("_______________________", 20, 260);
    doc.text(`${dados.perito}`, 20, 270);
    doc.text("Perito Responsável", 20, 280);

    doc.save("laudo_odontologico.pdf");
  };

  return (
    <div className="dashboard-container">
      <Sidebar /> {/* Adicionando o Sidebar */}

      <div className="gerar-laudo-container">
        <h2>Geração de Laudo para Caso {id}</h2>

        <label>Número do Caso:</label>
        <input
          type="text"
          name="numeroCaso"
          onChange={handleChange}
        ></input>

        <label>Data:</label>
        <input
          type="date"
          name="data"
          onChange={handleChange}
        ></input>

        <label>Perito Responsável:</label>
        <input
          type="text"
          name="perito"
          onChange={handleChange}
        ></input>

        <h3>Identificação do Examinado</h3>
        <label>Nome do Paciente:</label>
        <input
          type="text"
          name="nomePaciente"
          onChange={handleChange}
        ></input>

        <label>Data de Nascimento:</label>
        <input
          type="text"
          name="nascimento"
          onChange={handleChange}
        ></input>

        <label>Sexo:</label>
        <select name="sexo" onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>

        <label>Documento:</label>
        <input
          type="text"
          name="documento"
          onChange={handleChange}
        ></input>

        <label>Filiação:</label>
        <input
          type="text"
          name="filiacao"
          onChange={handleChange}
        ></input>

        <h3>Informações do Exame</h3>
        <label>Local:</label>
        <input
          type="text"
          name="localExame"
          onChange={handleChange}
        ></input>

        <label>Motivos da Perícia:</label>
        <input
          type="text"
          name="motivo"
          onChange={handleChange}
        ></input>

        <button onClick={gerarPDF}>Gerar PDF</button>
      </div>
    </div>
  );
}

export default GerarLaudo;
