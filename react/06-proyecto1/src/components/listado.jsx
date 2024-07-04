import React, { useEffect } from 'react'
import { getPelis } from './Helpers'
import { useState } from 'react';
import {PropTypes} from 'prop-types'
import { eliminarPelicula } from './Helpers'
import { Editar } from './Editar';

const listado = ({listadoState, setListadoState}) => {
    const pelis=getPelis();
    //const [listadoState, setListadoState]=useState([]);
    const [editar, setEditarPeli]=useState(0);

    useEffect(()=>{
        if(pelis!=undefined){
            setListadoState(pelis);
        }
        
    },[]);


    const eliminarPeli=(e, id)=>{
        eliminarPelicula(id)
        setListadoState(listadoState.filter(peli=>peli.id!=id))
      
    }
    
    const renderPelis=()=> { 
        if(listadoState.length!=0){
            return  listadoState.map((peli)=>{
                const {id,titulo,descripcion}=peli
                
                return  (
                <article key={id} className="peli-item">
                    <h3 className="title">{titulo}</h3>
                    <p className="description">{descripcion}</p>
        
                    <button className="edit" onClick={e=>{
                        setEditarPeli(id)
                    }}>Editar</button>
                    <button className="delete" onClick={e=>eliminarPeli(e,id)}>Borrar</button>
                    {(editar==id)&& <Editar peli={peli} setEditarPeli={setEditarPeli} setListadoState={setListadoState}/>}
                </article>
                )
               
        });
        }
        else{
            return 'Aun no Hay peliculas disponibles'
    }
    }

    return (
      <React.Fragment>
        {renderPelis()}
          
      </React.Fragment>
    )
  }
  
  export{
      listado as Listado
  }
  
  listado.propTypes={
    listadoState:PropTypes.array.isRequired,
    setListadoState:PropTypes.func.isRequired
  }