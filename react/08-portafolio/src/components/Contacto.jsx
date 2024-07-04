import React from 'react'

export const Contacto = () => {
  return (
    <div>
      <h2>Contacto</h2>
      <form className='contact'>
        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Apellidos' />
        <input type="email" placeholder='Email' />
        <textarea type="text" placeholder='Motivo de contacto' />
        <button type='submit'>Contactar</button>


      </form>
    </div>
  )
}
