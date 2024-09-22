/*variable global que contiene la api*/ 
const API_URL = "http://localhost:3000/"


/* metodo para enviarle datos a la api, le doy un objeto para indicarle la
estructura
*/ 
const postData = async(obj,endpoint)=>{
    try {
        const peticion = await fetch(API_URL + endpoint,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        const respuesta = await peticion.json()
        console.log(respuesta)
    } catch (error) {
        console.error(error)
    }
}
export {postData}

/*creacion del metodo get. funcion asincrona que me permite traer los datos de la api, le doy como parametro el endpoint para
poder reutilizar la funcion con los otros endopints. uso try catch para prevenir errores. Pido los datos por medio del fetch indicando como 
parametro la URL a la que se va a conectar mas el enpoint. luego me da los datos en formato json.
*/ 
const getData = async(endpoint)=>{
  try {
      const peticion = await fetch(API_URL + endpoint);
      const datos = await peticion.json();
      return datos;
  } catch (error) {
    console.error(error);
  }
}
export {getData}


/*creacion de la funcion para traer datos segun una condicion. utilizando cuery params para darle un
 filtro segun cantidad al metodo e indicarle que solo me de 5 datos.
*/ 
const getDestacadosData = async(endpoint)=>{
    try {
        const peticion = await fetch(API_URL + endpoint+"?_page=1&_limit=5");
        const datos = await peticion.json();
        return datos;
    } catch (error) {
      console.error(error);
    }
  }
  export {getDestacadosData}


  /* se hace uso del cuery params para traer datos segun un filtro el atributo */ 

const getFilterData = async(endpoint,filtro,parametro)=>{
    try {
        const peticion = await fetch(`${API_URL}${endpoint}/?${filtro}=${parametro}`);
        const datos = await peticion.json();
        return datos;
    } catch (error) {
      console.error(error);
    }
  }
export {getFilterData}

const getCartData = async(endpoint,id)=>{
    try {
        const peticion = await fetch(API_URL + endpoint+"/"+id);
        const datos = await peticion.json();
        return datos;
    } catch (error) {
      console.error(error);
    }
  }
  export {getCartData}

/* creacion de la funcion para eliminar los datos, le doy un id para que solamente se elimine el dato 
seleccionado*/ 

const deleteData = async(endpoint,id)=>{
    try {
        const peticion = await fetch(`${API_URL}${endpoint}/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const respuesta = await peticion.json()
        console.log(respuesta)
    } catch (error) {
        console.error(error);
    }
}
export {deleteData}

/* metodo de actualizacion que recibe la estructura y a quien se va a actualizar*/ 

const putData = async(endpoint,obj,id)=>{
    try {
        const peticion = await fetch(`${API_URL}${endpoint}/${id}`,{
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(obj)
        })
        const data = await peticion.json()
        console.log(data);
        
    } catch (error) {
        console.error(error);
    }
}
export {putData}