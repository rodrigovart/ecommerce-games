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
    $('.badge').empty();
    $('.badge').append(carts[0].quantidadeTotal);
    $('.total').empty()
    $('.total').append(`R$ ${carts[0].precoTotal}`)
    
    carts[0].produtos.forEach(cart => {
        let carrinho = new Cart(cart.idProduto, cart.precoUnitario, cart.quantidade)
        carrinho.setAll(carrinho)
    })
}

$('.shopping-cart').each(function () {
    var delay = $(this).index() * 50 + 'ms'
    $(this).css({
        '-webkit-transition-delay': delay,
        '-moz-transition-delay': delay,
        '-o-transition-delay': delay,
        'transition-delay': delay
    })
})

$('#cart, .shopping-cart').hover(function (e) {
    carts.forEach(cart => {
        let carrinho = new Cart(cart.idProduto, cart.precoUnitario, cart.quantidade)
        let produto = getProduct(carrinho.idProduto)
        $('#cart-hover').append(cartHover(produto, carrinho))
    })

    $(".shopping-cart").stop(true, true).addClass("active")
}, function () {
    $('#cart-hover').empty()
    $(".shopping-cart").stop(true, true).removeClass("active")
})

function getProduct(id) {
   return product.filter(p => p._id == id)
}