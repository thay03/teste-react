import React from "react";
import { Link } from "react-router-dom";
import "../components/Sidebar.css"
import icon from "../assets/icon.webp"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="icon">
              <img src={icon} alt="icon-app" />
         </div>
      <ul>
        <h5>Geral</h5>
        <li><Link to=""><i class="fa-solid fa-house"></i><span></span></Link></li>
        <li><Link to="/cadastrar"><i class="fa-regular fa-address-card"></i><span>Cadastrar</span></Link></li>
        <li><Link to=""><i class="fa-solid fa-plus"></i><span></span></Link></li>
        <li><Link to=""><i class="fa-solid fa-file-invoice"></i><span></span></Link></li>
        <li><Link to="/"><i class="fa-solid fa-arrow-right-from-bracket"></i><span>Sair</span></Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
