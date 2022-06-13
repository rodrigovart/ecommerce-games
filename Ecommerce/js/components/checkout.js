$(function () {
    getCart()
    $('#pedido').empty().append(`Pedido ${getRandomInt()}`)
});

function getCart() {

    let carrinho = new Cart(cart.idProduto, cart.quantidade, cart.precoUnitario)
    let cart_client = carrinho.getCart()

    cart_client.produtos.forEach(cart => {
        console.log(cart)
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
    e.preventDefault();
    Swal.fire(`Pedido realizado com sucesso!`, '', 'success')
});

function closeCart() {
    let carrinho = new Cart().getCart()

    fetch(`${URL_BASE+URL_CARRINHOS}`, {
            method: 'POST',
            body: carrinho,
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            })
        })
        .then(response => response.json())
        .then(json => console.log('Response', json))
}

$('.button-checkout').click(function (e) {
    e.preventDefault();
    alert()
    return false
});