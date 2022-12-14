$(function() {
    // Evento para enviar información
    $("#contacto").on('submit', function(e) {
        e.preventDefault();
        alert('Contacto enviado correctamente...');
    });
})