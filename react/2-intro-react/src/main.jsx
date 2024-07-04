import React from 'react'
import ReactDOM from 'react-dom/client'
import { HolaMundoApp } from './HolaMundoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HolaMundoApp user={{name:'mateo'}} id={97}  book={'Harry Potter'}/>
  </React.StrictMode>
)
