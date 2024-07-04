const user={
    name: 'Mateo',
    age: 25,
    country: 'Colombia',
    ranking: 9,
    correo: 'mateo24q@gamil.ocm'
}

const {name, ranking}= {
    name: user.name,
    ranking: user.ranking
};

const details= (name, correo)=> {
    console.log(`El detalle dell ulsuaril ${name} con correo ${correo}` )
};

console.log(details(user))
