import PropTypes from "prop-types"
import '../utils/lista.css'


function  ListaProductos({lista}) {
    return(
        <ul className="lista">
            {Object.entries(lista).map(([nombre, precio]) =>(
                <li key={nombre}>{nombre}: {precio}</li>
            ))}
        </ul>
    )
}
ListaProductos.propTypes = {
    lista: PropTypes.objectOf(PropTypes.number).isRequired,
};
export default ListaProductos;