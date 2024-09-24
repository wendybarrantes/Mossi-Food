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
                        backgroundColor: '#A3D9FF',
                        cursor: 'pointer',
                        fontSize: '16px',
                        marginBottom: '20px',
                        fontFamily:'popins, sans-serif',
                        
                    }}
                >
                    <option value="">Todo el menú</option>
                    <option value="entrada">Entrada</option>
                    <option value="postre">Postre</option>
                    <option value="bebida">Bebida</option>
                    <option value="principal">Principal</option>
                </select>
            </div>

       

        <div style={{ textAlign: 'center', margin: '100px 0' }}>
        <h2 style={{ fontSize: '40px', color: '#4E342E', position: 'relative',  fontFamily:'popins,sans-serif'}}>
        <span style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>Destacados</span>
        <div style={{ width: '50%', height: '4px', backgroundColor: '#4E342E', margin: '10px auto' }}></div>
        </h2>
        </div>


        {categoria == "" ? <ListaCards platillos={platillos}/> : <ListaCards platillos={platillosFiltrados}/>}

        <Footer/>
        </>
    )
}
export default MenuUsuario