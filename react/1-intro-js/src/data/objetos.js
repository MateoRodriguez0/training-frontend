
const objetos = [{
    id: 10,
    nombre: 'Compras de oficina',
    date: new Date,
    client: 'goku',
    total: 10002,
    items: [
        {
            id: 8,
            name: 'mouse',
            price: 500
        },
        {
            id: 9,
            name: 'teclado',
            price: 1000
        },
    ]

},
{
    id: 11,
    nombre: 'Compras de papeleria',
    date: new Date,
    client: 'vegueta',
    total: 12000,
    items: [
        {
            id: 5,
            name: 'libro',
            price: 1000
        },
        {
            id: 6,
            name: 'lapiz',
            price: 500
        }
    
    ]

}
,{
    id: 12,
    nombre: 'Compras de fiesta',
    date: new Date,
    client: 'piculo',
    total: 10200,
    items: [
        {
            id: 1,
            name: 'globos',
            price: 3000
        },
        {
            id: 2,
            name: 'dulces',
            price: 2000
        },
       
    ]
}
];

const findByname =(username)=>{
    return objetos.find(objeto => objeto.client === username);
}

const facturaById= (id) =>{
  return objetos.find(obj=> obj.id==id);
}

const findbyId=(id)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const factura= id => facturaById(id);
            if(factura(10)){
                resolve(factura(10));
            }
            else{
                reject('error la factura con id no existe')
            }
    
        
        },3500
    )
    }) 
     
}

export{
    findByname,
    objetos,
    facturaById,
    findbyId
}