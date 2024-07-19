import React, { useEffect, useReducer } from 'react'
import { JuegoReducer } from './reduces/JuegoReducer';

const init =()=>{
    const juegosPrincipales=[
        {
            id: 1, 
            nombre: "The Legend of Zelda: Breath of the Wild"
        },
        {
            id: 2, 
            nombre: "The Legend of Zelda: Ocarina of Time"
        },
        {
            id: 3, 
            nombre: "The Legend of Zelda: Link's Awakening"
        }
    ]
    localStorage.setItem('juegos',JSON.stringify(juegosPrincipales))

    return JSON.parse(localStorage.getItem('juegos')) || [];
};

export const MisJuegos = () => {
    
    const [juegos, dispatch] = useReducer(JuegoReducer,[],init);
    
    useEffect(()=>{
        localStorage.setItem('juegos',JSON.stringify(juegos));
    },[juegos]);

    const conseguirDatosForm = e=> {
        e.preventDefault();
        let juego={
            id:new Date().getTime(),
            nombre:  e.target[0].value
        }
        console.log(juego);

        const action={
            type: "AGREGAR_JUEGO",
            payload: juego
        }

        dispatch(action);
        console.log(juegos);
    }
    
    const editarJuego=(e,id)=>{
        e.preventDefault();
        console.log(e.target.value);
        const action={
            type: "EDITAR_JUEGO",
            payload: {id, nombre: e.target.value}
        }
        dispatch(action);
    }
    
    const eliminarJuego=(id)=>{
        const action={
            type: "ELIMINAR_JUEGO",
            payload: id
        }
        dispatch(action);
    }



    let videojuegos=()=>{
        return juegos.map(juego=>(
            <li key={juego.id}>{juego.nombre} 
            <input type="text" onBlur={e=>editarJuego(e,juego.id)} />
            <button onClick={()=>eliminarJuego(juego.id)} >x</button></li>
        ))
    }
  return (
    <div>
        <h1>MisJuegos</h1>
        <p>Número de videojuegos:15</p>
        <ul>
            {videojuegos()}
        </ul>
        <h3>Agregar juego</h3>
            
        <form onSubmit={conseguirDatosForm}>
            <input type="text" id='nombre' placeholder="Nombre del juego"/>
            <input type="submit" value="Agregar"/>
        </form>
    </div>
  )
}
