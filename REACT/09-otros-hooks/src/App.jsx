import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Formulario } from './components/Formulario'
import { Ejemplo } from './components/Ejemplo'
import { Gestion } from './use-callback/Gestion'
import { Tareas } from './use-memo/Tareas'
import { EjemploComponent } from './use-layout/EjemploComponent'
import { MisJuegos } from './use-reducer/MisJuegos'
import { AppRouter } from './use-context/routing/AppRouter'
import { PruebaContext } from './use-context/context/PruebaContext'
import { Component } from './use-id/Component'

function App() {
  const [usuario,setUsuario]=useState({
      nombre: 'Mateo',
      apellido: 'Rodriguez',
      email: 'mateo@gmail.com'
  });

  const curso={
    nombre: 'React desde cero',
    duracion: '3 meses',
    instructor: 'Mateo Rodriguez',
    logo: reactLogo,
    vite: viteLogo
  }

  return (
    <>
      {/*<Formulario/>*/}
      {/**<Ejemplo/> */}
      {/***<Gestion/>  */}
      {/**<Tareas/>*/}
      {/***<Gestion/>  */}
      {/*** <EjemploComponent/>*/}
      {/** <MisJuegos/> */}
      {/** 
       *  <PruebaContext.Provider value={{usuario,setUsuario}} >
        <AppRouter />
      </PruebaContext.Provider>
       * 
      */}
     <Component/>
      
    </>
  )
}

export default App
