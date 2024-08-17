// Este script añade una funcionalidad para cambiar el color de fondo cuando se hace clic en una card
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        this.querySelector('.card-inner').classList.toggle('flipped');
        const colors = ['#FFC107', '#FF5722', '#4CAF50', '#03A9F4', '#E91E63'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.querySelector('.card-back').style.backgroundColor = randomColor;
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores de los campos
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validar los datos
    if (firstName && lastName && email && message) {
        // Mostrar un alert de éxito
        alert("¡Mensaje enviado con éxito!");
    } else {
        // Mostrar un alert de error
        alert("Por favor, completa todos los campos.");
    }
});


