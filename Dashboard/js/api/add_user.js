function saveClientes(user) {
    try {
        $.post(url(), user,
            function (data) {
                if (data.message) {
                    Swal.fire(`${data.message}`, ``, `success`)
                }
            },
            "json"
        ).fail(function (data) {
            if (data.responseJSON.message) {
                Swal.fire(`${data.responseJSON.message}`, ``, `error`)
            }
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