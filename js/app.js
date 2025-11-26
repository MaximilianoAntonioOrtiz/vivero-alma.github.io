// ===============================================
// Archivo: js/app.js (FINAL CON SLIDER)
// ===============================================

/**
 * Lógica para el Hero Slider automático en index.html
 */
const startSlider = () => {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;

    let currentSlide = 0;

    const changeSlide = () => {
        // 1. Eliminar la clase 'active' de la diapositiva actual
        slides[currentSlide].classList.remove('active');

        // 2. Calcular el índice de la siguiente diapositiva (loop)
        currentSlide = (currentSlide + 1) % slides.length;

        // 3. Añadir la clase 'active' a la nueva diapositiva
        slides[currentSlide].classList.add('active');
    };

    // Iniciar el temporizador para cambiar la diapositiva cada 5000 milisegundos (5 segundos)
    setInterval(changeSlide, 5000);
};

document.addEventListener('DOMContentLoaded', () => {
    // Solo inicia el slider si estamos en la página de inicio y la estructura existe
    if (document.getElementById('hero-slider')) {
        startSlider();
    }
});