import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar"; 

function Cadastrar() {
    return (
         <div className="dashboard-container">
              <Sidebar/> {/* Adicionando o sidebar */}
              
              <div className="content-container">
                <h2> Cadastrar Novo Peritos </h2>
                <div className="cards-container">
                </div>
              </div>
            </div>
          );
  }
  
  export default Cadastrar; 