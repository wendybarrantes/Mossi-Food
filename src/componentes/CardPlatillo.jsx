/* eslint-disable react/prop-types */
import '../estilos/CardPlatillo.css'
const CardPlatillo = ({img,nombre,precio,descripcion,categoria,eliminarPlatillo,mostrarEliminar}) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={img} alt={nombre} />
            </div>
            <div className="product-info">
                <h2 className="product-name">{nombre}</h2>
                <p className="product-price">${precio}</p>
                <p className="product-description">{descripcion}</p>
                <span className="product-category">{categoria}</span>
                {mostrarEliminar &&
                <button className='btn btn-danger' onClick={eliminarPlatillo}>Eliminar</button>
                }
                </div>
        </div>
    );
};

export default CardPlatillo;