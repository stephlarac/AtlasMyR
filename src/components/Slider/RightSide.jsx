import React from "react";


function RightSide(props){

    return(
        <div className="right-side">
            <img className="right-side-img first" src={props.img1} alt="Metal"/>
            <img className="right-side-img second-r" src={props.img2} alt="Metal"/>
            <img className="right-side-img third-r" src={props.img3} alt="Metal"/>
        </div>
    )
}

export default RightSide;