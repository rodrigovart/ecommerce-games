$(function () {
    $.getJSON(`${URL_BASE+URL_CARRINHOS}`,
        function (data) {
            fillCarts(data.carrinhos)
        },
        "json"
    );
});

function fillCarts(carts) {
    let cart_qtd = document.querySelectorAll('#cart-qtd')

    cart_qtd.forEach(e => {
        e.innerHTML = carts[0].quantidadeTotal
    })

    $('.badge').empty().append(carts[0].quantidadeTotal)
    $('.total').empty().append(`R$ ${carts[0].precoTotal}`)

    localStorage.setItem("carrinho", JSON.stringify(carts[0]));
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
            let carrinho = new Cart(cart.idProduto, cart.precoUnitario, cart.quantidade)
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