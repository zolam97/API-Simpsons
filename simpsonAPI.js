
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
        let nombre = document.getElementById('nombre');
        nombre.innerHTML = data.docs[randomPersonaje].Nombre;
        let imagen = document.getElementById('imagen');
        imagen.setAttribute('src',data.docs[randomPersonaje].Imagen);
        let historia = document.getElementById('historia');
        historia.innerHTML = "<strong>Historia: </strong>" + data.docs[randomPersonaje].Historia;
        let estado = document.getElementById('estado');
        estado.innerHTML ="<strong>Estado: </strong>" + data.docs[randomPersonaje].Estado;
        let ocupacion = document.getElementById('ocupación');
        ocupacion.innerHTML = "<strong>Ocupación: </strong>" + data.docs[randomPersonaje].Ocupacion;

    }
    catch(error){
        alert(error);
    }

})