import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className="inicio">
      <h1>
        Hola soy mateo Rodriguez un joven apasionado por el mundo del desarrollo de software
        en especial en el desarrollo con microservicios
      </h1>
      <h2>
        Tengo un base solida para comenzar a desarrollar aplicaciones del mundo real. <Link to="/contacto">Contacta conmigo</Link>
      </h2>
      <p>
        Estoy decido ha crear una aplicacion que genere impacto y que pueda cumplir o sobrepasar
        mis propias expectativas, quisiera poder un dia sentirme orgulloso de lo que estoy haciendo hoy 27 de junio de 2024 
        y poder decir que valio la pena cada hora invertida en el proceso de desarrollar mis habilidades. 
      </p>
      
      <section>
        <h2>
          Algunos de mis proyectos
        </h2>
      </section>

    </div>
  )
}
