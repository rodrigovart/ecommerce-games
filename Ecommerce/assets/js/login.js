// LOGIN
const checkBox = document.querySelector('#inputRelembrarSenha')
const button = document.querySelector('#login')
const email = document.querySelector(`#email`)
const senha = document.querySelector(`#senha`)
const email_feedback = document.querySelector(`#email-feedback`)
const senha_feedback = document.querySelector(`#senha-feedback`)

$(function () {
    let check = localStorage.getItem('lembrar_senha')
    checkBox.checked = check
})

checkBox.addEventListener('click', e => {
    localStorage.setItem('lembrar_senha', e.target.checked)
})

button.addEventListener('click', () => {
    let email = $('#email')
    let senha = $('#senha')

    emptyFeedback()

    $.post("/login", {
            email: email.val(),
            senha: senha.val()
        }, function (data) {
            if (!data.isValid) {
                try {
                    let result = Object.keys(data[0]).map((key) => [key, data[0][key]])
                    result.forEach(e => {
                        $(`#${e[0]}`).addClass('is-invalid')
                        $(`#${e[0]}-feedback`).append(e[1][0])
                    })
                } catch (error) {
                    errorAlert()
                }
            } else {
                if (data.user) {
                    successAlert(data.user.name)
                } else {
                    errorAlert()
                }
            }
        },
        "json"
    )
})

function emptyFeedback() {
    email_feedback.innerHTML = ''
    senha_feedback.innerHTML = ''
    email_feedback.classList.remove('is-invalid')
    senha_feedback.classList.remove('is-invalid')
}

email.addEventListener('keypress', element => {
    element.target.classList.forEach(e => {
        if (e.includes('is-invalid')) {
            email_feedback.classList.remove('is-invalid')
            email.classList.remove('is-invalid')
            email.classList.add('is-valid')
            emptyFeedback()
        }
    })
})

senha.addEventListener('keypress', element => {
    element.target.classList.forEach(e => {
        if (e.includes('is-invalid')) {
            senha_feedback.classList.remove('is-invalid')
            senha.classList.remove('is-invalid')
            senha.classList.add('is-valid')
            emptyFeedback()
        }
    })
})

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

function errorAlert() {
    Swal.fire(
        'Erro',
        'Usuario não encontrado!',
        'error'
    )
}