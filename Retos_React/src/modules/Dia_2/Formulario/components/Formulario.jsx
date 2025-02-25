import '../utils/Formulario.css'
import { useState } from "react";

function FormularioInteractivo() {
    const [nombre, setNombre] = useState(""); 

    return(
        <form  className="content formulario">
            <label >Escribe tu nombre </label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            <br/>
            <br/>
            <hr/>
            {nombre && <h3>Tu nombre es {nombre}</h3>} {/*Condicion si nombre &&(esta lleno) muestra h3*/}
        </form>
        
    )
}
export default FormularioInteractivo;