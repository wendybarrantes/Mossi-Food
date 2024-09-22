/*creacion de la funcion ruta privada, me comunico con el localStorage
para conocer el valor de admin.
*/
const esAdmin=()=>{
    const localAdmin = localStorage.getItem('admin');
    return localAdmin
}
/*
creacion del componente utilizando el if ternario para validar el acceso al administrador 
al menu pricado.
*/ 
const MenuPrivado = ({children})=>{
    return esAdmin() ? children : <h1>Página no accesible. No tienes los permisos suficientes ERROR 403</h1>
}
export default MenuPrivado;