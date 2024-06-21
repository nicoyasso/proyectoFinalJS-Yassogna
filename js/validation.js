document.addEventListener("DOMContentLoaded", () => {
    // Verificar si ya hay una respuesta almacenada en el Local Storage
    const edadLegal = localStorage.getItem('edadLegal');

    if (!edadLegal) {
        mostrarPopupEdadLegal();
    } else if (edadLegal === 'false') {
        redirigirAGoogle();
    }
});

function mostrarPopupEdadLegal() {
    Swal.fire({
        title: '¿Tienes la edad legal para consumir alcohol en tu país?',
        icon: 'warning',
        showCancelButton: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            accesoPermitido();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            redirigirAGoogle();
        }
    });
}

function accesoPermitido() {
    localStorage.setItem('edadLegal', 'true');
}

function redirigirAGoogle() {
    window.location.href = 'https://www.google.com';
}



