import React, { useEffect, useLayoutEffect } from 'react'

/**El useayoutEffect */
export const EjemploComponent = () => {
    //Este useLayoutEffect se ejecuta antes de que se renderice el componente en el DOM
    useLayoutEffect(()=>{
        console.log("Se ejecutó el useLayoutEffect");
        let caja=document.querySelector('#caja');
        caja.style.backgroundColor="red";
    }, []);

    //Este useEffect se ejecuta desoues que se renderice el componente
    useEffect(()=>{
        console.log("Se ejecutó el useEffect");
        let caja=document.querySelector('#caja');
        caja.style.backgroundColor="blue";
    },[]);

  return (
    <div>Ejemplo useEffect y UseLayoutEffect

        <div id='caja'>
            caja

        </div>
    </div>
  )
}
