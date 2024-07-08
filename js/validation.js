document.addEventListener("DOMContentLoaded", () => {
        // Verificar si ya hay una respuesta almacenada en el Local Storage
    setTimeout(() => {
        const edadLegal = sessionStorage.getItem('edadLegal');

        !edadLegal ? mostrarPopupEdadLegal() : edadLegal === 'false' ? redirigirAGoogle() : null;
    }, 1500);
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
        result.isConfirmed ? accesoPermitido() : result.dismiss === Swal.DismissReason.cancel ? redirigirAGoogle() : null;
    });
}

function accesoPermitido() {
    sessionStorage.setItem('edadLegal', 'true');
}

function redirigirAGoogle() {
    sessionStorage.setItem('edadLegal', 'false');
    window.location.href = 'https://www.google.com';
}
