import React from "react";
import BenefitComponent from "./BenefitComponent";
import ScaleIcon from '@mui/icons-material/Scale';
import ShieldIcon from '@mui/icons-material/Shield';
import Man4OutlinedIcon from '@mui/icons-material/Man4Outlined';

function Jobs(){

    return(
        <div className="job-section">
            <img className="background-img" src="./images/cobre.jpg" alt="Cobre"></img>
             <svg class="wave-bg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path d="M0,96L120,112C240,128,480,160,720,165.3C960,171,1200,149,1320,138.7L1440,128L1440,0L0,0Z"
                fill="#4a4a4a"/></svg>
            <h2>Nuestras vacantes</h2>
            <div className="vacantes-components" >
                <BenefitComponent img="./images/pesador.jpg" Icon={ScaleIcon} text="Operador/a de Báscula"/>
                <BenefitComponent img="./images/vigilante.jpg" Icon={ShieldIcon} text="Vigilante"/>
                <BenefitComponent img="./images/cargador.jpg" Icon={Man4OutlinedIcon} text="Cargador"/>
            </div>
        </div>
    )
}

export default Jobs;