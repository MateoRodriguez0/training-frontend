import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>PanelControl</h1>
        <p>Elige la opcion</p>
        <ul>
            <li>
                <NavLink to="/panel/inicio">inicio</NavLink>
            </li>
            <li>
                <NavLink to="/panel/articulos">Crear articulos</NavLink>
            </li>
            <li>
                <NavLink to="/panel/usuarios">Gestion usuarios</NavLink>
            </li>
            <li>
                <NavLink to="/panel/acerca-de">Acerca de</NavLink>
            </li>
        </ul>
        <div>
            {/**aqui deben ir las demas subrutas */}
            <Outlet></Outlet>
            
        </div>
    </div>
  )
}
