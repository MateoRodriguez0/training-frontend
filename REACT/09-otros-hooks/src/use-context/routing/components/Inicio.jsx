import React, { useContext } from 'react'
import { PruebaContext } from '../../context/PruebaContext';

export const Inicio = () => {
  const compartida= useContext(PruebaContext);
  console.log(compartida);
  
  return (
    <div>
    <h2>Inicio</h2>
    <p>nombre: {compartida.usuario.nombre}</p>
    <p>apellido: {compartida.usuario.apellido}</p>
    <p>email: {compartida.usuario.email}</p>
   </div>

  )
}
