document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    
    // Aquí puedes añadir la validación personalizada si es necesario
    
    // Si todo está bien, se puede enviar el formulario
    alert('Formulario enviado correctamente!');
    // O puedes manejar el envío del formulario con AJAX, por ejemplo.
  });
  


