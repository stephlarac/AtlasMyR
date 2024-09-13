import React from "react";


function Servicios(){

    return(
        <section id="servicios">
            <img className="servicios-img" src="./images/grua.png" alt="Chatarrera"></img>
            <div className="info-servicios">
                <h2>Nuestros servicios</h2>
                <p>Proveemos un servicio integral y eficiente, contamos con contenedores, grúas, camiones y un equipo especializado listo para atenderte.</p>
                <p>Compramos chatarra <a className="met-link" href="#metales">ferrosa y no ferrosa</a>.</p>
                <p>Compra de chatarra de púbico en general proveniente de centros de acopio y otros sectores.</p>
                <p>Contamos con báscula camionera de 40 toneladas.</p>
            </div>
        </section>
    )
}

export default Servicios;