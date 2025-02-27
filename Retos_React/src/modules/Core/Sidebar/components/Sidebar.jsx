import { useNavigate, Outlet } from 'react-router-dom'


export default function Sidebar() {
    const navigate = useNavigate()
    return (
        <>
            <div className="titulo_p">
                <h1 className="actividad">Actividades de React</h1>
                <button className="dias" onClick={() => navigate('/dia_1')}>Día 1</button>
                <button className="dias" onClick={() => navigate('/dia_2')}>Día 2</button>
                <button className="dias" onClick={() => navigate('/dia_3')}>Día 3</button>
                <button className="dias" onClick={() => navigate('/dia_4')}>Día 4</button>
            </div>
            <div className="flex">
                <Outlet />
            </div>
        </>
    )
}
