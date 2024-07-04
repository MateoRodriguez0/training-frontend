function sayHellow(name = 'chilli', edad=0){
    const hellow=`hola ${name} tienes ${edad} años`
    //console.log('hola mundo function');

    return hellow;
}

//console.log(sayHellow())


//funcion anonyma 

/*
const sayHelloww= function (name = 'chilli', edad=0){
    const hellow=`hola ${name} tienes ${edad} años`
    //console.log('hola mundo function');

    return hellow;
}

console.log(sayHelloww())
*/

//funcion de flecha --- expresion lambda
const sayHellow1 = (name = 'chilli', edad=0)=> 
    `hola ${name} tienes ${edad} años`


//console.log(sayHellow1())

const suma = (i =0, j=1)=> 
  'la suma es igual a: '+ (i+j);
console.log(suma(129287273,928736))