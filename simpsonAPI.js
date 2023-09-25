
let url = "https://apisimpsons.fly.dev/api/personajes?limit=650&page=1";
const boton = document.getElementById('boton');

boton.addEventListener('click', async function(){
    
    try{
        const responseAPI = await fetch(url);
        if(!responseAPI.ok){ 
            throw new Error("Error en la apertura de la API: "+responseAPI.status);
        }
        //parseo a json la respuesta
        const data = await responseAPI.json();

        //genero numero random para seleccion de personaje
        const randomPersonaje = Math.floor(Math.random()*650);

        //seteo datos del json
        document.getElementById('nombre').innerHTML = data.docs[randomPersonaje].Nombre;
        document.getElementById('imagen').setAttribute('src',data.docs[randomPersonaje].Imagen);
        document.getElementById('historia').innerHTML = "<strong>Historia: </strong>" + data.docs[randomPersonaje].Historia;
        document.getElementById('estado').innerHTML ="<strong>Estado: </strong>" + data.docs[randomPersonaje].Estado;
        document.getElementById('ocupación').innerHTML = "<strong>Ocupación: </strong>" + data.docs[randomPersonaje].Ocupacion;

    }
    catch(error){
        alert(error);
    }
})