// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Con esto se valida que el campo no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Se Agrega el nombre al array
    amigos.push(nombreAmigo);

    // Se Limpia el campo de entrada
    inputAmigo.value = "";

    // Se Actualiza la lista de nombres en la página
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la página
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
// Limpia la lista antes de actualizar
    listaAmigos.innerHTML = ""; 

    // Recorre el array de amigos y agrega cada uno a la lista
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Verifica si hay amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Por favor, agrega algunos nombres.");
        return;
    }

    // Selecciona un nombre aleatorio del array
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Muestra el resultado en la página
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}