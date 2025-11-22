// ===============================================
// Archivo: js/products.js
// Catálogo de Productos y Lógica de Carga (20 Ítems)
// ===============================================

// La variable 'products' es 'var' para ser accesible globalmente por cart.js
var products = [
    // --- PRODUCTOS INICIALES ---
    { id: 1, name: "Monstera Deliciosa", category: "Plantas de Interior", price: 25.50, description: "Una planta tropical muy popular, conocida por sus grandes hojas perforadas.", image: "monstera.jpg" },
    { id: 2, name: "Cactus San Pedro", category: "Cactus y Suculentas", price: 15.00, description: "Fácil de cuidar, requiere poca agua y mucha luz solar.", image: "cactus.jpg" },
    { id: 3, name: "Set de 3 Macetas de Cerámica", category: "Macetas", price: 35.99, description: "Macetas de cerámica esmaltada, perfectas para plantas de tamaño medio.", image: "macetas.jpg" },
    { id: 4, name: "Tierra de Diatomeas Orgánica", category: "Herramientas", price: 9.99, description: "Fertilizante y pesticida natural. 100% orgánico y seguro para mascotas.", image: "diatomeas.jpg" },
    { id: 5, name: "Ficus Lyrata (Fiddle Leaf Fig)", category: "Plantas de Interior", price: 45.00, description: "Planta de interior elegante con grandes hojas en forma de violín.", image: "ficus.jpg" },
    
    // --- 15 PRODUCTOS ADICIONALES ---
    { id: 6, name: "Suculenta Echeveria", category: "Cactus y Suculentas", price: 8.50, description: "Variedad popular de suculenta de bajo mantenimiento.", image: "echeveria.jpg" },
    { id: 7, name: "Palmera de Salón", category: "Plantas de Interior", price: 32.90, description: "Ideal para esquinas oscuras. Purifica el aire.", image: "palmera.jpg" },
    { id: 8, name: "Rosas Miniatura", category: "Plantas de Exterior", price: 19.99, description: "Variedad de rosal compacto ideal para balcones.", image: "rosas.jpg" },
    { id: 9, name: "Orquídea Phalaenopsis", category: "Plantas de Interior", price: 55.00, description: "Elegante orquídea de floración prolongada. Requiere cuidados especiales.", image: "orquidea.jpg" },
    { id: 10, name: "Bonsái Ficus Retusa", category: "Bonsái", price: 79.00, description: "Bonsái de fácil manejo, perfecto para principiantes.", image: "bonsai.jpg" },
    { id: 11, name: "Kit de Herramientas de Jardinería", category: "Herramientas", price: 29.99, description: "Incluye pala, rastrillo y trasplantador de acero inoxidable.", image: "kit_herramientas.jpg" },
    { id: 12, name: "Maceta Colgante de Yute", category: "Macetas", price: 12.50, description: "Maceta de estilo rústico para colgar plantas de hoja caduca.", image: "maceta_yute.jpg" },
    { id: 13, name: "Lavanda (Lavandula)", category: "Plantas de Exterior", price: 14.00, description: "Planta aromática que atrae a los polinizadores y repele insectos.", image: "lavanda.jpg" },
    { id: 14, name: "Alocasia Polly", category: "Plantas de Interior", price: 28.99, description: "Conocida como 'Oreja de elefante'. Hojas oscuras y brillantes.", image: "alocasia.jpg" },
    { id: 15, name: "Calathea Orbifolia", category: "Plantas de Interior", price: 38.00, description: "Hojas grandes y redondas. Necesita alta humedad.", image: "calathea.jpg" },
    { id: 16, name: "Fertilizante Líquido Universal", category: "Herramientas", price: 11.50, description: "Ideal para uso semanal en todo tipo de plantas de interior y exterior.", image: "fertilizante.jpg" },
    { id: 17, name: "Tiestos de Barro (Pack 4)", category: "Macetas", price: 22.00, description: "Tiestos tradicionales de barro cocido con excelente drenaje.", image: "tiestos.jpg" },
    { id: 18, name: "Suculenta Collar de Perlas", category: "Cactus y Suculentas", price: 16.50, description: "Planta colgante perfecta para estanterías altas.", image: "collar_perlas.jpg" },
    { id: 19, name: "Helecho Boston", category: "Plantas de Interior", price: 21.00, description: "Clásico helecho que prospera en ambientes húmedos y con poca luz.", image: "helecho.jpg" },
    { id: 20, name: "Tulipanes (Bulbos Pack 10)", category: "Bulbos", price: 18.00, description: "Bulbos de tulipán listos para plantar en otoño.", image: "tulipanes.jpg" }
];

// Función para conectar los listeners del carrito (definida en cart.js)
const initCartListeners = () => {
    if (typeof setupAddToCartListeners === 'function') {
        setupAddToCartListeners();
    }
};

/**
 * Función para generar las cards de productos y mostrarlas en productos.html
 */
const renderProducts = () => {
    const productListContainer = document.getElementById('product-list');
    if (!productListContainer) return;
    let htmlContent = '';

    products.forEach(product => {
        htmlContent += `
            <div class="col-6 col-md-4 col-lg-3">
                <div class="card h-100 shadow-sm border-0">
                    <img src="./img/${product.image}" class="card-img-top" alt="${product.name}" style="height: 200px; object-fit: cover;">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-success">${product.name}</h5>
                        <p class="card-text text-muted">${product.category}</p>
                        <h4 class="mt-auto mb-3">$${product.price.toFixed(2)}</h4>
                        <a href="detalle.html?id=${product.id}" class="btn btn-outline-success btn-sm mb-2">Ver Detalle</a>
                        <button class="btn btn-success btn-sm add-to-cart" data-product-id="${product.id}">
                            Agregar al Carrito
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    productListContainer.innerHTML = htmlContent;
};

/**
 * Función que busca el ID del producto en la URL y renderiza el detalle.
 */
const renderProductDetail = () => {
    const detailContainer = document.getElementById('product-detail');
    if (!detailContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (!product) { detailContainer.innerHTML = '<div class="alert alert-danger">Producto no encontrado.</div>'; return; }

    const detailHTML = `
        <div class="row align-items-center">
            <div class="col-md-6 mb-4">
                <img src="./img/${product.image}" class="img-fluid rounded shadow-sm" alt="${product.name}">
            </div>
            <div class="col-md-6">
                <h6 class="text-success">${product.category}</h6>
                <h1 class="display-4 mb-3">${product.name}</h1>
                <p class="lead">${product.description}</p>
                <hr>
                <h2 class="text-primary display-5 mb-4">$${product.price.toFixed(2)}</h2>
                
                <div class="d-grid gap-2">
                    <button class="btn btn-lg btn-success add-to-cart" data-product-id="${product.id}">
                        Añadir al Carrito
                    </button>
                    <a href="productos.html" class="btn btn-outline-secondary">Volver al Catálogo</a>
                </div>
            </div>
        </div>
    `;
    detailContainer.innerHTML = detailHTML;
};


// Bloque de ejecución principal (llamar funciones de renderizado y conexión)
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('product-list')) {
        renderProducts();
        initCartListeners();
    }
    if (document.getElementById('product-detail')) {
        renderProductDetail();
        initCartListeners();
    }
});