$(function () {
    getCart()
    $('#pedido').empty().append(`Pedido ${getRandomInt()}`)
});

function getCart() {

    let carrinho = new Cart(cart.idProduto, cart.quantidade, cart.precoUnitario)
    let cart_client = carrinho.getCart()

    cart_client.produtos.forEach(cart => {
        // console.log(cart)
        let produto = new Product().getProduct(cart.idProduto)
        produto.quantidade = cart.quantidade

        try {
            $('#checkout-detalhe').append(cartHover(produto, carrinho))
            carrinho.setBadgeQtd()
            carrinho.setBadgeValue()
        } catch (error) {
            console.warn(error)
        }
    })
}

$('.btn-checkout').click(function (e) {
    e.preventDefault()
    let carrinho = new Cart().getCart()

    fetch(`${URL_BASE+URL_CARRINHOS}`, {
        method: 'POST',
        body: JSON.stringify(carrinho),
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': localStorage.getItem('token')
        })
    }).then((response) => {
        if (response.ok) {
            response.json().then((json) => {
                Swal.fire({
                    title: `${json.message}`,
                    text: "",
                    icon: 'info',
                }).then((result) => {
                    if (result.isConfirmed) {
                        closeCart()
                    }
                })
            })
        } else {
            response.json().then((result) => {
                Swal.fire(`${result.message}`, '', 'error')
            })
        }
    }).catch((error) => {
        console.log('There has been a problem with your fetch operation: ' + error.message);
    })
})

function closeCart() {
    fetch(`${URL_BASE+URL_CARRINHOS}/concluir-compra`, {
        method: 'DELETE',
        mode: 'cors',
        headers: new Headers({
            'Accept': 'application/json',
            'Authorization': localStorage.getItem('token')
        })
    }).then(response => {
        if (response.ok) {
            Swal.fire({
                title: `Pedido Concluido`,
                text: "",
                icon: 'success',
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem('carrinho')
                    location.href = '../../index.html'
                }
            })
        }
    }).catch((error) => {
        console.log('There has been a problem with your fetch operation: ' + error.message);
    })
}