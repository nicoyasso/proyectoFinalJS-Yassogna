// Variable global para almacenar los productos
let productos = [];

// Función para cargar los productos desde el archivo JSON
function cargarProductos() {
    fetch('../json/products.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(data => {
            productos = data;
            mostrarProductos();
        })
        .catch(error => console.error('Error al cargar productos:', error));
}

// Función para mostrar los productos en las cards
function mostrarProductos() {
    const eventsCard = document.querySelector('.events-card');
    eventsCard.innerHTML = '';

    productos.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('car-shop', 'col-md-4');

        card.innerHTML = `
            <div class="card mb-4">
                <img src="${producto.img}" class="card-img-top" alt="${producto.name}">
                <div class="card-body">
                    <h5 class="card-title">${producto.name}</h5>
                    <p class="card-text">${producto.size}</p>
                    <p class="card-text"><strong>$ ${producto.price}</strong></p>
                    <button class="btn btn-primary" onclick="agregarAlCarrito('${producto.id}', '${producto.name}', ${producto.price}, '${producto.img}')">Agregar</button>
                </div>
            </div>
        `;

        eventsCard.appendChild(card);
    });
}

// Función para agregar un producto al carrito
function agregarAlCarrito(id, nombre, precio, img) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let productoExistente = carrito.find(item => item.id === id);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({ id, nombre, precio, img, cantidad: 1 });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
    mostrarCarrito();


    Toastify({
        text: 'Producto agregado',
        duration: 1500,
        gravity: 'bottom',
        stopOnFocus: true,
        close: true,
        style: {
            background: 'rgb(0, 0, 0, 0.9)',
            color: "#f5f5f5",
            fontSize: "15px",
            fontFamily: "Black Han Sans",


        },
    }).showToast();
}

// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    document.getElementById('cantidad-productos').textContent = carrito.reduce((total, item) => total + item.cantidad, 0);
}

// Función para mostrar el carrito desplegable
function toggleCarrito() {
    const carrito = document.getElementById('carrito');
    carrito.classList.toggle('active');
    mostrarCarrito();
}

// Función para mostrar los elementos del carrito
function mostrarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let carritoItems = document.getElementById('carrito-items');
    let total = 0;
    carritoItems.innerHTML = '';

    carrito.forEach(item => {
        let itemElement = document.createElement('div');
        itemElement.classList.add('carrito-item');

        itemElement.innerHTML = `
            <img src="${item.img}" alt="${item.nombre}">
            <div class="carrito-item-info">
                <p>${item.nombre}</p>
                <p>$ ${item.precio} c/u</p>
                <div>
                    <button class="btn btn-sm btn-secondary" onclick="cambiarCantidad('${item.id}', -1)">-</button>
                    <span class="quantity">${item.cantidad}</span>
                    <button class="btn btn-sm btn-secondary" onclick="cambiarCantidad('${item.id}', 1)">+</button>
                </div>
            </div>
            <div class="carrito-item-controls">
                <button class="btn btn-sm btn-danger" onclick="eliminarProducto('${item.id}')">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;

        carritoItems.appendChild(itemElement);
        total += item.cantidad * item.precio;
    });

    document.getElementById('carrito-total').textContent = `Total: $${total.toFixed(2)}`;
}


// Función para cambiar la cantidad de productos en el carrito
function cambiarCantidad(idProducto, cantidad) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let producto = carrito.find(item => item.id === idProducto);

    if (producto) {
        producto.cantidad += cantidad;
        if (producto.cantidad <= 0) {
            carrito = carrito.filter(item => item.id !== idProducto);
        }
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
    actualizarContadorCarrito();
}

// Función para eliminar un producto del carrito
function eliminarProducto(idProducto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(item => item.id !== idProducto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
    actualizarContadorCarrito();
}

// Función para vaciar el carrito
function vaciarCarrito() {
    localStorage.removeItem('carrito');
    mostrarCarrito();
    actualizarContadorCarrito();
}

// Función para finalizar compra (usa SweetAlert2)
function finalizarCompra() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.length === 0
        ? Swal.fire({
            title: 'Para continuar, debes seleccionar un producto',
            icon: 'warning',
            background: 'rgb(0, 0, 0, 0.9)',
            color: '#f5f5f5',
            confirmButtonColor: 'rgba(0, 0, 255, 0.8)',
        })

        : Swal.fire({
            title: '¡Muchas gracias por tu compra!',
            text: 'Recibimos tus datos y tu pedido. Pronto nos pondremos en contacto con usted.',
            imageUrl: '../assets/img/logo_foot.png',
            imageWidth: 100,
            imageHeight: 100,
            confirmButtonText: 'Aceptar',
            background: 'rgb(0, 0, 0, 0.9)',
            color: '#f5f5f5',
            confirmButtonColor: 'rgba(0, 0, 255, 0.8)',
        });
}

// Cargar productos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
    actualizarContadorCarrito(); // Actualizar el contador del carrito al cargar la página
});
