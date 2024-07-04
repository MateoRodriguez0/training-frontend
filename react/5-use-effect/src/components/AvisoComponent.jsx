import React from 'react'
import { useEffect } from 'react'

export const AvisoComponent = ({nombre}) => {
    const mostrarAlerta=(e)=>{
        alert("Bienvenido")
    }

    useEffect(()=>{
        alert("componente");
        
        
        //cuando el componente se desmonta
        return () => {
            console.log('Componente desmontado');
            alert("componente desmontado");
            
        };
       


    }, []);//se ejecuta una vez porque el array esta vacio
  
 
  return (
    <div>
        <hr />
        <h4>
        Hola, {nombre} como estas? 
        </h4>
        <button onClick={e=> mostrarAlerta(e)}>Mostrar alerta</button>
    </div>
  )
}
