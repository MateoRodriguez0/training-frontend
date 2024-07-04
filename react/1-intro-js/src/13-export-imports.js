import {objetos, findByname} from './data/objetos'


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


console.log('buscar por nombre');
const user = findByname('gokus');
console.log(user!= undefined? user : 'no existe');
//metodo unshift