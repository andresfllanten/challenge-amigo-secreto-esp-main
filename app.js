// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    //Captura del valor del campo de entrada con el id amigo
  let nombreAmigo =  document.querySelector('#amigo').value;

    //Validacion campo de entrada
  if (nombreAmigo != '') {
    //Actualizacion array de amigos
    amigos.push(nombreAmigo);
    
    //La funcion limpiarCaja limpia el campo de entrada
    limpiarCaja();

  } else {
    alert("Por favor, inserte un nombre.");
  }
}

function mostrarAmigos(){
    //Obtencion del elemento de la lista
    let lista = document.querySelector('#listaAmigos').value;
    console.log(lista);
}


function limpiarCaja() {
    //Limpia el campo de entrada y le da un valor de vacio
    document.querySelector('#amigo').value = '';
}