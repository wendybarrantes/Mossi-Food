import { useEffect, useState } from "react";
import { getCartData } from "../servicios/fetch";
import ListaCards from "../componentes/ListaCards";

const Carrito = () => {
    const [platillosCarrito,setPlatillosCarrito] = useState([])

    useEffect(()=>{
        const mostrarCarrito = async()=>{
            const idPlatillos = JSON.parse(localStorage.getItem("platillos")) || [];
            let nuevoCarrito = []
            for(let i = 0; i< idPlatillos.length; i++){
                const platillo = await getCartData("productos",idPlatillos[i])
                nuevoCarrito.push(platillo)
            }
            setPlatillosCarrito(nuevoCarrito)
        }
        mostrarCarrito()
    },[])

    return (
        <div>
            <h1>Carrito</h1>
            <ListaCards platillos={platillosCarrito} mostrarCarrito={false}/>
        </div>
    );
}
export default Carrito;