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

    const frutas=['peras', 'sandias', 'manzanas', 'naranja'];

    const mercado = [...productos,...frutas]

    console.log(mercado);


    /**
     * 
    const mercado2 = new Map();
    mercado2.set('id',1);

    mercado

    console.log(mercado2);
     */