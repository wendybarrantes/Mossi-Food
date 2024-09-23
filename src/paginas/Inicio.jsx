import Header from "../componentes/Header"
import { getDestacadosData } from "../servicios/fetch"
import { useState,useEffect } from "react"
import ListaCards from "../componentes/ListaCards"
import Hero from "../componentes/Hero"



const Inicio = ()=>{
    // Llamamos al estado y lo inicializamos como un arreglo vacío (para después asignarle los datos)
    const [platillosDestacados,setPlatillosDestacados] = useState([])

    // Cargamos el useEffect con un método adentro, el método hace un llamado al endpoint productos con el get data
    useEffect(()=>{
        const traerPlatillos = async()=>{
            const datos = await getDestacadosData("productos")
            setPlatillosDestacados(datos) // Agrega todos los datos del llamado, al estado platillos
        }
        traerPlatillos()
    },[])
    return(
    <>
        <footer/>

        <Header/>
        <Hero/>


            <h1>Destacados</h1>
            <ListaCards platillos={platillosDestacados} mostrarCarrito={true}/> 
            {/* Se muestran en la página todos los datos que venían del estado */}
        </>
    )
}
export default Inicio