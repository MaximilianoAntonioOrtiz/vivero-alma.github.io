// ===============================================
// Archivo: js/components.js
// Componentes reutilizables (Navbar y Footer)
// ===============================================

// ===============================================
// Archivo: js/components.js (INICIO)
// ===============================================

import { handleLogout } from './auth.js'; // <--- ¡LÍNEA FALTANTE!

/**
 * Obtiene el objeto de sesión del usuario logueado.
// ... (resto del código)

/**
 * Obtiene el objeto de sesión del usuario logueado.
 * @returns {object|null} Objeto de usuario o null si no hay sesión.
 */
const getLoggedInUser = () => {
    const userJSON = localStorage.getItem('usuarioLogueado');
    return userJSON ? JSON.parse(userJSON) : null;
};

/**
 * Genera el Navbar y lo inserta en el DOM.
 */
const createNavbar = () => {
    const user = getLoggedInUser();
    
    // Si la rama no es 'main', obtiene el nombre de la rama para mostrarla en el navbar
    // Esto es solo un ejemplo avanzado, puedes omitirlo si quieres, pero es útil
    const currentBranch = document.location.pathname.includes('etapa-') ? ' (' + document.location.pathname.split('etapa-')[1].split('/')[0] + ')' : '';

    let authLinks = '';

    if (user) {
        // Usuario logueado: Mostrar nombre y botón de Logout
        authLinks = `
            <span class="navbar-text me-3 text-white">
                Hola, <strong>${user.name.split(' ')[0]}</strong>!
            </span>
            <button class="btn btn-outline-light me-2" id="logoutBtn">Cerrar Sesión</button>
        `;
    } else {
        // Usuario no logueado: Mostrar botones de Login y Register
        authLinks = `
            <a href="login.html" class="btn btn-outline-light me-2">Iniciar Sesión</a>
            <a href="register.html" class="btn btn-primary">Registrarme</a>
        `;
    }

    const navbarHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-success sticky-top shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="index.html">🌿 Vivero Alma</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="productos.html">Productos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="carrito.html">Carrito</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contacto.html">Contacto</a>
                        </li>
                    </ul>
                    <div class="d-flex">
                        ${authLinks}
                    </div>
                </div>
            </div>
        </nav>
    `;

    document.getElementById('navbar').innerHTML = navbarHTML;

    // Conectar el botón de Logout (si existe)
    if (user) {
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', handleLogout);
        }
    }
};

/**
 * Genera el Footer y lo inserta en el DOM.
 */
const createFooter = () => {
    const footerHTML = `
        <footer class="bg-light text-center text-lg-start mt-auto">
            <div class="container p-4">
                <p class="text-center mb-0">© 2025 Vivero Alma | Proyecto de Desarrollo Web de Maximiliano Ortiz.</p>
            </div>
        </footer>
    `;
    document.getElementById('footer').innerHTML = footerHTML;
};


// Insertar los componentes al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('navbar')) {
        createNavbar();
    }
    if (document.getElementById('footer')) {
        createFooter();
    }
});