import { useState } from "react";
import Bienvenidos from "./modules/Dia_1/Bienvenida/components/Bienvenida";
import ListaProductos from "./modules/Dia_1/Productos/components/Lista";
import Contador from "./modules/Dia_2/Contador/components/Contador";
import FormularioInteractivo from "./modules/Dia_2/Formulario/components/Formulario";
import Usuarios from "./modules/Dia_3/components/consumir";
import "./App.css";

function App() {
  const [pantalla, setPantalla] = useState(0); // Estado para cambiar la pantalla
  const nombre = "Maria_f";
  const productos = { Salchichon: 1500, Limon: 200, Arepa: 2000, Chocorramo: 5000 };

  let contenido; // Variable para almacenar el contenido dinámico

  if (pantalla === 1) {
    contenido = (
      <div>
        {/* Bienvenida */}
        <div className="content hover">
          <h2>Bienvenid@</h2>
          <Bienvenidos nombre={nombre} />
        </div>

        {/* Lista de productos */}
        <div className="productos-content">
          <h3 className="titulo">Lista de Productos</h3>
          <ListaProductos lista={productos} />
        </div>
      </div>
    );
  } else if (pantalla === 2){
    contenido = (
      <div>
      <Contador></Contador>
      <FormularioInteractivo></FormularioInteractivo>
      </div>
    )
  } else if(pantalla ==3){
    contenido = (
      <div>
      <Usuarios></Usuarios>
      </div>
    )
  }

  return (
    <>
      <div className="titulo_p">
      <h1 className="actividad">Actividades de React</h1>
      <button className="dias" onClick={() => setPantalla(1)}>Día 1</button>
      <button className="dias" onClick={() => setPantalla(2)}>Día 2</button>
      <button className="dias" onClick={() => setPantalla(3)}>Día 3</button>
      </div>
      {contenido} {/* Renderiza el contenido dependiendo de pantalla */}
    </>
  );
}

export default App;
