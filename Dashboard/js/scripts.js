window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

function login() {
    $.post(`http://localhost:3000/login`, {
            email: $('#inputEmail').val(),
            password: $('#inputSenha').val()
        },
        function (data) {
            if (data.authorization) {
                localStorage.setItem('token', data.authorization)
                localStorage.setItem('usuario_logado', $('#inputEmail').val())
                location.href = 'escolha.html'
            } else {
                Swal.fire(`Não foi possivel fazer o login no sistema!`, ``, `error`)
            }
        },
        "JSON"
    ).fail(function (data) {
        if (data.responseJSON.message) {
            Swal.fire(`${data.responseJSON.message}`, ``, `error`)
        } else if(data.responseJSON.email && data.responseJSON.password) {
            let inputs = document.querySelectorAll('.form-control')

            inputs.forEach(i => {
                i.className = `${i.className} is-invalid`
            })

            $('#divEmail').append(`<div class="invalid-feedback invalid">${data.responseJSON.email}.</div`)
            $('#divSenha').append(`<div class="invalid-feedback invalid">${data.responseJSON.password}.</div`)
        } else {
            Swal.fire(`Não foi possivel fazer o login no sistema!`, ``, `error`)
        }
    })
}

$('#login').click(function (e) { 
    e.preventDefault();
    let divs = document.querySelectorAll('.invalid')
    divs.forEach(i => {
        i.remove()
    })
    login()
});

function usuarioLogado() {
    let email = localStorage.getItem('usuario_logado')

    $.get(`http://localhost:3000/usuarios?email=${email}`,
        function (data, textStatus, jqXHR) {
            console.log(data.usuarios[0])
        },
        "json"
    ).fail(function (data) {
        console.warn(data)
    });
}