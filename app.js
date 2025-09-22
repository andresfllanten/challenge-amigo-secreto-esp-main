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
    console.log(amigos);
  } else {
    alert("Por favor, inserte un nombre.");
  }
}
