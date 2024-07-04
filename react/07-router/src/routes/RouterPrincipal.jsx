import React from 'react'
import {Routes, Route, Link, BrowserRouter, NavLink, Navigate} from 'react-router-dom'
import {Inicio} from '../components/Inicio'
import {Articulos} from '../components/Articulos'
import {Contacto} from '../components/Contacto'
import { Error } from '../components/Error'
import {Persona} from '../components/Persona'
import { PanelControl } from '../components/PanelControl'
import {InicioPanel} from '../components/panel/Inicio'
import { ArticulosPanel } from '../components/panel/Articulos'
import {Usuarios} from '../components/panel/Usuarios'
import {Acerca} from '../components/panel/acerca'

export const RouterPrincpal = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><NavLink className={
            ({isActive})=> isActive?"activado":""
          } 
            to='/inicio'>Inicio</NavLink></li>
          <li><NavLink className={
            ({isActive})=> isActive?"activado":""
          } 
          to='/articulos'>Articulos</NavLink></li>
          <li><NavLink className={
            ({isActive})=> isActive?"activado":""
          } to='/contacto'>Contacto</NavLink></li>
          <li><NavLink className={
            ({isActive})=> isActive?"activado":""
          } to='/persona'>Persona</NavLink></li>
            <li><NavLink className={
            ({isActive})=> isActive?"activado":""
          } to='/panel'>panel</NavLink></li>
          
        </ul>
      </nav>
      <Routes>
        <Route path='/inicio' element={<Inicio/>}></Route>
        <Route path='/articulos' element={<Articulos/>}></Route>
        <Route path='/contacto' element={<Contacto/>}></Route>
        <Route path='/persona/:nombre/:apellido' element={<Persona/>}></Route>
        <Route path='/persona/:nombre' element={<Persona/>}></Route>
        <Route path='/persona' element={<Persona/>}></Route>
        <Route path='*' element={<Error/>}></Route>
        <Route path='/redirigir' element={<Navigate to="/contacto" ></Navigate>}></Route>
        <Route path='/panel/*' element={<PanelControl/>}>
          <Route path='inicio' element={<InicioPanel/>}></Route>
          <Route path='articulos' element={<ArticulosPanel/>}></Route>
          <Route path='usuarios' element={<Usuarios/>}></Route>
          <Route path='acerca-de' element={<Acerca/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
