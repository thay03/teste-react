import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DetalhamentoCaso from "./pages/DetalhamentoCaso";
import GerarNovoCaso from "./pages/GerarNovoCaso";
import GerarLaudo from "./pages/GerarLaudo";
import BancoOdontologico from "./pages/BancoOdontologico";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/detalhamento/:id" element={<DetalhamentoCaso />} />
            <Route path="/gerar-novo-caso" element={<GerarNovoCaso />} />
            <Route path="/gerar-laudo/:id" element={<GerarLaudo />} />
            <Route path="/banco-odontologico" element={<BancoOdontologico />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;