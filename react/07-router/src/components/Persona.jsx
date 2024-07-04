import React from 'react'
import { useParams } from 'react-router-dom'

export const Persona = () => {

  ///Hook useparams para obtener los parametros de la url
  const parametros = useParams();
  let {nombre='Anonimo'} = useParams();
  console.log(parametros);

  return (
    <div>Persona</div>
  )
}
