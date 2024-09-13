import React from "react";


function LeftSide(props){

    return(
        <div className="left-side">
                <img className="left-side-img first" src={props.img1} alt="Metal"/> 
                <img className="left-side-img second-l" src={props.img2} alt="Metal"/>
                <img className="left-side-img third-l" src={props.img3} alt="Metal"/>
        </div>
    )
}

export default LeftSide;