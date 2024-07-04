import React from 'react'
import { useState } from 'react';
import { getPelis } from './Helpers';

export const Buscador = ({listado,setListadoState}) => {
  const [busqueda ,setBusqueda]= useState('')
  const buscarPeli=(e)=>{
    //crear estado y actualizarp
    setBusqueda(e.target.value)

    //todas las pelis
    const pelis=getPelis(); 
    console.log(pelis)
    //filtrar para buscar coincidencias
    let pelis_encontradas=pelis.filter(peli=>{
      return peli.titulo.toLowerCase().includes(e.target.value.toLowerCase());
    	});

    if(busqueda.length<=1){
      pelis_encontradas=pelis;
    }
    
      //comprobar si hay un resultado
  
      //dar valor de todo en localstorage
  
  
      //actualizar el listado
      setListadoState(pelis_encontradas)
      
      console.log(busqueda)
    }
   

  return (
    <div className="search">
    <h3 className="title">Buscador</h3>
    <form>
        <input type="text" 
            name="busqueda" 
            id="search_field"
            autoComplete='off'
            value={busqueda}
            onChange={buscarPeli}/>
        <button id="search">Buscar</button>
    </form>
</div>
  )
}
