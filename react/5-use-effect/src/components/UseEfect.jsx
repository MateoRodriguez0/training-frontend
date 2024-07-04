import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const UseEfect = () => {
    const [usuario,setUsuario]=useState('');
    const [count, setCount] = useState(0)
    const mostrarMensaje=()=>{
        if(usuario=='mateo'){
            return <AvisoComponent/>;
        }
    }
    
    const modUsuario=(e)=>{
        setUsuario(e.target.value)
       
    }
    //si el segundo parametro lo dejo con un array vacio el hook se ejecutara solo cuando cargue el componente por primera vez 
    useEffect(()=>{
        console.log('usuario');
    },[]);

    useEffect(()=>{
        setCount((count) => count + 1)
      
    },[usuario]);
  return (
  <>
  <h2 className={ count<10?'label-green':'label-red'}>counter {count}</h2>
   <strong >{usuario}</strong>
   <div>
    <input type="text" onChange={modUsuario} placeholder='usuario'/>
   </div>
   {mostrarMensaje()}
  </>
   
  )
}
