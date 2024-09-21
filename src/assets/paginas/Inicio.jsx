import Header from "../componentes/Header"
import ListaCards from "../componentes/ListaCards"
import { useEffect, useState } from "react";
import { getData } from "../servicios/fetch";

const Inicio = ()=>{
    const [platillos,setPlatillos] = useState([])
    useEffect(()=>{
        const traerPlatillos = async()=>{
            const datos = await getData("productos")
            setPlatillos(datos)
        }
        traerPlatillos()
    },[platillos])
    return(
        <>
        <Header/>
            <h1>Le damos la bienvenida a Mossi Food Service ❤️</h1>
        
        <h2>Nuestro menu es</h2>
        <ListaCards platillos={platillos}/>
        </>
    )
}
export default Inicio