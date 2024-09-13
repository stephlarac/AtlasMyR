import React, { useState } from "react";
import Slide from "./Slide";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


function Slider(){

    const metales = [
        {
            id: 0,
            img: "images/aluminios.jpg",
            name: "Aluminios"
         },
         {
            id: 1,
            img: "images/baterias.jpg",
            name: "Baterias"
         },
         {
            id: 2,
            img: "images/botes.jpg",
            name: "Bote de aluminio"
         },
         {
            id: 3,
            img: "images/bronce.jpg",
            name: "Bronce"
         },
         {
            id: 4,
            img: "images/chatarra.jpg",
            name: "Chatarra y lámina"
         },
         {
            id: 5,
            img: "images/cobres1.png",
            name: "Cobres"
         },
         {
            id: 6,
            img: "images/inoxidable.jpg",
            name: "Acero Inoxidable"
         },
         {
            id: 7,
            img: "images/perfil.jpg",
            name: "Perfil"
         },
         {
            id: 8,
            img: "images/radiadores.jpg",
            name: "Radiadores"
         }];

    const [positions, setPositions] = useState([0,1,2,3,4,5,6,7]);
    const [side, setSide] = useState("");

    function handleClickPrev(){
      setPositions(positions.map(x => ((x-1) < 0 ? x=8 : x-1)));
      setSide("left");
    }

    function handleClickNext(){
      setPositions(positions.map(x => ((x+1) > metales.length-1 ? x=0 : x+1)));
      setSide("right");
    }

    return(
        <div  className="slider-container">
            <LeftSide img1={metales[positions[2]].img} img2={metales[positions[1]].img} img3={metales[positions[0]].img}/> 
            <div className="Slide">
                <ArrowBackIosNewIcon className="arrow-icon prev" onClick={handleClickPrev}/>
                <Slide key={metales[positions[3]].id} img={metales[positions[3]].img} name={metales[positions[3]].name} side={side}/>
                <ArrowForwardIosIcon className="arrow-icon next" onClick={handleClickNext}/>
            </div>
            <RightSide img1={metales[positions[4]].img} img2={metales[positions[5]].img} img3={metales[positions[6]].img} />
        </div>
    )
}

export default Slider;