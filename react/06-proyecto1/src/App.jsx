
import { useState } from 'react';
import { Buscador } from './components/Buscador'
import { Crear } from './components/Crear'
import {Listado} from './components/listado'

function App() {
const [listadoState, setListadoState]=useState([]);
  return (
    <div className="layout">
        <header>
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>MisPelis</h1>
        </header>
        <nav>
            <ul>
                <li><a href="/#">Inicio</a>  </li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>
        <main className="main">
            <section className="peliculas">
              <Listado listadoState={listadoState} setListadoState={setListadoState}/>
            </section>
            
            <section className="buscadores">
               <Buscador listado={listadoState} setListadoState={setListadoState}/>
                <Crear setListadoState={setListadoState} />
            </section>
        </main>
        
        <footer>
            <p>Todos los derechos reservados</p>
        </footer>
    </div>
  )
}

export default App
