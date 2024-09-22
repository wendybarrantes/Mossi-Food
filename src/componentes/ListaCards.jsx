import { deleteData } from "../servicios/fetch";
import CardPlatillo from "./CardPlatillo";

/*estrucura de la lista de cards, en la que se arma cada card y se le pasan los datos que estan la api
segun el iterador.
*/ 

const ListaCards = ({ platillos, mostrar, editarPlatillo,mostrarCarrito }) => {

    const moverCarrito=(platillo)=>{
        let idPlatillos = JSON.parse(localStorage.getItem("platillos")) || [];
        idPlatillos.push(platillo.id);
        localStorage.setItem("platillos",JSON.stringify(idPlatillos));
    }
    return (
        <div className="d-flex">
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
                        agregarCarrito={()=>moverCarrito(platillo)}
                    />
                );
            })}
        </div>
    );
};

export default ListaCards;
