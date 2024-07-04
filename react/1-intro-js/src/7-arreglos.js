const productos =[
    {id:1,name:'laptop', price:3000},
    { id:2,name:'monitor', price:2000},
    {id:3,name:'teclado',price:1000},
    {id:4,name:'mouse',price:500 },
    {id:5, name:'teclado',price:1000},
    {id:6,name:'mouse',price:500},
    {id:7,name:'teclado', price:1000},
    {id:8,name:'mouse',price:500 },
    {id:9, name:'teclado',price:1000 }];

    productos.push('juas')
// todos los for

/*for(let i =0; i <productos.length;i++){
    console.log(productos[i]);
}*/

/*for(const element of productos){
    console.log(element);
}*/

/*
productos.forEach(p=>{
    console.log(p);
})*/

for (const key in productos) {
    if (productos.hasOwnProperty.call(productos, key)) {
        const element = productos[key];
        console.log(element)
    }
}