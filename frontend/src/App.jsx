import Bienvenidos from './modules/Bienvenida/components/Bienvenida'
import ListaProductos from './modules/Productos/components/Lista';
import './App.css'

function App() {
  
  const nombre = "Maria_f"
  const productos = {"Salchichon":1500, "Limon":200, "Arepa":2000, "Chocorramo":5000};
  return (
    <>
    {/* dar la bienvenida reto 1 */}
    <div className='content'>
      <h1> Bienvenid@</h1><Bienvenidos nombre= {nombre} ></Bienvenidos>
    </div>
    {/* fin dar la bienvenida */}
    
      {/* Mostrar la lista de los productos */}
      <div className="productos-content">
        <h2 className="titulo">Lista de Productos</h2>
      <ListaProductos lista={productos}></ListaProductos>
      </div>
    </>
  )
}

export default App
