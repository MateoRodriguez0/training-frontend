import React from 'react'
import { Route, BrowserRouter, Routes, NavLink } from 'react-router-dom'
import { Inicio } from './components/Inicio'
import { Login } from './components/Login'
import { Contacto } from './components/Contacto'
import { Acerca } from './components/Acerca'
import { Articulos } from './components/Articulos'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <nav> 
        <div>
          <h1>Aprendiendo React Context</h1>
        </div>
        <ul>
          <li>
            <NavLink to='/'> inicio</NavLink>
          </li>
          <li>
            <NavLink to='/login'> login</NavLink>
          </li>
          <li>
            <NavLink to='/articulos'> artículos</NavLink>
          </li>
          <li>
            <NavLink to='/acercade'> acerca de</NavLink>
          </li>
          <li>
           <NavLink to='/contact'> contacto</NavLink>
          </li>
        </ul>
        
      </nav>
      <section className='content'>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/acercade" element={<Acerca />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="*" element={<div>error</div>} />
        </Routes>
      </section>
      
    </BrowserRouter>
  )
}
