import React, { useEffect, useRef, useState } from 'react'
import { useMemo } from 'react';

export const Tareas = () => {
    const [tareas, setTareas] = useState([]);
    const [contador, setcontador] = useState(100)
    const referencia=useRef(tareas);
    
    useEffect(()=>{
        referencia.current=tareas;
        console.log(referencia.current);
    }, [tareas]);


    const agregarTarea=e=>{
        e.preventDefault();
        const nuevaTarea={
            id: Date.now(),
            tarea: e.target[0].value,
            completada: false
        }
        
        setTareas([...tareas, nuevaTarea]);
        e.target[0].value='';
       
    }

    const borrarTarea=indice=>{
        const nuevasTareas=tareas.filter(tarea=>tarea.id!==indice);
        setTareas(nuevasTareas);
    }

    const contadoracumulado=(acumulacion)=>{
      for (let i = 0; i < acumulacion; i++) {
        console.log('ejecutando acumulacioón de contadores del pasado');
      
        
      }
      return  `Total de tareas: ${contador}`;
    }
    const memoContador= useMemo(()=>contadoracumulado(contador),[contador])
   
    let misTareas =tareas.map(tarea=>(
        <li key={tarea.id} style={{textDecoration: tarea.completada? 'line-through': 'none'}}>{tarea.tarea}
         <button className='btn-delete-task' onClick={()=>borrarTarea(tarea.id)}>Eliminar</button></li>
    ))

  return (
    <div>
    <h2>Mis tareas</h2>
    <form onSubmit={agregarTarea}>
        <input type="text" placeholder="Agregar tarea" />
        <button type="submit">Agregar</button>
    </form>
    <h3>{memoContador}</h3>
    <button onClick={()=>setcontador(contador+1)}>sumar</button>
    <ul>
        {misTareas}
    </ul>
    </div>
    
  )
}
