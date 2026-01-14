import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Welcome(){

    return(
        <section id="inicio">
        <div className="welcome-section">
            <img className="welcome-img" src="./images/grua4.png" alt="Chatarrera"></img> 
            <div className="left-sec">
                <h1 className="font-effect-shadow-multiple">SOMOS UNA RECICLADORA QUE SE AJUSTA A TUS NECESIDADES</h1>
                 <p>Estamos ubicados en Tlaquepaque, Jalisco.</p>
                <a className="conoce-btn" href="#servicios">Conoce más    <ArrowForwardIosIcon /> </a>
            </div>  
            <div className="right-sec">
                <div class="gray-shape"></div>
                <img className="welcome-deco-img" src="./images/scrap-met2.png" alt="Chatarrera"></img>
            </div>
        </div>
        </section>
    )
}

export default Welcome;