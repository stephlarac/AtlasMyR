import React from "react";


function Contacto(){

    return(
        <section id="contacto">
            <img className="contacto-img" src="./images/cobre.jpg" alt="Cobre"></img>
            <div className="info-contacto">
               <h2>Contáctanos si deseas cotizar o tienes alguna duda</h2>
               <form className="form-contacto">
                <label for="name">Nombre: </label>
                <input type="text" id="name" name="name" placeholder="Ej. Juan Perez"></input>
                <label for="phone">Teléfono: </label>
                <input type="text" id="phone" name="phone" placeholder="Ej. 01 0000 0000"></input>
                <label for="email">Correo: </label>
                <input type="email" id="email" name="email" placeholder="Ej. Juan@correo.com"></input>
                <label for="state">Estado: </label>
                <select id="state" name="state" placeholder="Ej. Juan">
                    <option value="JAL">Jalisco</option>
                    <option value="AGS">Aguascalientes</option>
                    <option value="BCN">Baja California</option>
                    <option value="BCS">Baja California Sur</option>
                    <option value="CAM">Campeche</option>
                    <option value="CHP">Chiapas</option>
                    <option value="CHI">Chihuahua</option>
                    <option value="MEX">Ciudad de M&eacute;xico</option>
                    <option value="COA">Coahuila</option>
                    <option value="COL">Colima</option>
                    <option value="DUR">Durango</option>
                    <option value="EMX">Estado de M&eacute;xico</option>
                    <option value="GTO">Guanajuato</option>
                    <option value="GRO">Guerrero</option>
                    <option value="HGO">Hidalgo</option>
                    <option value="MIC">Michoac&aacute;n</option>
                    <option value="MOR">Morelos</option>
                    <option value="NAY">Nayarit</option>
                    <option value="NLE">Nuevo Le&oacute;n</option>
                    <option value="OAX">Oaxaca</option>
                    <option value="PUE">Puebla</option>
                    <option value="QRO">Quer&eacute;taro</option>
                    <option value="ROO">Quintana Roo</option>
                    <option value="SLP">San Luis Potos&iacute;</option>
                    <option value="SIN">Sinaloa</option>
                    <option value="SON">Sonora</option>
                    <option value="TAB">Tabasco</option>
                    <option value="TAM">Tamaulipas</option>
                    <option value="TLX">Tlaxcala</option>
                    <option value="VER">Veracruz</option>
                    <option value="YUC">Yucat&aacute;n</option>
                    <option value="ZAC">Zacatecas</option>
                    <option value="Otro">Otro</option>
                </select>
                <label for="mensaje">Mensaje: </label>
                <textarea id="mensaje" name="mensaje" placeholder="Ej. Me gustaría saber precios..."></textarea>
                <input type="submit" value="Enviar"></input>
               </form>
            </div>
        </section>
    )
}

export default Contacto;