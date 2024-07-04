import React from "react"

 const FirstState=()=>{

    const [nombre,setNombre]=React.useState('Mateo');
    const cambiarNombre=(e,n)=>{
        setNombre(n)
    }
    return(
        <div>
            <h3>componente : componente</h3>
            <strong>{nombre}</strong>
            <button onClick={e=>setNombre(nombre=='hola'?'Mateo':'hola')}>Cambiar nombre</button>

           <div>
           <input type="text" onChange={e=>cambiarNombre(e,e.target.value)} placeholder="cambia el nombre"/>
           </div>
        </div>
        
    )
}

export{
     FirstState 
}
