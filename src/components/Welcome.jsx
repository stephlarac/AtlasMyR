import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Welcome(){

    return(
        <div className="welcome-section">
            <img className="welcome-img" src="./images/chatarrera.jpg" alt="Chatarrera"></img>
            <h1 className="font-effect-shadow-multiple">SOMOS UNA RECICLADORA QUE SE AJUSTA A TUS NECESIDADES</h1>
            <a className="conoce-btn" href="#servicios">Conoce más    <ArrowForwardIosIcon /> </a>
        </div>
    )
}

export default Welcome;