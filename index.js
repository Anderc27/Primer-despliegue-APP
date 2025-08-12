let contador = 0; // Inicializa la variable contador en 0

const contadorDisplay = document.getElementById('contador'); // Obtiene el elemento donde se mostrará el contador
const btnClick = document.getElementById('btn-click'); // Obtiene el click del botón para incrementar el contador
const btnReset = document.getElementById('btn-reset'); // Obtiene el click del botón para resetear el contador
const fechaElement = document.getElementById('fecha'); // Obtiene el elemento donde se muestra la fecha actual

//Función para actualizar contador
function actualizarContador() {
    contador++; // Incrementa el contador en 1
    contadorDisplay.textContent = contador; // Actualiza el contenido del elemento contador con el nuevo valor

    // Animación simple
    contadorDisplay.style.transform = 'scale(1.2)'; // Aca aumenta el tamaño del contador
    setTimeout(() => {
        contadorDisplay.style.transform = 'scale(1)'; 
    }, 200); // aca se puede indicar el tiempo entre el aumento al siguiente numero despues del click
}

// Función para resetear el contador
function resetearContador() {
    contador = 0;
    contadorDisplay.textContent = contador; // Esta funcion permite resetear el contador a 0
}

// Event listeners
btnClick.addEventListener('click', actualizarContador); // Este permite escuchar el evento click en el botón para incrementar el contador
btnReset.addEventListener('click', resetearContador); // Este permite escuchar el evento click en el botón para resetear el contador

// Inicialización
document.addEventListener('DOMContentLoaded', function() { // Este evento se dispara cuando el DOM está completamente cargado
    const ahora = new Date(); // Obtiene la fecha y hora actual
    fechaElement.textContent = ahora.toLocaleDateString('es-CO'); // Formatea la fecha a un formato legible en español (Colombia)

    const ENTORNO = document.getElementById('entorno').textContent; // Obtiene el entorno actual desde el elemento con id 'entorno'
    cambiarEntorno(ENTORNO); // Llama automáticamente al cargar la página
});


// Funcion para simular cambio de entorno
function cambiarEntorno(nuevoEntorno) {
    document.getElementById('entorno').textContent = nuevoEntorno; // Me permite obtrener el elemento con el id entorno y cambiar su contenido al nuevo entorno

    //Cambiar color segun en entorno
    const statusCard = document.querySelector('.status-card');
    switch (nuevoEntorno) { // Aca se puede cambiar el color del entorno dependiendo del entorno seleccionado
        case 'Desarrollo':
            statusCard.style.borderLeftColor = '#f0ad4e'; // Naranja
            break;
        case 'Pruebas':
            statusCard.style.borderLeftColor = '#5bc0de'; // Azul
            break;
        case 'Producción':
            statusCard.style.borderLeftColor = '#5cb85c'; // Verde
            break;
    }
}