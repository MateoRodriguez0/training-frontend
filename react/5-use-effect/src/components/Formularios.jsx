import React, { useState } from 'react'


export const Formularios = () => {
  const [usuario, setUsuario]= useState(undefined);
  const conseguirDatosFormulario=e=>{
    e.preventDefault();
    console.log(e.target.d);
    const datos=e.target;
    let user={
        nombre:datos.nombre.value,
        apellido:datos.apellido.value,
        genero:datos.genero.value,
        biografia:datos.biografia.value
    }
    console.log(user);
    setUsuario(user);
}
const cambiarDatos=e=>{
    if(usuario!=undefined){
        const param=e.target.name;
        setUsuario(exits=>{
            return{
                ...exits,
                [param]:e.target.value
            } 
        });
        console.log(usuario);
    }

}

  return (
    <div>
        {
            usuario!=undefined &&
            <div>
                <h3>Usuario</h3>
                <p>Nombre: {usuario.name}</p>
                <p>Apellido: {usuario.apellido}</p>
                <p>Genero: {usuario.genero}</p>
                <p>Biografia: {usuario.biografia}</p>
            </div>
        }
        <div>Formularios</div>
        <form onSubmit={conseguirDatosFormulario}  >
            <input onChange={cambiarDatos} type="text" name="nombre" placeholder="nombre"/>
            <input onChange={cambiarDatos} type="text" name="apellido" placeholder="apellido"/>
            <select onChange={cambiarDatos} type="email"name="genero" placeholder="genero">
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
            </select>
            <textarea onChange={cambiarDatos} name="biografia" id="" placeholder='biografia'></textarea>
            <button  type="submit">Enviar</button>
        </form>
    </div>
  )
}
