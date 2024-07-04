import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';

export const AxiosComponennt = () => {
    const [users,setUsers]= useState([]);
    const [cargando, setCargando]=useState(true);
    const [errores, setErrores]=useState(undefined);
    const getUsuarios= async()=>{

        /*axios.get('https://reqres.in/api/users')
        .then(res=>res.data)
        .then(res=>setUsers(res.data))
        .catch(error=>console.log(error)); */
        /*setUsers(
            
            [
                {
                  "id": 7,
                  "email": "michael.lawson@reqres.in",
                  "first_name": "Michael",
                  "last_name": "Lawson",
                  "avatar": "https://reqres.in/img/faces/7-image.jpg"
                },
                {
                  "id": 8,
                  "email": "lindsay.ferguson@reqres.in",
                  "first_name": "Lindsay",
                  "last_name": "Ferguson",
                  "avatar": "https://reqres.in/img/faces/8-image.jpg"
                },
                {
                  "id": 9,
                  "email": "tobias.funke@reqres.in",
                  "first_name": "Tobias",
                  "last_name": "Funke",
                  "avatar": "https://reqres.in/img/faces/9-image.jpg"
                }
              ]
        );*/
        const users= async ()=>{
            setTimeout(async ()=>{
                try{
                    const res= await axios.get('https://rewqres.in/api/users',{
                        params:{
                            page:2
                        }
                    });
                    const {data}=  res.data;
                    setUsers(data)
                    setCargando(false);
                    console.log(data);
                }catch(error){
                    console.log(error)
                    setErrores(error.message)
                    console.log(errores)
                };
        },2000)
             
            
        }

       users();
    }
    useEffect(()=>{
        getUsuarios();
        console.log('use effect');
        return ()=>{
            console.log('clean up');
        }

    },[]);

    if( errores!=undefined && cargando==true){
        return <div>
        <div>
            ha ocurrido un error
        </div>
        </div>
    }
 
    else if(cargando==true){
        return <div>
        <div>
            cargando...
        </div>
        </div>
    }
   
//cuando todo ha ido bien
  return (
    <div>
    <div>Axios UseEffect</div>
   <ul>
    {
        users.map((user)=>(
            <li key={user.id}>
                <img src={user.avatar} alt="avataer" width="100px" height="100px"/>
                {user.id} {user.last_name}, email: {user.email}</li>
        ))
    }
   </ul>
</div>
  ) 
}
