function saveClientes(user) {
    try {
        token()

        $.ajaxSetup({
            headers: {
                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });

        $.ajax({
            type: "PUT",
            url: url(),
            data: user,
            dataType: "json"
        }).done(function (data) {
            if (data.message) {
                Swal.fire(`${data.message}`, ``, `success`)
            }
        }).fail(function (data) {
            if (data.responseJSON.message) {
                Swal.fire(`${data.responseJSON.message}`, ``, `error`)
            }

            return false
        });
    } catch (error) {
        console.warn(error)
    }
}

function url() {
    let id = localStorage.getItem('idAlterar')

    if (id) {
        return `http://localhost:3000/usuarios/${id}`
    } else {
        return `http://localhost:3000/usuarios`
    }
}

$('#add-user').click(function (e) {
    e.preventDefault();
    Swal.fire({
        title: `Adicionar um usuario?`,
        icon: 'question',
    }).then((result) => {
        if (result.isConfirmed) {
            location.href = 'add_user.html'
            localStorage.removeItem('idAlterar')
            localStorage.setItem('action', 'Adicionar')
        }
    })
});

$('#salvar').click(function (e) {
    e.preventDefault();
    let userData = getDataUser()

    saveClientes(userData)
});

function token() {
    $.post(`http://localhost:3000/login`, {
            email: "beltrano@qa.com.br",
            password: "teste"
        }, function (data) {
            localStorage.setItem('token', data.authorization)
        },
        "JSON"
    );
}