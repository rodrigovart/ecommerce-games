// LOGIN
$(function () {
    $.post(`${URL_BASE+URL_LOGIN}`, {
            email: "TraiaBarbosa@email.com",
            password: "TraiaBarbosa@123"
        },
        function (data) {
            TOKEN = data.authorization
            localStorage.setItem('token', data.authorization)
            // localStorage.removeItem('carrinho')
            fillAllProductsCards(true)
            getAllClients()
            fillCarts()
            pagination()
            // fecthGames()
        },
        "JSON"
    );
});

function getAllClients() {
    $.get('http://localhost:3000/usuarios',
        function (data) {
            localStorage.setItem('clientes', JSON.stringify(data.usuarios))
        },
        "json"
    );
}

function getClientId() {
    let email = localStorage.getItem('usuario_logado')
    let users = JSON.parse(localStorage.getItem('clientes'))
    return users.filter(e => e.email == email)[0]
}

function getRandomInt() {
    min = Math.ceil(0);
    max = Math.floor(400);
    return Math.floor(Math.random() * (max - min)) + min;
}

// function getRandomFloat() {
//     const str = (Math.random() * (500.00 - 10.00) + 10.00).toFixed(2);

//     return parseFloat(str);
// }

$('#logout').click(function (e) {
    e.preventDefault();
    location.href = '/Dashboard/login.html'
});

$('#showAllProducts').click(function (e) {
    e.preventDefault();

    fetch('js/components/allproducts.html').then((resp) => {
        if (resp.ok) {
            location.href = 'js/components/allproducts.html'
        }
    })

    fetch('./allproducts.html').then((resp) => {
        if (resp.ok) {
            location.href = '../../js/components/allproducts.html'
        }
    })
})

$('#home').click(function (e) { 
    e.preventDefault();
    
    fetch('../../index.html').then((resp) => {
        if (resp.ok) {
            location.href = '../../index.html'
        }
    })
});

function fillAllProductsCards(pagination = false) {
    let products = new Product().getProduct()

    products.map(product => {
        $('#card-container').append(createCardProduct(product))
    })
}