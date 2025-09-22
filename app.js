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
    mostrarAmigos();

  } else {
    alert("Por favor, inserte un nombre.");
  }
}

function mostrarAmigos(){
    //Obtencion del elemento de la lista
    let lista = document.querySelector('#listaAmigos');
    //Limpieza lista existente
    lista.innerHTML = "";

    //Iteracion sobre el arreglo amigos
    for (let index = 0; index < amigos.length; index++) {
        //Creacion nuevo elemento <li>
        const nuevoElemento = document.createElement('li');

        //Asignar nombres del array amigos al contenido <li>
        nuevoElemento.textContent = amigos[index];

        //Agregar el nuevo elemento <li> a la lista padre
        lista.appendChild(nuevoElemento);
    }

}

function sortearAmigo() {
    
    let resultado = document.getElementById('resultado');

    //Validar amigos disponibles 
    if (amigos.length === 0) {
        resultado.innerHTML= 'No hay lista de amigos, Introduzca nombres por favor.'
        return ;
    } 
    //Generar el indice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
}

function limpiarCaja() {
    //Limpia el campo de entrada y le da un valor de vacio
    document.querySelector('#amigo').value = '';
}