import React from 'react';
import axios from 'axios'

/**Get */
function getUsers() {
  //Forma verbosa
  /*const httpClient= axios({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
    params:{
      _limit:3
    }

  });
  httpClient
  .then(res=>{
    console.log(res)
    return res;
  })
  .then((res)=>{
    const data= res.data;
    data.forEach(e => {
      console.log(e.name)
    });
  })
  .catch((e)=>console.error(e));/*

  //Forma corta
  /*const httpClient=axios.get('https://jsonplaceholder.typicode.com/users?_limit=3');
  httpClient
  .then((res)=>{
    const data= res.data;
    data.forEach(e => {
      console.log(e.name)
    });
  })
  .catch((e)=>console.error(e));
  */

  //forma 3

  /*const httpClient=axios('https://jsonplaceholder.typicode.com/users?_limit=3',{
    params:{
      _limit:3
    }
  });
  httpClient.then((res)=>{
    const data= res.data;
    data.forEach(e => {
      console.log(e.name)
    });
  })
  .catch((e)=>console.error(e));
*/
}

//Post
const post = () => {
  /* const httpClient=axios({
     url: "https://reqres.in/api/users",
     method: "POST",
     data:{
       name: "mateo",
       job: "developer"
   }
 
   });
   
   httpClient.then((res)=>{
     const data= res.data;
     console.log(res)
   })
   .catch((e)=>console.error(e));
   */

  const httpClient = axios.post('https://reqres.in/api/users', {
    name: 'Mateo',
    jaob: 25
  });
  httpClient.then((res) => {
    const data = res.data;
    console.log(res)
  })
    .catch((e) => console.error(e.name));
};



const put = () => {
  /*const httpClient=axios({
    url:'',
    method:'put',
    data:{
      
    }
  
  })*/
  /*
   const httpClient=axios.patch('https://jsonplaceholder.typicode.com/users/1',{
       name: "MaTEO",
       username: "MATEOSHDSS",
   
     })*/
  const httpClient = axios.put('https://jsonplaceholder.typicode.com/users/1', {
    name: "MaTEO",
    username: "MATEOSHDSS",

  })

  httpClient.then((res) => {
    const data = res.data;
    console.log(res)
  })
    .catch((e) => console.error(e.name));
}

//delete
const Delete = () => {
  const httpClient = axios.delete('https://jsonplaceholder.typicode.com/users/1');

  httpClient.then((res) => {
    const data = res.data;
    console.log(res)
  })
    .catch((e) => console.error(e.name));
}

//---------peticionesConcurrentes-------------
async function request() {
  const usersUrl = 'https://jsonplaceholder.typicode.com/users';
  const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  //forma sincrona
  const res = await axios({
    url: usersUrl,
    method: "GET",
  });
  const res2 = await axios({
    url: postsUrl,
    method: "GET",
  });

  /*console.log(res);
    console.log(res2);
  */

  //forma asincrona
  Promise.all([axios.get(usersUrl), axios.get(postsUrl)])
    .then(res => console.log(res[0]))
    .catch(error => console.log(error));

  const async2 = await Promise.all([axios.get(usersUrl), axios.get(postsUrl)]);
  console.log(async2)

  return async2;
}

//interceptors
async function intercept() {
  axios.interceptors.request.use(function (config) {
    config.timeout = 10000
    console.log(config)
    return config;
  })
  const res = await axios.get('https://jsonplaceholder.typicode.com/users', {
    headers: {
      miheader: 'ejemplo'
    }
  });
  console.log(res)
}

const transform = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users', {
    transformResponse: axios.defaults.transformResponse.concat(data => {
      console.log(data)
      data = data.map(user => {
        user.name = 1
        return user;
      })
      return data;
    })

  });

  console.log(res)
}


//HANDLER ERRORS
async function handler() {
  axios.get('https://jsonplaceholder.typicode.com/usersss')
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.log(error.code)
    })

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/usersss');

  } catch (error) {
    console.log(error)
  }

}

function abortarPeticion() {

  const controller = new AbortController()
  controller.abort();
  axios.post('https://reqres.in/api/login', {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
  },
  {
    signal: controller.signal
  }

).then(console.log)
    .catch(console.log)
}

//INSTANCIAS
async function instamcia(){
  const axiosConfig=axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
  })
  const res= await axios.axiosConfig('/users');
}

export const Axios = () => {

  // getUsers();

  // post();

  //put();

  // Delete();
  //request();

  //intercept();

  //transform();

  //handler();
  abortarPeticion();

  return (
    <div>
      <div>axios</div>
    </div>


  )
}
