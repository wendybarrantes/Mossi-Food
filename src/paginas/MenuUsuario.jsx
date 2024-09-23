import Header from "../componentes/Header"
import ListaCards from "../componentes/ListaCards"
import { useEffect, useState } from "react";
import { getData, getFilterData } from "../servicios/fetch";
import Footer from "../componentes/Footer";

const MenuUsuario = ()=>{
    const [platillos,setPlatillos] = useState([])
    const [platillosFiltrados,setPlatillosFiltrados] = useState([])
    const [categoria,setCategoria] = useState("")

    useEffect(()=>{
        const traerPlatillos = async()=>{
            const datos = await getData("productos")
            setPlatillos(datos)
        }
        const traerPlatillosFiltrados = async()=>{
            const datos = await getFilterData("productos","categoria",categoria)
            setPlatillosFiltrados(datos)
        }
        traerPlatillos()
        traerPlatillosFiltrados()
    },[platillos])
    return(
        <>
        <Header/>
            <h1>Le damos la bienvenida a Mossi Food Service ❤️</h1>
            <select onChange={(e)=>setCategoria(e.target.value)}>
            <option  selected value={""}>Todo el menu</option>
            <option value={"entrada"}>Entrada</option>
            <option value={"postre"}>Postre</option>
            <option value={"bebida"}>Bebidas</option>
            <option value={"principal"}>Principal</option>
        </select>
        
        <h2>Destacados</h2>
        {categoria == "" ? <ListaCards platillos={platillos}/> : <ListaCards platillos={platillosFiltrados}/>}

        <Footer/>

        </>
    )
}
export default MenuUsuario