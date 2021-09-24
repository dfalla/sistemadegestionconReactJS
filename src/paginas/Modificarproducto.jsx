import react from 'react';
import './Modificarproducto.css'
import { useParams } from "react-router-dom";

const Modificarproducto = () =>{

    let {id} = useParams();
    

    return(
        <>
         <fieldset>
            <form className="formulario">
                
                <br/>
                <p>Producto número {id}</p>
                <br/>
                <label>Cambiar nombre del producto:</label>
                <br/>
                <input type="text" placeholder="Escriba nombre"></input>
                <br/>
                <br/>
                <label>Tipo de producto</label>
                <br/>
                <select>
                    <option>Llantas</option>
                    <option>Tubos de escape</option>
                    <option>Motores</option>
                </select>
                <br/>
                <br/>
                <label>Fecha de registro:</label>
                <br/>
                <input type="date"></input>
                <br/>
                <br/>
                <label>Descripción del producto</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <br/>
                <button type="submit">Enviar</button>
            </form>
        </fieldset>
        </>
    )
}

export default Modificarproducto;