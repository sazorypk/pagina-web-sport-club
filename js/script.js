const formulario = document.getElementById('formulario');
const respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    respuesta.textContent = 'Formulario enviado correctamente. ¡Gracias por contactarnos!';
    respuesta.style.color = 'green';

    formulario.reset();
});
