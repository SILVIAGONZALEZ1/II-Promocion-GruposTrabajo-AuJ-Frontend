// Este script añade una funcionalidad para cambiar el color de fondo cuando se hace clic en una card
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        this.querySelector('.card-inner').classList.toggle('flipped');
        const colors = ['#FFC107', '#FF5722', '#4CAF50', '#03A9F4', '#E91E63'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.querySelector('.card-back').style.backgroundColor = randomColor;
    });
});


