function editUser(id) {
    Swal.fire({
        title: `Tem certeza que deseja editar o usuario?`,
        icon: 'question',
    }).then((result) => {
        if (result.isConfirmed) {
            location.href = 'register.html'
            localStorage.setItem('idAlterar', id)
            localStorage.setItem('action', 'Editar')
            // let data = getDataUser()
            // let user = new User(data.name, data.email, data.password, data.administrador)
            // saveClientes(user)
        }
    })
}

function getDataUser() {
    let data = new User()

    data.nome = $('#nome').val()
    data.email = $('#email').val()
    data.password = $('#password').val()
    data.administrador = $('#administrador').val()

    return data
}