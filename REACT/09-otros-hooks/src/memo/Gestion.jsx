import React, { useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {
    const [nombre, setNombre]=useState("");
    const [pagina, setPagina]=useState(1);
    const asignarGestor=e=>{
        e.preventDefault();
        setNombre(e.target.value);
    }

  return (
    <div>
         <input type="text" name="nombre" id="nombre" 
        placeholder='Introduce tu nombre' onChange={asignarGestor}/>
        <h1>Nombre del gestor: {nombre}</h1>
        <h3>Listado de empleados</h3>
        <p>Los Empleados son gestionados por {nombre} vienen de jsonPlaceholder...</p>
        
        <button onClick={()=>setPagina(1)}>pagina 1</button>
        <button onClick={()=>setPagina(2)}>pagina 2</button>

        <Empleados page={pagina}/>
    </div>
  )
}
