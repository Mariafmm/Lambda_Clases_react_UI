import PropTypes from "prop-types"
import '../utils/lista.css'


function  ListaProductos({lista}) {
    return(
        <div className="productos-content">
        <h3 className="titulo">Lista de Productos</h3>
        <ul className="lista">
            {Object.entries(lista).map(([nombre, precio]) =>(
                <li key={nombre}>{nombre}: {precio}</li>
            ))}
        </ul>
        </div>
    )
}
ListaProductos.propTypes = {
    lista: PropTypes.objectOf(PropTypes.number).isRequired,
};
export default ListaProductos;