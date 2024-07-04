import React from "react"

const SegundoComponent = () => {
    const libros = ['jshadlkd', 'ewewewewewewewewewewewew', 'eue21232w'];

    return <>
        <h1>listado de peliculas</h1>
        {
            libros.length > 0 ? (
                <ul>
                    {
                        libros.map((libro, index) => {
                            return <li key={index}>{libro}{index}</li>
                        })
                    }
                </ul>
            ) : (
                <p>no hay libros</p>
            )
        }

    </>;
}

export {
    SegundoComponent
}