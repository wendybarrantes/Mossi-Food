/* eslint-disable react/prop-types */
const esAdmin=()=>{
    const localAdmin = localStorage.getItem('admin');
    return localAdmin
}
const MenuPrivado = ({children})=>{
    return esAdmin() ? children : <h1>Página no accesible. No tienes los permisos suficientes ERROR 403</h1>
}
export default MenuPrivado;