document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', enviarFormularioContacto);
});

function enviarFormularioContacto(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
        service_id: 'service_dzo97cs',
        template_id: 'template_48hw68l',
        user_id: 'CD3ZV04R0poIzE21X',
        template_params: {
            'name': formData.get('name'),
            'email': formData.get('mail'),
            'phone': formData.get('phone'),
            'issue': formData.get('issue'),
            'message': formData.get('message')
        }
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                Swal.fire({
                    title: 'Enviado',
                    text: 'Tu mensaje ha sido enviado correctamente.',
                    icon: 'success'
                });
                event.target.reset();
            } else {
                throw new Error('Error al enviar el mensaje.');
            }
        })
        .catch(error => {
            Swal.fire({
                title: 'Error',
                text: error.message,
                icon: 'error'
            });
        });
}
