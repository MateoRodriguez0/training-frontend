


async function findAllUsers(){
    const response= await fetch('htts://jsonplaceholder.typicode.com/users');
    const data= await response.json();
    return data;
}

try{
    const users= await findAllUsers();
    const ul= document.createElement('ul')
    document.getElementById('root').append(ul)
    users.forEach(user => {
        const li= document.createElement('li')
        li.innerText=user.name;
        ul.append(li)
       
    });
    
    
}catch(error){
    console.log(TypeError(error).message)
}
