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

    if (localStorage.getItem('email') && localStorage.getItem('senha')) {
        $('#inputEmail').val(localStorage.getItem('email'))
        $('#inputSenha').val(localStorage.getItem('senha'))
        $('#inputRelembrarSenha').attr('checked', true)
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
        } else if (data.responseJSON.email && data.responseJSON.password) {
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
        function (data) {
            console.log(data.usuarios[0].administrador)
            if (data.usuarios[0]) {
                if (!data.usuarios[0].administrador == true) {
                    try {
                        location.href = '/Users/rodrigovart/Documents/PIM/Sistema_de_Controle_de_Vendas_Loja_de_Jogos/Ecommerce/index.html'
                    } catch (error) {
                        console.warn(error)
                    }
                }

                try {
                    $('#user-logado').empty().append(data.usuarios[0].nome);
                } catch (error) {
                    console.warn(error)
                }
            }
        },
        "json"
    ).fail(function (data) {
        console.warn(data)
    });
}

$('#inputRelembrarSenha').click(function (e) {
    let email = $('#inputEmail').val()
    let senha = $('#inputSenha').val()

    if (e.target.checked && (email.length > 0 && senha.length > 0)) {
        localStorage.setItem('email', email)
        localStorage.setItem('senha', senha)
    } else {
        localStorage.removeItem('email')
        localStorage.removeItem('senha')
    }
});

$('#logout').click(function (e) {
    e.preventDefault();
    location.href = '/Dashboard/login.html'
});