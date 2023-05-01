//REGISTRAR
const nome = document.querySelector('#nome')
const email = document.querySelector(`#email`)
const password = document.querySelector(`#password`)
const password_confima = document.querySelector(`#password2`)
const adm = document.querySelector(`#administrador`)
const button = document.querySelector('#salvar')

button.addEventListener('click', () => {
    let nomeValue = nome.value
    let emailValue = email.value
    let passwordValue = password.value
    let admValue = adm.value

    // emptyFeedback()

    $.post("/signup", {
            nome: nomeValue,
            email: emailValue,
            senha: passwordValue,
            adm: admValue
        }, function (data) {
           if (data.isValid) {
            try {
                successAlert(data.user.name)
            } catch (error) {
                console.warn(error)
                errorAlert()
            }
           }
        },
        "json"
    )
})

function errorAlert() {
    Swal.fire(
        'Erro',
        'Usuario não encontrado!',
        'error'
    )
}

function successAlert(nome) {
    Swal.fire({
        title: `Bem Vindo ${nome}`,
        confirmButtonText: 'Continuar',
        icon: 'success'
      }).then((result) => {
        if (result.isConfirmed) {
            location.href = '/home'
        }
      })
}