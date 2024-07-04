import { useState } from "react"

const ComponentEvents=()=>{

    const [state, setState]= useState(0);
    const increment=()=>{
        setState(c=>c+1);
    }
    const hasDadoClick=(name)=>{
        alert('has dado click '+ name)
    }
    function hasDadoDobleClick(name){
        alert('has dado doble click '+ name)
    }

    function hasEntrado(){
        const element = document.getElementById('caja');
        element.style.backgroundColor = 'red';
        
    }

    function hasSalido(){
        const element = document.getElementById('caja');
        element.style.backgroundColor = '#535bf2';
    }
    return(<div>
        <h1>eventos</h1>
        {state}
        <p>
        <button onClick={
            ()=>{
              increment()
            }
        }>incrmenter</button>
        </p>
        <p>
        <button onClick={
            e=>
              hasDadoClick ('Mateo')
            
        } >unClick</button>
        </p>
   
 <button onDoubleClick={()=>hasDadoDobleClick('Mateo')}>
    unClick</button>

<div className="caja" id="caja" onMouseEnter={()=>hasEntrado()} onMouseLeave={()=>hasSalido()}>
    pasa por encima
</div>
 

    </div>)
}

export{
    ComponentEvents as Eventos
}