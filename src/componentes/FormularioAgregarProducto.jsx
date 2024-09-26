import { useState } from 'react'
import { postData } from '../servicios/fetch'
import "../estilos/FormularioAgregarProductos.css"
import Modal from './Modal'

/*creo un estado que hace referencia a cada uno de los inputs y estos se actualizan con el evento de 
los inputs.
Luego estos datos se mandan a la api.
*/ 
const FormularioAgregarProducto = ()=>{
    const [img,setImg] = useState('')
    const [nombrePlato,setNombrePlato] = useState('')
    const [precio,setPrecio]= useState('')
    const [descripcion,setDescripcion]=useState('')
    const [categoria,setCategoria] = useState('')
    const [modalVisible,setmodalVisible]=useState(false);
    const [mensaje,setmensaje]=useState('')


const agregarPlatillo = async()=>{
if(img.trim() === '' || nombrePlato.trim() === '' || precio.trim() === '' || descripcion.trim() === '' || categoria.trim() === ''){
setmensaje('Todos los campos son obligatorios') 
setmodalVisible(true);
  return;
        }else{
            const platillo = {
                imagen: img,
                nombre: nombrePlato,
                precio: precio,
                descripcion: descripcion,
                categoria: categoria
            }
          await postData(platillo,"productos");
          setmensaje("se agrego correctamente");
          setmodalVisible(true);
        }
    };

// funcion para subir imagen en base64.
  const subirImg = () => {
    const file = document.getElementById("upload-file").files[0];
    const reader = new FileReader();
    if (file) {
        reader.onload = function(e) {
            setImg(e.target.result);
        };
        reader.readAsDataURL(file);
    }
};
const cerrarModal = ()=>{
  setmodalVisible(false);
};
    return (
        <div className="form-container">
          <h2>Agregar Nuevo Plato</h2>
          <form>
            <div className="form-group">
              <label htmlFor="image">Archivo de la Imagen:</label>
              <input
                type="file"
                id="upload-file"
                name="image"
                accept="image/x-png,image/gif,image/jpeg"
                onChange={subirImg}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Nombre del Plato:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={(e)=>setNombrePlato(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Precio:</label>
              <input
                type="number"
                id="price"
                name="price"
                step="0.01"
                min="0"
                required
                onChange={(e)=>setPrecio(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Descripción:</label>
              <textarea
                id="description"
                name="description"
                required
                onChange={(e)=>setDescripcion(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="category">Categoría:</label>
              <select
                id="category"
                name="category"
                required
                onChange={(e)=>setCategoria(e.target.value)}
              >
                <option value="">Selecciona una categoría</option>
                <option value="entrada">Entrada</option>
                <option value="plato_principal">Plato Principal</option>
                <option value="postre">Postre</option>
                <option value="bebida">Bebida</option>
              </select>
            </div>
            <button type="button" onClick={agregarPlatillo}>Agregar Plato</button>
          </form>

          <Modal visible={modalVisible} cerrarModal={cerrarModal}>
            <p>{mensaje}</p>
          </Modal>
        </div>
      )
    }
export default FormularioAgregarProducto