$(function () {
    getCart()
    $('#pedido').empty().append(`Pedido ${getRandomInt()}`)
});

function getCart() {

    let cart_client = JSON.parse(localStorage.getItem('carrinho'))

    let total = document.querySelectorAll('#checkout-total')

    total.forEach(e => {
        e.innerHTML = `R$ ${cart_client.precoTotal}`
    })

    cart_client.produtos.forEach(cart => {
        let carrinho = new Cart(cart.idProduto, cart.precoUnitario, cart.quantidade)
        let produto = new Product().getProduct(cart.idProduto)

        try {
            $('#checkout-detalhe').append(cartHover(produto, carrinho))
        } catch (error) {
            console.warn(error)
        }
    })
}

$('.btn-checkout').click(function (e) {
    e.preventDefault();
    Swal.fire(`Sucesso!`, '', 'success')
});