import '../utils/contador.css'
import { useState } from "react";

function Contador() {
    const [count, setCount] = useState(0); 

    return(
        <div className='content contador'>
        <h2>Contador: {count}</h2>
        <hr/>
        <button className='suma' onClick={() =>setCount(count + 1)}>Incrementar</button>
        <button className='resta' onClick={() =>setCount(count - 1)}>decrementar</button>
        <button onClick={() =>setCount(0)}>🔄</button>
        </div>
    )
}
export default Contador;