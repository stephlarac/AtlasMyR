import React from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import emailjs from "emailjs-com";
import { useState } from 'react';

function VacanciesForm(){
    const service_id = process.env.REACT_APP_SERVICE_ID;
    const vac_template_id = process.env.REACT_APP_VAC_TEMPLATE_ID;
    const public_id = process.env.REACT_APP_PUBLIC_ID;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
           service_id,   
            vac_template_id,    
            e.target,
            public_id 
        ).then(
        () => {
            alert("Solicitud enviada correctamente.");
            e.target.reset();
            setFileName("");
        },
        (error) => {
            alert("Failed to send message");
            console.error(error);
        }
        );
    };

    const [fileName, setFileName] = useState("");

    const handleFileChange  = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };


    return(
       <div className="info-vacantes">
               <h2>¡Únete a nuestro equipo!</h2>
               <form className="form-vacantes" onSubmit={handleSubmit} encType="multipart/form-data" method="post">
                <label htmlFor="name">Nombre: </label>
                <input type="text" id="name" name="name" placeholder="Ej. Juan Perez" required></input>
                <label htmlFor="phone">Teléfono: </label>
                <input type="text" id="phone" name="phone" placeholder="Ej. 01 0000 0000" required></input>
                <label htmlFor="experience">Experiencia: </label>
                <textarea id="experience" name="experience" placeholder="Ej. Sé manejar montacargas..." />
                <label htmlFor="resume">CV: </label>
                <label htmlFor="resume" className="button-file"><CloudUploadIcon className="icon"/> Cargar archivo </label>
                <input id="resume" name="resume" type="file"  accept=".pdf,.jpg,.png"
                     onChange={handleFileChange}></input>
                {fileName && (
                    <p className="file-name">Archivo seleccionado: {fileName}</p>
                )}
                <input type="submit" value="¡Quiero trabajar!"></input>
               </form>
        </div> 
    )
}

export default VacanciesForm;