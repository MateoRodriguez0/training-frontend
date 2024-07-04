import { Fragment, useState } from "react"


function CounterApp(){
    const [counter, setCounter]= useState(0);
    const increment= ()=> setCounter(c=>c+1);
      
    return <>
        <button onClick={increment}>
            Counter is {counter}
        </button>
    </>
}
export{
    CounterApp
}



