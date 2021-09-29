import axios from "axios";
import Modificarproducto from "../paginas/Modificarproducto";
const baseURL = "https://my-json-server.typicode.com/typicode/demo/posts";

const PostService = {

    listarTodos: async  function () {

         const {data} = await axios.get(baseURL);

         // decontruccion
            array ={'id':90 ,'name':"danielS","LAST":"pitiao" };
            let var1 = array[0];
            let var2 = array[1];
            let var3 = array[2];

            let nombre = array["nombre"];
            let { nombre }  = array;

            const {var1} = array;

         //response http    header - body 

         return data;
    }


}


export default PostService;

//Objecto propiedad y metodos(funciones)
//let objeto = { propiedda1 : valor , }

