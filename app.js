
//Se Inicia declarando una variable de tipo array
let amigos = [];

function agregarAmigo() {

    //Como primer paso se usa variable let campoEntrada para capturar los datos que ingrese el usuario
    let campoEntrada = document.getElementById("amigo");

    //Luego se utiliza campoEntrada.value.trim() para asegurarse que el espacio no esté vacío y se eliminan posibles espacios en blanco
    //que puedan llevar a la falla del código
    let nombre = campoEntrada.value.trim();

    //Se usa una condición con if else para poder dar una alerta en caso de que el usuario no escriba un nombre y
    // push para que se agregue al array
    if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
    }else{
        amigos.push(nombre);     
        //Se utiliza console.log para comprobar la lista de nombres ingresados
        console.log("Amigos agregados:", amigos);
        //Se declara campoEntrada.value = "" para ingresar un nuevo nombre sin estar borrando el nombre anterior
        campoEntrada.value = "";
        listaAmigo();
    }
}

// Función para mostrar la lista de amigos en el HTML
function listaAmigo() {
    
  // Obtener el elemento de la lista por su ID
  const lista = document.getElementById("listaAmigos");
  
  // Limpiar la lista existente para evitar duplicados
  lista.innerHTML = "";
  
  // Iterar sobre el arreglo de amigos
  for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i];
    
    // Crear un nuevo elemento de lista (<li>)
    const nuevoElemento = document.createElement("li");
    
    // Agregar el nombre del amigo como texto
    nuevoElemento.textContent = amigo;
    
    // Agregar el <li> a la lista 
    lista.appendChild(nuevoElemento);
    }
}

function sortearAmigo() {
    //Se declara función if para validar que "amigos" no está vacío
    if (amigos.length > 0) {

    //Se define Math.floor y Math.random para escoger un nombre al azar de la lista de amigos
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //Se obtiene el nombre sorteado desde la variable anterior y se muestra en pantalla el resultado
    let nombreAleatorio = amigos[indiceAleatorio];    
    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML= nombreAleatorio;
    }
}