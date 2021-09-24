import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cabecera from './components/Cabecera';
import Registrarproductos from './paginas/Registrarproductos';
import Listarproductos from './paginas/Listarproductor';
import Home from './paginas/Home';
import Error from './paginas/Error';
import Modificarproducto from './paginas/Modificarproducto';
import ListaPosts from './paginas/ListaPosts';

function App() {
  return (
    <Router>
      <Cabecera/>
      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/Registrarproductos">Registrar Productos</Link>
        </li>

        <li>
          <Link to="/Listarproductos">Listar Productos</Link>
        </li>

        <li>
          <Link to="/ListarPosts">Listar Posts</Link>
        </li>

        
      </ul>
      <Switch>
        
        <Route path="/Registrarproductos" component={Registrarproductos}/>

        <Route exact path="/Listarproductos" component={Listarproductos}/>

        <Route exact path="/ListarPosts" component={ListaPosts}/>
        
        
        <Route path="/Modificarproducto/:id" component={Modificarproducto}/>
          

        <Route exact path="/" component={Home}/>
         

        <Route path="*" component={Error} />
          
        
      </Switch>
    </Router>
  );
}

export default App;
