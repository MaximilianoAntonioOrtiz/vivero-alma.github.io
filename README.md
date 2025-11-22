# 🌿 Vivero Alma – E-commerce (Proyecto Final)

Proyecto final desarrollado para el curso de Desarrollo Web, implementando una tienda online completa con gestión de usuarios, carrito de compras persistente y funcionalidades avanzadas de filtrado.

---

## 🛠 Tecnologías y Herramientas Utilizadas

* **HTML5**
* **CSS3** (Estilos minimalistas propios)
* **Bootstrap 5** (Para el diseño responsive y componentes base)
* **JavaScript (ES6)** (Lógica del negocio, carrito, y validaciones)
* **localStorage** (Persistencia de datos de usuarios y carrito)
* **Git / GitHub** (Control de versiones y despliegue del código)

---

## 🚀 Funcionalidades Principales

El e-commerce está completamente funcional en el lado del cliente (Front-End) y maneja la persistencia de datos mediante `localStorage`.

### 🔐 Sistema de Autenticación (Login / Registro)
* **Registro:** Permite crear nuevos usuarios (Nombre, Email, Contraseña).
* **Validaciones:** Incluye chequeo de campos vacíos, formato de email, longitud mínima de contraseña y prevención de emails duplicados.
* **Login:** Verifica credenciales contra `localStorage`.
* **Seguridad:** Requiere que el usuario esté **logueado** para **agregar productos al carrito** y **finalizar la compra**.
* **Gestión de Sesión:** Muestra **"Hola, [Nombre]"** en la barra de navegación y ofrece la opción "Cerrar Sesión".

### 🛒 Carrito de Compras Avanzado
* **Persistencia:** El carrito se guarda en `localStorage` y se mantiene al recargar la página o al iniciar sesión.
* **Control de Cantidad (UX):** Los usuarios pueden **incrementar (+) y decrementar (-)** la cantidad de un producto directamente en la vista del carrito.
* **Cálculo Dinámico:** El precio subtotal y total se actualizan automáticamente con cada cambio de cantidad o eliminación.
* **Finalizar Compra:** Simula el éxito de la compra y limpia el carrito de `localStorage`.

### 🔍 Catálogo de Productos (20 Items)
* **Listado Dinámico:** Muestra las 20 plantas y accesorios cargados desde `js/products.js`.
* **Filtros Multi-Selección (Avanzado):** Permite filtrar los productos por múltiples categorías simultáneamente mediante **checkboxes** en la barra lateral.
* **Detalle de Producto:** Muestra la información específica de cada producto.

### 📧 Página de Contacto
* **Validación de Formulario:** Implementación de validaciones en JavaScript para asegurar que todos los campos requeridos estén completos antes de simular el envío.

---

## 📂 Estructura Final del Proyecto

/vivero-alma ├── 📁 css │ └── styles.css # Estilos generales y diseño del banner ├── 📁 img # Contiene las 20 imágenes de los productos y el banner ├── 📁 js │ ├── app.js # Lógica de la página de contacto │ ├── auth.js # Lógica de Login/Register/Logout │ ├── cart.js # Lógica del Carrito (Guardar, Renderizar, +/-) │ └── products.js # Catálogo de 20 productos y lógica de filtrado/renderizado ├── carrito.html ├── contacto.html ├── detalle.html ├── index.html # Página de inicio con banner hero ├── login.html ├── productos.html # Página de listado de productos con filtros ├── register.html └── README.md # Documentación del proyecto


---

## 👤 Autor

**Maximiliano Ortiz**
Proyecto Final del Curso de Desarrollo Web.