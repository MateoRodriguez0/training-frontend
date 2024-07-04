import React from 'react'
import {Routes, Route, Link, BrowserRouter, NavLink, Navigate} from 'react-router-dom'
import {Contacto} from '../components/Contacto'
import {Curriculum} from '../components/Curriculum'
import {Servicios} from '../components/Servicios'
import {Inicio} from '../components/Inicio'
import {Portafolio} from '../components/Portafolio'
import { HeaderNav } from '../layout/HeaderNav'
import { Footer } from '../layout/Footer'

export const PortafolioRoutes = () => {
  return (
    <BrowserRouter>
    {/**header y navegacion */}
    <HeaderNav/>

    {/**contenido central */}
    <section className="content">
      <Routes>
            <Route path='/' element={<Inicio/>}></Route>
            <Route path='/inicio' element={<Inicio/>}></Route>
            <Route path="/portafolio" element={<Portafolio/>}></Route>
            <Route path='/contacto' element={<Contacto/>}></Route>
            <Route path='/servicios' element={<Servicios/>}></Route>
            <Route path='/curriculum' element={<Curriculum/>}></Route>
        </Routes>
    </section>        
      <Footer/>
      {/**header y navegacion */}
    </BrowserRouter>
  )
}
