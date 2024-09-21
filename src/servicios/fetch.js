const API_URL = "http://localhost:2929/"

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