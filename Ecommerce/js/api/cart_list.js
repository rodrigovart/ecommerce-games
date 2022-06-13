function fillCarts() {
   let fill = new Cart()
   fill.setBadgeQtd()
   fill.setBadgeValue()
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
    try {
        let carts = new Cart().getCart()

        carts.produtos.forEach(cart => {
            let carrinho = new Cart(cart.idProduto, cart.quantidade, cart.precoUnitario)
            let produto = new Product().getProduct(carrinho.idProduto)
            $('#cart-hover').append(cartHover(produto, carrinho))
        })

        $(".shopping-cart").stop(true, true).addClass("active")
    } catch (error) {
        console.warn(error);
    }
}, function () {
    $('#cart-hover').empty()
    $(".shopping-cart").stop(true, true).removeClass("active")
})