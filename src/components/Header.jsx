import React from "react";
import { useState } from "react";

function Header(){

    const [open, setOpen] = useState(false);
    return(
        <div className="header">
            <img className="logo" src="./images/atlas-logo.png" alt="Atlas Logo"></img>
             <button class="burger" onClick={() => setOpen(!open)} >☰</button>
            <nav id="navbar">
                <ul className={`nav-links ${open ? "active" : ""}`}>
                    <li><a className="nav-link" href="#/#inicio">Inicio</a></li>
                    <li><a className="nav-link" href="#/#servicios">Servicios</a></li>
                    <li><a className="nav-link" href="#/#beneficios">Beneficios</a></li>
                    <li><a className="nav-link" href="#/#contacto">Contacto</a></li>
                    <li><a className="nav-link" href="#/vacantes">Vacantes</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;