import { useState } from 'react';
import '../estilos/FormularioInicio.css';
import { getData, postData } from '../servicios/fetch';
import { useNavigate } from 'react-router-dom';
import '../estilos/Main.css'
import Modal from './Modal';
import "./Footer"


/*formulario de registro e inicio de sesion que toman los estados para validar inicio de sesion
o para registrar un usuario nuevo
*/
const FormularioInicio = ()=>{
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("login");
    const [isLoading, setIsLoading] = useState(false);

    // estados para el inicio de sesión
    const [correoInicio,setCorreoInicio] = useState("");
    const [claveInicio,setClaveInicio] = useState("")
    // estados para el registro
    const [nombreRegistro,setNombreRegistro] = useState("");
    const [correoRegistro,setCorreoRegistro] = useState("");
    const [claveRegistro,setClaveRegistro] = useState("")
    const [modalVisible,setmodalVisible]= useState(false)
    const [mensaje,setmensaje]= useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        validarUsuario()
        setTimeout(() => setIsLoading(false), 2000); 
      };
      
      const validarUsuario = async()=>{
        const credencialesUsuario = {
              correo:correoInicio,
              clave:claveInicio
        }
        const data = await getData("usuarios")

        const usuarioValido = data.find(usuario=>usuario.correo === credencialesUsuario.correo 
          && usuario.clave === credencialesUsuario.clave)

        if(credencialesUsuario.correo === "admin@gmail.com" && credencialesUsuario.clave === "admin"){
          navigate("/menu")
          sessionStorage.setItem("admin",true)
          return
        }
        if(usuarioValido){
            navigate("/inicio")
        }
        else{
            setmensaje("usuario invalido")
            setmodalVisible(true)
        }
      };
    
     const crearUsuario = async()=>{
      if(nombreRegistro.trim() === '' || correoRegistro.trim() === '' || claveRegistro.trim() === ''){
        setmensaje('Todos los campos son obligatorios')
        setmodalVisible(true) 
        return
    }else{
        const datosUsuario = {
              nombre:nombreRegistro,
              correo:correoRegistro,
              clave:claveRegistro
          }
          await postData(datosUsuario,"usuarios")
          setmensaje("usuario registrado")
          setmodalVisible(true)
      }
     }
     const cerrarModal=()=>{
      setmodalVisible(false);
     }

    return(
      
            <div className="container mt-5">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h2 className="card-title text-center mb-4">Mossi Food Service</h2>
                      <p className="text-center text-muted mb-4">Inicia sesión o regístrate para disfrutar de deliciosas comidas</p>
                      
                      <ul className="nav nav-tabs mb-4">
                        <li className="nav-item">
                          <button 
                            className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
                            onClick={() => setActiveTab('login')}
                          >
                            Iniciar Sesión
                          </button>
                        </li>
                        <li className="nav-item">
                          <button 
                            className={`nav-link ${activeTab === 'register' ? 'active' : ''}`}
                            onClick={() => setActiveTab('register')}
                          >
                            Registrarse
                          </button>
                        </li>
                      </ul>
        
                      {activeTab === 'login' && (
                        <form onSubmit={handleSubmit}>
                          <div className="mb-3">
                            <label htmlFor="loginEmail" className="form-label">Correo</label>
                            <input
                              type="email"
                              className="form-control"
                              id="loginEmail"
                              placeholder="nombre@ejemplo.com"
                              required  
                              onChange={(e)=>setCorreoInicio(e.target.value)}
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="loginPassword" className="form-label">Contraseña</label>
                            <input
                              type="password"
                              className="form-control"
                              id="loginPassword"
                              placeholder="••••••••"
                              required
                              onChange={(e)=>setClaveInicio(e.target.value)}
                            />
                          </div>
                          <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
                            {isLoading ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Cargando...
                              </>
                            ) : (
                              <>
                                <i className="bi bi-box-arrow-in-right me-2"></i>
                                Iniciar Sesión
                              </>
                            )}
                          </button>
                        </form>
                      )}
        
                      {activeTab === 'register' && (
                        <form onSubmit={handleSubmit}>
                          <div className="mb-3">
                            <label htmlFor="registerName" className="form-label">Nombre</label>
                            <input
                              type="text"
                              className="form-control"
                              id="registerName"
                              placeholder="Tu nombre"
                              required
                              onChange={(e)=>setNombreRegistro(e.target.value)}
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="registerEmail" className="form-label">Correo</label>
                            <input
                              type="email"
                              className="form-control"
                              id="registerEmail"
                              placeholder="nombre@ejemplo.com"
                              required
                              onChange={(e)=>setCorreoRegistro(e.target.value)}
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="registerPassword" className="form-label">Contraseña</label>
                            <input
                              type="password"
                              className="form-control"
                              id="registerPassword"
                              placeholder="••••••••"
                              required
                              onChange={(e)=>setClaveRegistro(e.target.value)}
                            />
                          </div>
                          <button onClick={crearUsuario} type="submit" className="btn btn-primary w-100" disabled={isLoading}>
                            {isLoading ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Cargando...
                              </>
                            ) : (
                              <>
                                <i className="bi bi-person-plus me-2"></i>
                                Crear Cuenta
                              </>
                            )}
                          </button>
                        </form>
                      )}
                      <p className="mt-4 text-center text-muted small">
                        Al hacer clic en continuar, aceptas nuestros{" "}
                        <a href="/terms" className="text-decoration-none">Términos de servicio</a> y{" "}
                        <a href="/privacy" className="text-decoration-none">Política de privacidad</a>.
                      </p>
                      <Modal visible={modalVisible} cerrarModal={cerrarModal}>
                        <p>{mensaje}</p>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
                      

            </div>
          );
}
export default FormularioInicio
