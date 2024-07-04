import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header className="header">
      <div className='logo'>
        <span>M</span>
        <h2 className="h2" >
            Mateo Rodriguez web
        </h2>
      </div>
        
        <nav>
            <ul>
                <li><NavLink className={
                  ({isActive})=> isActive? "nav-link activado":"nav-link"} 
                  to="/inicio">Inicio</NavLink></li>

                <li><NavLink className={
                  ({isActive})=> isActive? "nav-link activado":"nav-link"} 
                  to="/curriculum">Curriculum</NavLink></li>  

                <li><NavLink className={
                  ({isActive})=> isActive? "nav-link activado":"nav-link"}  
                  to="/portafolio">Portafolio</NavLink></li>

                <li><NavLink className={
                  ({isActive})=> isActive? "nav-link activado":"nav-link"}  
                  to="/servicios">Servicios</NavLink></li>
                
                <li><NavLink className={
                  ({isActive})=> isActive? "nav-link activado":"nav-link"}  
                  to="/contacto">Contacto</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}
