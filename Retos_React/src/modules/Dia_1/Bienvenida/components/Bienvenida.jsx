import PropTypes from "prop-types"
import '../utils/bienvenida.css'

function Bienvenidos(props) {
    return (
    <>
        <div className="content hover">
         <h2>Bienvenid@</h2>
        <h1 className="name" >{props.nombre}</h1>
        </div>

    </>
    )
}
Bienvenidos.propTypes = { 
    nombre: PropTypes.string.isRequired, // Indica que "nombre" debe ser un string obligatorio
}; //si no se valida puede generar un error de sintaxis

export default Bienvenidos;