import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const h1=React.createElement('div',null,React.createElement('ul',null,React.createElement('li',null,'Esta es la primera linea')))
const h2= <div>
  <ul>
    <li>
      hola
    </li>
  </ul>
</div>;
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  h2

)
