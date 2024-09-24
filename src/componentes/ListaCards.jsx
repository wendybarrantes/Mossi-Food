import { deleteData } from "../servicios/fetch";
import CardPlatillo from "./CardPlatillo";

/*estrucura de la lista de cards, en la que se arma cada card y se le pasan los datos que estan en la api
segun el iterador.
*/ 
const ListaCards = ({ platillos, mostrar, editarPlatillo,mostrarCarrito }) => {


    /* funcion para guardar los ids de los platillos en el sessionStorage */ 
    const moverCarrito=(compra)=>{
        let idPlatillos = JSON.parse(sessionStorage.getItem("platillos")) || [];
        idPlatillos.push(compra.id);
        sessionStorage.setItem("platillos",JSON.stringify(idPlatillos));
    }
    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center" 
        style={{minHeight:'100vh',gap:'20px'}}>
       

            {platillos.map(platillo => {
                return (
                    <CardPlatillo
                        key={platillo.id}
                        img={platillo.imagen}
                        nombre={platillo.nombre}
                        precio={platillo.precio}
                        descripcion={platillo.descripcion}
                        categoria={platillo.categoria}
                        mostrar={mostrar}
                        mostrarCarrito={mostrarCarrito}
                        eliminarPlatillo={() => {deleteData("productos", platillo.id); }}
                        editarPlatillo={() => {editarPlatillo(platillo) }} 
                        agregarCarrito={()=>moverCarrito(platillo)} // Se ejecuta la función para guardar el id de cada platillo
                    />
                );
            })}
        </div>
    );
};

export default ListaCards;
