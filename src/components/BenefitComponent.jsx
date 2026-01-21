import React from "react";

function BenefitComponent({img, Icon, text}){
    return(
       <div className="benefit-component">
            <div class="img-wrapper">
                <img className="img" src={img} alt="Metal"/> 
                <Icon className="icon" />
            </div>
            <h2 className="text">{text}</h2>
        </div>
    )
}

export default BenefitComponent;