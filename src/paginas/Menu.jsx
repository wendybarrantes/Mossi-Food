import { useEffect, useState } from "react";
import { getData, putData } from "../servicios/fetch";
import ListaCards from "../componentes/ListaCards";
import { useNavigate } from "react-router-dom";

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

    useEffect(() => {
        const traerPlatillos = async () => {
            const datos = await getData("productos");
            setPlatillos(datos);
        };
        traerPlatillos();
    }, []);

    const handleEditClick = (platillo) => {
        setPlatilloEdit(platillo);
        setFormData({
            imagen: platillo.imagen,
            nombre: platillo.nombre,
            precio: platillo.precio,
            descripcion: platillo.descripcion,
            categoria: platillo.categoria,
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await putData("productos", formData,platilloEdit.id);
        setPlatilloEdit(null); 
        const datosActualizados = await getData("productos"); 
        setPlatillos(datosActualizados);
    };

    return (
        <div>
            <h1>Menu</h1>
            <ListaCards 
                platillos={platillos} 
                mostrar={true} 
                editarPlatillo={handleEditClick} 
            />

            <button className="btn btn-primary" onClick={() => { navigate("/agregar") }}>
                Agregar un nuevo producto
            </button>

            {platilloEdit && (
                <form onSubmit={handleSubmit}>
                    <h2>Editar Platillo</h2>
                    <div>
                        <label>Imagen:</label>
                        <input
                            type="file"
                            name="imagen"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Precio:</label>
                        <input
                            type="number"
                            name="precio"
                            value={formData.precio}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Descripción:</label>
                        <textarea
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Categoría:</label>
                        <input
                            type="text"
                            name="categoria"
                            value={formData.categoria}
                            onChange={handleChange}
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
