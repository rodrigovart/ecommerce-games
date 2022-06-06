function getClientes() {
    fetch(`http://localhost:3000/usuarios`)
        .then(response => response.json())
        .then(json => fillTableUser(json.usuarios));
}

function getClientesById() {
    let id = localStorage.getItem('idAlterar')
    if (id) {
        fetch(`http://localhost:3000/usuarios/${id}`)
        .then(response => response.json())
        .then(json => fillView(json));
    }
}

function getUsers() {
    fetch(`https://randomuser.me/api?results=300&nat=br&inc=name,dob&noinfo`)
        .then(response => response.json())
        .then(json => setClientes(json.results));
}

async function setClientes(users) {
    users.forEach((u, index) => {
        let name = `${u.name.first} ${u.name.last}`
        let email = `${u.name.first}${u.name.last}@email.com`
        let password = `${u.name.first}${u.name.last}@123`
        let user = new User(name, email, password, 'false')
        saveClientes(user)
    });
}

function fillTableUser(users) {
    users.forEach(user => {
        $('#tbody-clientes').append(userRow(user));
        // deleteUser(user._id)
    });

    dataTable()
}

function fillView(user) {
    console.log(user)
    $('#nome').val(user.nome)
    $('#email').val(user.email)
    $('#password').val(user.password)
    $('#password2').val(user.password)
    $('#administrador').val(user.administrador)
}