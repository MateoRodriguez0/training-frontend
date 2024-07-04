import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Contacto =()=>{
   ///Hook useNavigate
  const navigate = useNavigate();
   
  const enviar=(e)=>{
    
    e.preventDefault();
    const target= e.target;
    const nombre= target.nombre.value;
    const apellido= target.apellido.value;
   if(nombre.length<=0 && apellido.length<=0){
    console.log("entra")
    navigate('/inicio');
   }else{
    console.log("s")
     navigate(`/persona/${nombre}/${apellido}`);
   }
    
  }
  return (
    <div>
        <div>contacto</div>
        <form onSubmit={e=>enviar(e)}>
          <input type="text" placeholder="Nombre" name='nombre' />
          <input type="text" placeholder="Apellido" name='apellido' />
          <input type="submit" value="Enviar" name='enviar' />
        </form>
    </div>
  )
}
