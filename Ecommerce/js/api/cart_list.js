http://localhost:3000/carrinhos
$(function () {
    $.getJSON(`${URL_BASE+URL_CARRINHOS}`,
    function (data) {
        fillCarts(data.carrinhos)
    },
    "json"
);
});

function fillCarts(carts) {
    $('#cart-qtd').empty();
    $('#cart-qtd').append(carts[0].quantidadeTotal);

    carts[0].produtos.forEach(cart => {
        let carrinho = new Cart(cart.idProduto, cart.precoUnitario, cart.quantidade)
        carrinho.setAll(carrinho)
    });
}

$('#btn-cart-qtd').hover(function (e) {
    //    $('nav').append(cartHover())
    }, function () {
        // $('#cart-hover').remove()
    }
);