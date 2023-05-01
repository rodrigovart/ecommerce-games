const logout = document.querySelector('#logout')
const card_container = document.querySelector('#card-container')
const productsStorage = JSON.parse(localStorage.getItem('produtos'))
const TOASTY_ERROR = "#dc3545"
const TOASTY_SUCCESS = "#28a745"
const TOASTY_INFO = "#17a2b8"

logout.addEventListener('click', e => {
    location.href = '/logout'
})

function getProducts() {
    loadingAlert()

    fetch(`/products`)
        .then(response => response.json())
        .then(data => fillAllProductsCards(data.produtos))
        .catch(error => errorAlert(error))
}

getProducts()

function fillAllProductsCards(produtos) {
    produtos.map(product => {
        $('#card-container').append(createCardProduct(product))
    })

    pagination(produtos)
    swal.close()
}

function loadingAlert() {
    Swal.fire({
        title: 'Carregando',
        allowOutsideClick: false,
        timer: 20000,
        didOpen: () => {
            Swal.showLoading()
        },
    });
}

function errorAlert(error) {
    Swal.fire(
        'Erro',
        error,
        'error'
    )
}