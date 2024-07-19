import React, { useRef } from 'react'

export const Formulario = () => {
    const nombre= useRef();
    const apellido= useRef();
    const email= useRef();
    const form = useRef();


    const mostrar=e=>{
        e.preventDefault();
        console.log(nombre.current.value);
        console.log(apellido.current.value);
        console.log(email.current.value);

        //mi formulario
        console.log(form.current);
        //resetear el formulario
        let {current: valores}= form
        form.current.classList.add('bg-green');

        
        
    
    }
  return (
    <div > 
        <h1>formulario</h1>
        <form className='micaja' ref={form} onSubmit={mostrar}>
            <input type="text" placeholder="Nombre" ref={nombre}/>
            <input type="text" placeholder="Apellido" ref={apellido}/>
            <input type="email" placeholder="Correo electrónico"ref={email}  />
          <button type="submit">Enviar</button>
        </form>
    </div>
  )
}
