import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
function siguiente(year){
   return year+1;
}

function anterior(year){
    return year-1;
}


export const EjercicioComponent = ({year}) => {
    const [yearNow,setYearNow]=useState(year)
    const actualizarAño=(year)=>{
        if(Number.isInteger(parseInt(year))){
            setYearNow(parseInt(year))
        }
    }
  return (
    <div>
        <div>EjercicioComponent</div>
          <p>año: <strong>{yearNow}</strong> </p>
          <div className='botones'>
          <button onClick={e=>setYearNow(anterior(yearNow))}>anterior</button>
          <button onClick={e=>setYearNow(siguiente(yearNow))}>siguinte</button>
        </div>
        <input type="text" placeholder='cambiar año' onChange={e=>actualizarAño(e.target.value)} />
    </div>
  )
}

EjercicioComponent.propTypes = {
    year:PropTypes.number.isRequired
}