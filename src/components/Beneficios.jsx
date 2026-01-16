import React from "react";
import BenefitComponent from "./BenefitComponent";
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import PaidIcon from '@mui/icons-material/Paid';
import ScaleIcon from '@mui/icons-material/Scale';

function Beneficios(){

    //using circle menu
    
    return(
        <section id="beneficios">
            <img className="background-img" src="./images/reciclaje-sinfondo.png" alt="Chatarrera"></img> 
            <div className="benefit-text">
                <h2>Beneficios de trabajar con nosotros</h2>
            </div>
            <div className="beneficios-div">
                <BenefitComponent img="./images/kodiak.jpg" Icon={ScaleIcon} text={<> Básculas Calibradas <br />
                                                                                    (Camionera y Plataforma)</> }/>
                <BenefitComponent img="./images/payment2.png" Icon={PaidIcon} text="Velocidad de pago"/>
                <BenefitComponent img="./images/workers2.png" Icon={SocialDistanceIcon} text="Agilidad en descargas"/>
            </div>
            <svg class="wave-bg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path d="M0,96L120,112C240,128,480,160,720,165.3C960,171,1200,149,1320,138.7L1440,128L1440,0L0,0Z"
                fill="#4a4a4a"/>
            </svg>
        </section>
    )
}

export default Beneficios;