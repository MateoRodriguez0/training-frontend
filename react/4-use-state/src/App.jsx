import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {FirstState} from './components/MiprimerEstado'
import { EjercicioComponent } from './components/EjercicioComponent'
function App() {
  const [count, setCount] = useState(0)
  const fecha= new Date();
  const yearNow=fecha.getFullYear();
  return (
    <>
      <div className='app-header' >
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <FirstState/>
        <EjercicioComponent year={yearNow} />
       
      </div>
      
    </>
  )
}

export default App
