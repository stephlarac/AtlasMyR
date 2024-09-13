import React from "react";
import HandshakeTwoToneIcon from '@mui/icons-material/HandshakeTwoTone';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import PaidIcon from '@mui/icons-material/Paid';
import ScaleIcon from '@mui/icons-material/Scale';
import LoyaltyIcon from '@mui/icons-material/Loyalty';


function Beneficios(){

    //using circle menu
    
    return(
        <section id="beneficios">
            <div className="beneficios-div">
                <h2>Algunos de los beneficios que ofrecemos:</h2>
                <img className="beneficios-img" src="./images/reciclaje-sinfondo.png" alt="Chatarra"></img>
                <div className="icons-div">
                    <ul className="icons-list" id="menu">
                        <a class="menu-button icon-plus" id="open-menu" href="#menu" title="Show benefits"><LoyaltyIcon /></a>
                        <a class="menu-button icon-minus" href="#0" title="Hide benefits"> <LoyaltyIcon /> </a>
                        <span className="menu-text"> Click aquí!</span>
                        <li className="icon-item" style={{'--icon-count':1}} href="#menu"> 
                            <HandshakeTwoToneIcon className="icon-component"/>
                            <span className="icon-text">Respetamos acuerdos comerciales</span> 
                        </li>
                        <li className="icon-item" style={{'--icon-count':2}} href="#menu"> 
                            <FindInPageIcon className="icon-component"/>
                            <span className="icon-text">Transparencia en nuestros procesos</span> 
                        </li>
                        <li className="icon-item" style={{'--icon-count':3}} href="#menu"> 
                            <SocialDistanceIcon className="icon-component"/>
                            <span className="icon-text">Trato directo</span> 
                        </li>
                        <li className="icon-item" style={{'--icon-count':4}} href="#menu"> 
                            <PaidIcon className="icon-component"/>
                            <span className="icon-text">Cumplimiento de pago puntual</span> 
                        </li>
                        <li className="icon-item" style={{'--icon-count':5}} href="#menu"> 
                            <ScaleIcon className="icon-component"/>
                            <span className="icon-text">Báscula calibrada</span> 
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Beneficios;