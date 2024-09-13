import React from "react";
import { motion } from "framer-motion";


function Slide(props){

    return(
        <motion.div className="principal-slide" 
            initial={{ x: (props.side === "left" ? -65 : 65), opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{duration: 0.5 }}>
                <img className="slide-img" src={props.img} alt="Metal"/>
                <p>{props.name}</p>
        </motion.div>
    )
}

export default Slide;