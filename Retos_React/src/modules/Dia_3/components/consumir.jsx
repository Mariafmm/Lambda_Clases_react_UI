import api from "../../../services/api";
import {useEffect, useState} from "react";



function Usuarios(){
    const [data, setData] = useState(null);
    const [loading, setLoad] = useState(true);

    useEffect(() => {
        api.get('users')
        .then(result =>{
            setData(result.data)
            console.log(result)
            setLoad(false);
        })
        .catch(error => {
            console.error("<error al obtener los datos", error);
            setLoad(false);
        });
        return() =>{

        };
    }, []);

    if (loading){
        return <div>Loading...</div>
    }
    return (
        <div className="content">
            <h2>Lista de usuarios</h2>
        <ul className="lista" >
            {data.map((result)=>(
                <li  key={result.id}>{result.name}
             <ul>
                <li key={result.id}>{result.email}</li>
             </ul>
             </li>
            ))}
        </ul>
        </div>
    )
       
} 

export default Usuarios;