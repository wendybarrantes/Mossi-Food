import React from 'react';
import "../estilos/Modal.css"


const Modal = ({ visible, cerrarModal, children }) => {
    if (!visible) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="mensaje">
                {children}
                </div>
                <button onClick={cerrarModal} className="close-button">Cerrar</button>
            </div>
        </div>
    );
};

export default Modal;
