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
             <div className="wave">
                <svg class="wave-bg" viewBox="0 0 1440 170" preserveAspectRatio="none">
                    <path d="M0,0 
                    C460,220,980,220,1440,0
                    Z"
                    fill="#f5f5f5"/> 
                </svg>
            </div>
            <div className="benefit-text">
                <h2>Beneficios de trabajar con nosotros</h2>
            </div>
            <div className="beneficios-div">
                <BenefitComponent img="./images/kodiak.jpg" Icon={ScaleIcon} text={<> Básculas Calibradas <br />
                                                                                    (Camionera y Plataforma)</> }/>
                <BenefitComponent img="./images/payment2.png" Icon={PaidIcon} text="Velocidad de pago"/>
                <BenefitComponent img="./images/workers2.png" Icon={SocialDistanceIcon} text="Agilidad en descargas"/>
            </div>
        </section>
    )
}

export default Beneficios;