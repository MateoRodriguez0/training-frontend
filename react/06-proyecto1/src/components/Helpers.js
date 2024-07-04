const guardarEnStorage=(peli)=>{
    if(localStorage.getItem('pelis')!=undefined){
        let pelis=JSON.parse(localStorage.getItem('pelis'))
        if(Array.isArray(pelis)){
            pelis.push(peli)
        }     
        localStorage.setItem('pelis',JSON.stringify(pelis))
    }
    else{
        localStorage.setItem('pelis',JSON.stringify([peli]))
    }
        
}

const getPelis=()=>{
    return JSON.parse(localStorage.getItem('pelis'))

}

const editPelicula=(peli)=>{
    let pelis=JSON.parse(localStorage.getItem('pelis'))
    const index=pelis.findIndex(p=>p.id==peli.id)
    pelis[index]=peli;
    //crear guardar el nuevo objeto en el storage
    localStorage.setItem('pelis',JSON.stringify(pelis))
    return pelis;
}

function eliminarPelicula(id){
    let pelis=JSON.parse(localStorage.getItem('pelis'))
    pelis=pelis.filter(peli=>peli.id!=id);
    localStorage.setItem('pelis',JSON.stringify(pelis))
}
export{
    guardarEnStorage,
    getPelis,
    eliminarPelicula,
    editPelicula
}

