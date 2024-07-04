const objeto= {
    id:10,
    nombre: 'Compras de oficina',
    date: new Date,
    client:'goku',
    total: 1000,
    casa:{
        direccion:'calle 64'
    },
    saludar: ()=>`hola ${objeto.nombre}`,
    items:[
        {
            id:1,
            name:'laptop',
            price:3000
        },
        {
            id:2,
            name:'monitor',
            price:2000
        },
        {
            id:3,
            name:'teclado',
            price:1000
        },
        {
            id:4,
            name:'mouse',
            price:500
        },
        {
            id:5,
            name:'teclado',
            price:1000
        },
        {
            id:6,
            name:'mouse',
            price:500
        },
        {
            id:7,
            name:'teclado',
            price:1000
        },
        {
            id:8,
            name:'mouse',
            price:500
        },
        {
            id:9,
            name:'teclado',
            price:1000
        },
    ],
    getItems(){
        return this.items;
    },
    getTotal: ()=>{
        let total=0;
        objeto.items.forEach(item=>{
            total+= item.price;
        })
        return total;
    } 
    
}

console.log(objeto.casa?.direccion)