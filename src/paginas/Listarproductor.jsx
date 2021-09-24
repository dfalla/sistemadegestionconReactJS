import React from "react";
import './Listarproductor.css'
import {NavLink,Link} from "react-router-dom";








const Listarproductos = () =>{
    return (
            <table>
                <caption>Lista de Productos</caption>
                <th>Códgigo</th>
                <th>Producto</th>
                <th>Categoria</th>
                <th>Precio</th>
                <th>Proveedor</th>
                <th>Acciones</th>

                <tr>
                    <td>0000247</td>
                    <td>Producto1</td>
                    <td>Categoria1</td>
                    <td>$10.25</td>
                    <td>Proveedor1</td>
                    <td><Link to="/Modificarproducto/1" >Modificar</Link></td>
                </tr>
                <tr>
                    <td>0000247</td>
                    <td>Producto1</td>
                    <td>Categoria1</td>
                    <td>$10.25</td>
                    <td>Proveedor1</td>
                    <td><NavLink to="/Modificarproducto/2">Modificar</NavLink></td>
                </tr>
                <tr>
                    <td>0000247</td>
                    <td>Producto1</td>
                    <td>Categoria1</td>
                    <td>$10.25</td>
                    <td>Proveedor1</td>
                    <td><NavLink to="/Modificarproducto/3">Modificar</NavLink></td>
                </tr>
                <tr>
                    <td>0000247</td>
                    <td>Producto1</td>
                    <td>Categoria1</td>
                    <td>$10.25</td>
                    <td>Proveedor1</td>
                    <td><NavLink to="/Modificarproducto/4">Modificar</NavLink></td>
                </tr>
                
            </table>
       
    )

}

export default Listarproductos;