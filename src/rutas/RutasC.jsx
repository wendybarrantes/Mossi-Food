import {Route, BrowserRouter as  Router, Routes } from "react-router-dom"
import Inicio from "../paginas/Inicio"
import MenuUsuario from "../paginas/MenuUsuario"
import AgregarProducto from "../paginas/AgregarProducto"
import Menu from "../paginas/Menu"
import MenuPrivado from "../componentes/MenuPrivado"
import Contacto from "../paginas/Contacto"
import Carrito from "../paginas/Carrito"
import Login_Registro from "../paginas/Login_Registro"
import SobreNosotros from "../paginas/SobreNosotros"



const RutasC  = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login_Registro/>}/>
                
                <Route path="/inicio" element={<Inicio/>}/>

                <Route path="/menuUsuario" element={<MenuUsuario/>}/>

                <Route path="/agregar" element={<AgregarProducto/>}/>

                <Route path="/contacto" element={<Contacto/>}/>

                <Route path="/menu" element={<MenuPrivado> <Menu/>  </MenuPrivado>}/>

                <Route path="/carrito" element={<Carrito/>}/>

                <Router path="/sobreNosotros" element={<SobreNosotros/>}/>

            </Routes>
        </Router>
    )
}
export default RutasC