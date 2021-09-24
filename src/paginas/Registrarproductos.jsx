import React from "react";
import './Registrarproductos.css'


const Registrarproductos = () =>{

    return(
        
        <fieldset>
            <form className="formulario">
                <label>Nombre del producto: </label>
                <input type="text" placeholder="Escriba nombre"></input>
                <br/>
                <br/>
                <label>Tipo de producto</label>
                <select>
                    <option>Llantas</option>
                    <option>Tubos de escape</option>
                    <option>Motores</option>
                </select>
                <br/>
                <br/>
                <label>Fecha de registro:</label>
                <input type="date"></input>
                <br/>
                <br/>
                <label>Descripción del producto</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </fieldset>
        
    )
}

export default Registrarproductos;