import { useEffect, useState } from "react";
import { getCartData } from "../servicios/fetch";
import ListaCards from "../componentes/ListaCards";
import Header from "../componentes/Header"
import Footer from "../componentes/Footer"
import "../estilos/Carrito.css"

//funcion para almacenar las compras en la pag carrito.
/*utilizando el useEffect para que carguen los datos cuando cargue la pagina,
traigo los datos del sessionStorage y segun la cantidad se muestran en la pagina*/
const Carrito = () => {
    const [platillosCarrito,setPlatillosCarrito] = useState([])

    useEffect(()=>{
        const mostrarCarrito = async()=>{
            const idPlatillos = JSON.parse(sessionStorage.getItem("platillos")) || [];
            let nuevoCarrito = []
            for(let i = 0; i< idPlatillos.length; i++){
                const platillo = await getCartData("productos",idPlatillos[i])
                nuevoCarrito.push(platillo)
            }
            setPlatillosCarrito(nuevoCarrito)
        }
        mostrarCarrito()
    },[])

    //importo la listaCards con la propiedad y lo igualo al estado.
    return (
        <div>
            <Header/>

            <h1 className="compras-car"> Carrito de compras </h1>
            <ListaCards platillos={platillosCarrito} />

            <Footer/>

        </div>
    );
}
export default Carrito;