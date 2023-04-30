function addProductsCart(id, qtd) {
    try {
        let action = event.target.id
        let inputQtd = document.querySelector(`#input${id}`)
        let val = +inputQtd.value

        if (qtd && action) {
            (action == '+') ? val++ : val--
        }

        let result = val < 1 ? 1 : val

        inputQtd.value = +result

        let productAddCart = new Product()
        productAddCart._id = id
        productAddCart.quantidade = result

        let cart = new Cart()

        if (cart.getCart()) {
            cart.setCart(productAddCart.jsonProduct())
            alertaTop(`Quantidade Alterada!`, TOASTY_INFO)
        } else {
            cart.setNewCart(productAddCart.jsonProduct())
            alertaTop(`Produto Adicionado!`)
        }
    } catch (error) {
        alertaTop(error, TOASTY_ERROR)
    }
}