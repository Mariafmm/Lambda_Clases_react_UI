import api from "../../../../services/api";
import React, {useEffect, useState} from "react";
import {useNavigate, Outlet} from 'react-router-dom'

function ListaUser(){
    const navigate = useNavigate()
    const [data, setData] = useState(null);
    const [loading, setLoad] = useState(true);

    useEffect(() => {
        api.get('users')
        .then(result =>{
            setData(result.data)
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
                <li onClick={()=>navigate(`/perfil/${result.id}`)} key={result.id}>Perfil</li>
             </ul>
             </li>
            ))}
        </ul>
        
        <div className="flex">
            <Outlet/>
        </div>
        </div>
    )
       
} 

export default ListaUser;