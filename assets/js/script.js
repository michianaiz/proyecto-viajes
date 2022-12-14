$(function() {
    // Segun documentación de bootstrap, se debe agregar este codigo javascript para que funcione los tooltips  
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    
    // Evento para enviar información
    $("#contacto").on('submit', function(e) {
        e.preventDefault();
        alert('Contacto enviado correctamente...');
    });
})