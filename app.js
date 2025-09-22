// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    //Captura del valor del campo de entrada con el id amigo
  let nombreAmigo =  document.querySelector('#amigo').value;

    //Condicion de campo va
  if (nombreAmigo != '') {
    alert('Campo no vacio');
  } else {
    alert("Por favor, inserte un nombre.");
  }
}
