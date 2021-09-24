import React, { useEffect, useState } from "react";

import './Listarproductor.css'
import { NavLink, Link } from "react-router-dom";
import PostService from '../Servicios/PostService';

const ListaPosts = () => {

    const [listadoPosts, setlistado] = useState([]);

    useEffect(() => {
        getList(); 
    }, []) /// mounting

    const getList =()=>{

        let lista =PostService.listarTodos();

        setlistado(lista);
        console.log('lista',lista);
    }

    return (
        <table>
            <caption>Lista de Productos</caption>
            <thead>
                <tr>

                    <th>id</th>
                    <th>Title</th>
                    <th>Autor</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>


                {listadoPosts.map(
                    item => {
                        <tr key={item.id} >
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                            <td><Link to="/Modificarproducto/1" >Modificar</Link></td>
                        </tr>
                    }
                )}

            </tbody>
        </table>
    )

}

export default ListaPosts;