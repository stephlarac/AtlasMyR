import React from "react";

function BenefitComponent({img, Icon, text}){
    return(
       <div className="benefit-component">
                <img className="img" src={img} alt="Metal"/> 
                 <Icon className="icon" />
                <h2 className="text">{text}</h2>
        </div>
    )
}

export default BenefitComponent;