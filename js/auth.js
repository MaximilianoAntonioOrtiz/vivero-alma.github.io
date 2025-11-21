// ===============================================
// Archivo: js/auth.js
// Lógica de Autenticación (Login, Register, Logout)
// ===============================================

/**
 * Obtiene la lista de usuarios desde localStorage.
 * Exportada para ser usada en otros módulos si es necesario.
 * @returns {Array} Lista de usuarios.
 */
export const getUsers = () => {
    const usersJSON = localStorage.getItem('vivero_users');
    // Si no hay usuarios, devuelve un array vacío
    return usersJSON ? JSON.parse(usersJSON) : [];
};

/**
 * Función que maneja el registro del usuario.
 * @param {Event} e - Evento de envío del formulario.
 */
const handleRegister = (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('regName');
    const emailInput = document.getElementById('regEmail');
    const passwordInput = document.getElementById('regPassword');
    // NOTA: Para este ejemplo, no se valida la confirmación de contraseña, pero en un proyecto real se haría.

    const name = nameInput.value.trim();
    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value.trim();

    // 1. Validaciones
    if (!name || !email || !password) {
        alert('Error: Todos los campos son obligatorios.');
        return;
    }

    if (password.length < 6) {
        alert('Error: La contraseña debe tener al menos 6 caracteres.');
        return;
    }

    const users = getUsers();
    const emailExists = users.some(user => user.email === email);

    if (emailExists) {
        alert('Error: Ya existe una cuenta registrada con este correo.');
        return;
    }

    // 2. Guardar nuevo usuario
    const newUser = {
        name,
        email,
        password 
    };

    users.push(newUser);
    localStorage.setItem('vivero_users', JSON.stringify(users));
    
    // Redirigir al login
    window.location.href = 'login.html';
};


/**
 * Función que maneja el inicio de sesión del usuario.
 * Exportada por si se necesita iniciar sesión desde otro lugar (ej. un modal).
 * @param {Event} e - Evento de envío del formulario.
 */
export const handleLogin = (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');

    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        alert('Error: Por favor, ingrese email y contraseña.');
        return;
    }

    const users = getUsers();
    const userFound = users.find(user => user.email === email);

    if (!userFound) {
        alert('Error: El correo electrónico no está registrado.');
        return;
    }

    if (userFound.password !== password) {
        alert('Error: Contraseña incorrecta.');
        return;
    }

    // 1. INICIO DE SESIÓN EXITOSO
    const userSession = {
        email: userFound.email,
        name: userFound.name
    };

    localStorage.setItem('usuarioLogueado', JSON.stringify(userSession));

    // Redirigir al Home
    window.location.href = 'index.html';
};


/**
 * Cierra la sesión del usuario.
 * Exportada para ser llamada desde components.js (botón de la navbar).
 */
export const handleLogout = () => {
    localStorage.removeItem('usuarioLogueado');
    // Redirigir al Home después de cerrar sesión
    window.location.href = 'index.html';
};


// 4. Conectar las funciones a los formularios
// Este código solo se ejecuta si el formulario correspondiente existe en la página
const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', handleRegister);
}

const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
}