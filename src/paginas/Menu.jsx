import { useEffect, useState } from "react";
import { getData, putData } from "../servicios/fetch";
import ListaCards from "../componentes/ListaCards";
import { useNavigate } from "react-router-dom";
import Header from "../componentes/Header";

//estados para la creacion del menu del administrador.
const Menu = () => {
    const navigate = useNavigate();
    const [platillos, setPlatillos] = useState([]);
    const [platilloEdit, setPlatilloEdit] = useState(null);
    const [formData, setFormData] = useState({
        imagen: '',
        nombre: '',
        precio: '',
        descripcion: '',
        categoria: '',
    });
    
//las dependencias cambian el useEffect se vuelve a ejecutar.
    useEffect(() => {
        const traerPlatillos = async () => {
            const datos = await getData("productos");
            setPlatillos(datos);
        };
        traerPlatillos();
    }, [platillos]);


//funcion que muestra el formulario y rellena los campos con la informacion previa a la edicion.
    const mostrarFomulario = (platillo) => {
        setPlatilloEdit(platillo);
        setFormData({
            imagen: platillo.imagen,
            nombre: platillo.nombre,
            precio: platillo.precio,
            descripcion: platillo.descripcion,
            categoria: platillo.categoria,
        });
    };
//confirma la edicion, obtengo la informacion previa y los actulizo por medio de la llave valor.
    const confirmarEdit = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
// Enviar los cambios a la api
    const subirCambio = async (e) => {
        e.preventDefault(); // evita la carga del formulario y que los datos se envien vacios
        await putData("productos", formData,platilloEdit.id); // se ejecuta el put data, con el endpoint, el objeto y el del platillo
        setPlatilloEdit(null); // se oculta el formulario 
    };

    return (
        <div>

            <Header/>
            <h1>Menu</h1>
            <ListaCards 
                platillos={platillos} 
                mostrar={true} 
                editarPlatillo={mostrarFomulario} 
            />


            <button className="btn btn-primary" onClick={() => { navigate("/agregar") }}>
                Agregar un nuevo producto
            </button>

            {platilloEdit && (
                <form onSubmit={subirCambio}>
                    <h2>Editar Platillo</h2>
                    <div>
                        <label>Imagen:</label>
                        <input
                            type="file"
                            name="imagen"
                            onChange={confirmarEdit}
                        />
                    </div>
                    <div>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={confirmarEdit}
                        />
                    </div>
                    <div>
                        <label>Precio:</label>
                        <input
                            type="number"
                            name="precio"
                            value={formData.precio}
                            onChange={confirmarEdit}
                        />
                    </div>
                    <div>
                        <label>Descripción:</label>
                        <textarea
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={confirmarEdit}
                        />
                    </div>
                    <div>
                        <label>Categoría:</label>
                        <input
                            type="text"
                            name="categoria"
                            value={formData.categoria}
                            onChange={confirmarEdit}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Confirmar</button>
                    <button type="button" className="btn btn-secondary" onClick={() => setPlatilloEdit(null)}>Cancelar</button>
                </form>
            )}
        </div>
    );
};

export default Menu;
