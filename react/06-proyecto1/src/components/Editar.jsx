import React, { useState } from 'react'
import { editPelicula } from './Helpers';

const guardarEdicion= (e,id)=>{
    e.preventDefault();

    ///cremos el nuevo objeto peli que sera actualizada
    const peli={
        id:id,
        titulo:e.target.titulo.value,
        descripcion:e.target.descripcion.value,
    }

    //enviams la peli a la funcion de editar
    return editPelicula(peli);
}

export const Editar = ({peli,setEditarPeli,setListadoState}) => {
    const tituloComponente='Editar Pelicula';
    const titulo='Titulo';
    const descripcion='Descripcion';

    const editarPeli=(e,id)=>{
        setListadoState(guardarEdicion(e,id))
        setEditarPeli(0);
     }

     return (
        <div >
            <h3>{titulo}</h3>
            <form  onSubmit={e=>editarPeli(e,peli.id)} className='edit-form'>
                <input  id="titulo"  type="text" placeholder='Titulo' defaultValue={peli.titulo}/>
                <input  id="descripcion"  type="text" placeholder='Descripcion' defaultValue={peli.descripcion}/>
                <button type='submit' className='editar' >Editar</button>
                <button type='submit' className='cancelar' onClick={()=>setEditarPeli(0)}>Cancelar</button>
            </form>
        </div>
      )
}
