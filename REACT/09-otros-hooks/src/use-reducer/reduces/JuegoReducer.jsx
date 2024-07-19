import React from 'react'

export const JuegoReducer = (state = [], action) => {

    switch (action.type) {
        case "AGREGAR_JUEGO":
            console.log(action.payload);
            return [...state, action.payload]
        
        case "ELIMINAR_JUEGO":
            return state.filter(juego=>juego.id!==action.payload)

        case "EDITAR_JUEGO":
            const indice=state.findIndex(j=>j.id===action.payload.id)
            let juegoEncontrado= state[indice]
            juegoEncontrado.nombre=action.payload.nombre
            state[indice]=juegoEncontrado
            return [...state]

        default:
             return state;
    }
}
