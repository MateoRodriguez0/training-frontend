import React, { memo, useEffect, useState } from 'react'

export const Empleados =memo( ({page=1, mensaje})=>{
    const [empleados, setEmpleados]= useState(undefined);
    
    useEffect(()=>{
       getEmpleados(page);
    }, [page])

    //Aquí va el código para traer los empleados
    const getEmpleados=(page)=>{
        fetch('https://reqres.in/api/users?page='+page)
        .then(response => response.json())
        .then(data => {
            setEmpleados(data.data);
            console.log(data.data);
            //Aquí se podría actualizar el estado con los empleados traídos
        })
        .catch(error => console.error('Error:', error))
       
    }
    mensaje();
    console.log('la pagina es '+ page);
    return (
        <>
    <div>Empleados</div>
    <p>pagina {page}</p>
      <ul>
        {
            empleados?.map(empleado => (
              <li key={empleado.id}>{empleado.first_name} {empleado.last_name}</li>
            )) 
  
        }
      </ul>
        </>
      
      
    )
}
)