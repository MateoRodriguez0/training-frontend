import React, { useState } from 'react'
import {guardarEnStorage} from './Helpers'


export const Crear = ({setListadoState}) => {
    const tituloComponente ="Añadir Pelicula";
    const [peliState,setPeliState]=useState({
        titulo:'',
        descripcion:''
    })
    const {titulo,descripcion}=peliState;
    const ConseguirDatosFormulario=e=>{
        
        e.preventDefault();

        //obtenemos datos del formulario
        const target=e.target;
        let titulo=target.titulo.value
        let descripcion=target.descripcion.value
        if(titulo==''| descripcion==''){
            return ;
        }

        //CREAR OBJETO PELICULA
        let pelicula={
            id: new Date().getTime(),
            titulo:titulo,
            descripcion:descripcion
        }
        setPeliState(pelicula)
        //Actualizar el estado
        setListadoState(listadoState=>{
            return [...listadoState,pelicula];
        })
        guardarEnStorage(pelicula)
      
        
    }



    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>
           <strong> {(titulo!='' &&descripcion!='') && 'Se ha creado la pelicula '+ titulo}</strong>
            <form onSubmit={ConseguirDatosFormulario}>
                <input type="text"
                        id="titulo" 
                        name='titulo'
                        placeholder="Titulo" />
                <textarea id="description"
                          name="descripcion"
                          placeholder="Descripción"></textarea>
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div>
    )
}
