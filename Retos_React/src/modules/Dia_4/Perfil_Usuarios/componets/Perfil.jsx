// import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../../services/api";
import  '../utils/perfil.css'

export default function Perfil() {
  const { id } = useParams(); // Obtener el ID de la URL
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`users/${id}`) // Llamada a la API con el ID
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al obtener el perfil:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Cargando perfil...</div>;
  }

  if (!user) {
    return <div>No se encontró el usuario.</div>;
  }

  return (
    <div className='content'>
      <h2>Perfil del Usuario</h2>
      <p><strong>Nombre:</strong> {user.name || "No disponible"}</p>
      <p><strong>Email:</strong> {user.email || "No disponible"}</p>
      <p><strong>Apodo:</strong> {user.username || "No disponible"}</p>
      <p><strong>Telefono:</strong> {user.phone || "No disponible"}</p>
      <p><strong>Compañia:</strong> {user.company?.name || "No disponible"}</p>
    </div>
  )
}
