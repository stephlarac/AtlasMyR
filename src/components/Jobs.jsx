import React from "react";
import BenefitComponent from "./BenefitComponent";
import ScaleIcon from '@mui/icons-material/Scale';
import ShieldIcon from '@mui/icons-material/Shield';
import Man4OutlinedIcon from '@mui/icons-material/Man4Outlined';

function Jobs(){

    return(
        <div className="job-section">
            <img className="background-img" src="./images/cobre.jpg" alt="Cobre"></img>
            <h2>Nuestras vacantes</h2>
            <div className="beneficios-div" >
                <BenefitComponent img="./images/pesador.jpg" Icon={ScaleIcon} text="Operador/a de Báscula"/>
                <BenefitComponent img="./images/vigilante.jpg" Icon={ShieldIcon} text="Vigilante"/>
                <BenefitComponent img="./images/cargador.jpg" Icon={Man4OutlinedIcon} text="Cargador"/>
            </div>
        </div>
    )
}

export default Jobs;