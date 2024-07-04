import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UseEfect } from './components/UseEfect'
import { Axios } from './components/Axios'
import { AxiosComponennt } from './components/AxiosComponennt'
import { Formularios } from './components/Formularios'

function App() {
  

  return (
    <>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <div className="card">
    <Formularios/>
    </div>
    
  </>

    /*<>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>use-effect</h1>
      <div className="card">
      <AxiosComponennt/>
      </div>
      
    </>*/
  )
/*
    return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Axios</h1>
        <div className="card">
        <Axios/>
        </div>
        
      </>
    )*/
}

export default App
