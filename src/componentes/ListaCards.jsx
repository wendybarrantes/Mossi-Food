/* eslint-disable react/prop-types */
import { deleteData } from "../servicios/fetch"
import CardPlatillo from "./CardPlatillo"

const ListaCards = ({platillos,mostrarEliminar})=>{
    return(
        <div className="d-flex">
            {platillos.map(platillo=>{
                return(
                    <CardPlatillo
                    key={platillo.id}
                    img={platillo.imagen}
                    nombre={platillo.nombre}
                    precio={platillo.precio}
                    descripcion={platillo.descripcion}
                    categoria={platillo.categoria}
                    mostrarEliminar={mostrarEliminar}
                    eliminarPlatillo={()=>{deleteData("productos",platillo.id)}}
                    />
                )
            })}
        </div>
    )
}
export default ListaCards