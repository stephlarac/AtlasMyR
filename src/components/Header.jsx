import React from "react";

function Header(){

    return(
        <div className="header">
            <img className="logo" src="./images/logo-fara.png" alt="Tutankamon"></img>
            <nav id="navbar">
                <ul>
                    <li><a className="nav-link" href="#servicios">SERVICIOS</a></li>
                    <li><a className="nav-link" href="#beneficios">BENEFICIOS</a></li>
                    <li><a className="nav-link" href="#contacto">CONTACTO</a></li>
                    <li><a className="nav-link" href="#vacantes">VACANTES</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;