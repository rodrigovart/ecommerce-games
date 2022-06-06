class User {
    constructor(nome = undefined, email = undefined, password = undefined, administrador = undefined) {
        this.nome = nome
        this.email = email
        this.password = password
        this.administrador = administrador
    }

    getUser() {
        let usuario = JSON.parse(localStorage.getItem('usuarios'))
        return usuario
     }
}