import Header from "../componentes/Header"
import { getDestacadosData } from "../servicios/fetch"
import { useState,useEffect } from "react"
import ListaCards from "../componentes/ListaCards"
const Inicio = ()=>{
    const [platillos,setPlatillos] = useState([])
    useEffect(()=>{
        const traerPlatillos = async()=>{
            const datos = await getDestacadosData("productos")
            setPlatillos(datos)
        }
  
        traerPlatillos()
    },[platillos])
    return(
        <>
        <Header/>
            <h1>Destacados</h1>
            <ListaCards platillos={platillos}/>
        </>
    )
}
export default Inicio