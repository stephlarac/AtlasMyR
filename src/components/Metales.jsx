import React from "react";
import Slider from "./Slider/Slider";


function Metales(){

    return(
        <section id="metales">
            <h2>Nos especializamos en la compra de: </h2>
            <Slider />
            <div className="wave">
                <svg class="wave-bg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path d="M0,96L120,112C240,128,480,160,720,165.3C960,171,1200,149,1320,138.7L1440,128L1440,0L0,0Z"
                    fill="#f5f5f5"/> 
                </svg>
            </div>
        </section>
    )
}

export default Metales;