import {findbyId} from './data/objetos'

findbyId(2).then(console.log
).catch( error =>{
    console.log('ha ocurrido un error'+error)
})

