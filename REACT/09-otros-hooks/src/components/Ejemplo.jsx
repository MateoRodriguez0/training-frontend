import React, { Fragment, useEffect, useRef, useState } from 'react'

export const Ejemplo = () => {

    const [saludos, setSaludos] = useState(0);
    const saludosEnCola= useRef(saludos);

    useEffect(()=>{
    saludosEnCola.current=saludos
        setTimeout(()=>{
            console.log(saludosEnCola.current);

        },2000)
    },[saludos])

    const enviarSaludo = () => {
        setSaludos(saludos + 1);
    }

  return (
    <Fragment>
        <div>Ejemplo</div>
        <h2>Saludos enviados {saludos}</h2>
        <button onClick={enviarSaludo}>envar saludo</button>
    </Fragment>
    
  )
}
