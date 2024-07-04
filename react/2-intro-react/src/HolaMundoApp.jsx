import { Fragment } from "react";
import  PropTypes from 'prop-types';
import { Title } from "./components/Title";
import { UserDetails } from "./components/UserDetails";
import { Book } from "./components/Book";
import { SegundoComponent } from "./components/component-vc";
import { Eventos } from "./components/Eventos";


const HolaMundoApp = ({user, id, title, book} )=> {

    console.log(user, id, title)
    return (
        <div className="miComponent">
            <Title title= {'Hola Mundo'}/>
            <UserDetails user={user} id={id}/>
            <Book book={book}/>  
            <SegundoComponent/> 
            <Eventos/>  
        </div>
        );
}

export{
    HolaMundoApp
} 


HolaMundoApp.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number,
    user: PropTypes.shape({
        nombre: PropTypes.string,
        apellido: PropTypes.string
    })
}


//valores de los props por defecto

HolaMundoApp.defaultProps ={
    title: 'hola mundo por defecto',
    book: 'el libro'
}