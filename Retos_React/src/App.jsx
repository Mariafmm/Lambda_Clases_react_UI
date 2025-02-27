import Sidebar from "./modules/Core/Sidebar/components/Sidebar";
import Bienvenidos from "./modules/Dia_1/Bienvenida/components/Bienvenida";
import ListaProductos from "./modules/Dia_1/Productos/components/Lista";
import Contador from "./modules/Dia_2/Contador/components/Contador";
import FormularioInteractivo from "./modules/Dia_2/Formulario/components/Formulario";
import Usuarios from "./modules/Dia_3/consumo_api/components/consumir";
import ListaUser from "./modules/Dia_4/Lista_usuarios/componets/Lista";
import Perfil from "./modules/Dia_4/Perfil_Usuarios/componets/Perfil";
import "./App.css";

import { Routes, Route } from 'react-router-dom'

function App() {
  const nombre = "Maria_f";
  const productos = { Salchichon: 1500, Limon: 200, Arepa: 2000, Chocorramo: 5000 };
  return (
    <Routes>
        <Route path='' element={<Sidebar/>}>
          <Route path='/dia_1' element={ <>  <Bienvenidos nombre={nombre} /> <ListaProductos lista={productos} /> </>}/>
          <Route path='/dia_2' element={ <>  <Contador/> <FormularioInteractivo/> </>}/>
          <Route path='/dia_3' element={ <>  <Usuarios/> </>}/>
          <Route path='/dia_4' element={<ListaUser/>}/>
          <Route path='/perfil/:id' element={<Perfil/>}/>
        </Route>
    </Routes>
  );
}

export default App;
