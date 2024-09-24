import Footer from "../componentes/Footer"
import Header from "../componentes/Header"
import "../estilos/SobreNostros.css"

const SobreNosotros = ()=>{
    return(
        <>
        <Header/>

        <h1  className="titulo"> Sobre Nosotros</h1>

        <p className="descripcion">En Mossi Food Service, somos un emprendimiento apasionado por la gastronomía que nació en 2021 con el objetivo de llevar sabores auténticos a cada mesa.
             Nos dedicamos a ofrecer una experiencia culinaria única, combinando recetas tradicionales con ingredientes frescos y de calidad. Nuestro equipo de chefs talentosos trabaja incansablemente para crear platillos que no solo satisfacen el paladar, sino que también cuentan una historia. En Mossi Food Service, creemos en la importancia de un servicio excepcional y en la creación de momentos memorables para nuestros clientes. 
            ¡Descubre con nosotros un mundo de sabores que deleitará tus sentidos!</p>
        
    


        <Footer/>
        </>
    )
}
export default SobreNosotros