import React from "react";

function Footer(){
    return(
        <section id="footer">
            <div className="footer">
                <div className="footer-logo">
                    <img className="logo" src="./images/atlas-logo.png" alt="Atlas Logo"></img>
                </div>
                <div class="footer-col nav">
                    <h4>Navegación</h4>
                    <ul>
                    <li><a href="#/#inicio">Inicio</a></li>
                    <li><a href="#/#servicios">Servicios</a></li>
                    <li><a href="#/#beneficios">Beneficios</a></li>
                    <li><a href="#/vacantes">Vacantes</a></li>
                    </ul>
                </div>
                <div class="footer-col center">
                    <h4>Contáctanos</h4>
                    <p>Av Rosas 1570, La Micailita.</p>
                    <p>San Pedro Tlaquepaque, Jalisco.</p>
                    <p className="phone">contacto@atlasmyr.com</p>
                    <p className="phone">333 466 04 87</p>
                </div>
                <div className="footer-col schedule">
                    <h4>Horarios de Oficina</h4>
                    <p>Lunes a Viernes 8:30 am - 5:30 pm</p>
                    <p>Sábados y Domingos: <strong>CERRADO</strong></p>
                </div>
            </div>
            <div class="dev-credit">
                Website by <a href="https://thothcode.com" target="_blank" rel="noreferrer">Thoth Code</a>
            </div>
        </section>
    )
}

export default Footer;