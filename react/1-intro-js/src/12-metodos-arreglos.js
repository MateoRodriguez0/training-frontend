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

//metodo map

const total = objetos.map(objeto =>{
    return objeto.total;
} );
console.log(total);


//metodo flatmap

const total2 = objetos.flatMap(objeto => objeto.items);
console.log(total2);


//metodo filter

const filtro = objetos.filter(objeto =>{
    return  objeto.client.startsWith('gs');
});
console.log(`filtro`);
console.log(filtro);


//metodo find

console.log('find');
const total4 = objetos.find(objeto => objeto.client === 'goku');
console.log(total4);


//metodo some

const total5 = objetos.some(objeto => objeto.client === 'goku');
console.log(total5);


//metodo every

console.log('every');
const total6 = objetos.every(objeto => objeto.client === 'goku');
console.log(total6);


//metodo reduce

const total7 = objetos.reduce((total, objeto) => total + objeto.total, 0);
console.log(total7);


//metodo reduceRight

const total8 = objetos.reduceRight((total, objeto) => total + objeto.total, 0);
console.log(total8);


//metodo sort

const total9 = objetos.sort((a, b) => a.total - b.total);
console.log(total9);


//metodo reverse

const total10 = objetos.reverse();
console.log(total10);


//metodo slice

const total11 = objetos.slice();
console.log(total11);


//metodo  shift
console.log('shift');
const total12 = objetos.shift();
console.log(total12);


//metodo unshift

console.log('unshift');
const total13 = objetos.unshift();
console.log(total13);