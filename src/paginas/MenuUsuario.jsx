import Header from "../componentes/Header"
import ListaCards from "../componentes/ListaCards"
import { useEffect, useState } from "react";
import { getData, getFilterData } from "../servicios/fetch";
import Footer from "../componentes/Footer";
import HeroMenuUsuario from "../componentes/HeroMenuUsuario";


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
        <HeroMenuUsuario/>

        <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <label htmlFor="categoria" style={{ marginBottom: '10px', fontSize: '18px', display: 'block', fontFamily:'popins, sans-serif' }}>
                    Filtrar por categoría:
                </label>
                <select 
                    id="categoria" 
                    onChange={(e) => setCategoria(e.target.value)} 
                    style={{
                        padding: '10px',
                        border: '1px solid #4E342E',
                        borderRadius: '5px',
                        backgroundColor: '#81c784',
                        cursor: 'pointer',
                        fontSize: '16px',
                        marginBottom: '20px',
                        fontFamily:'popins, sans-serif',
                        color: '#ffff',
                        textAlign:'center'
                        
                    }}
                >
                    <option value="">Todo el menú</option>
                    <option value="entrada">Entrada</option>
                    <option value="postre">Postre</option>
                    <option value="bebida">Bebida</option>
                    <option value="plato_principal">Plato principal</option>
                </select>
            </div>

       

       


        {categoria == "" ? <ListaCards platillos={platillos}/> : <ListaCards platillos={platillosFiltrados} mostrarCarrito={true}/>}

        <Footer/>
        </>
    )
}
export default MenuUsuario