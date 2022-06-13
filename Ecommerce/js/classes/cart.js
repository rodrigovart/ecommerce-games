class Cart {
    constructor(idProduto = undefined, quantidade = undefined, precoUnitario = undefined, ) {
        this.idProduto = idProduto
        this.precoUnitario = precoUnitario
        this.quantidade = quantidade
    }

    setProductQtdCart(produto) {
        try {
            let carrinho = this.getCart()
            carrinho.produtos.forEach((e, index) => {
                if (produto.idProduto == e.idProduto) {
                    carrinho.produtos.splice(index, 1)
                }
            })

            carrinho.produtos.push(produto)

            localStorage.setItem('carrinho', JSON.stringify(carrinho))
        } catch (error) {
            console.warn(error)
        }
    }

    getCart(idUsuario = undefined) {
        let user = (idUsuario = undefined) ? idUsuario : getClientId()._id

        $.get(`http://localhost:3000/carrinhos/${user}`,
            function (data) {
                if (data.carrinhos.length > 0) {
                    if (data._id == 'qbMqntef4iTOwWfg') {
                        return false
                    }
                    localStorage.setItem('carrinho', JSON.stringify(data.carrinhos))
                }
            },
            "json"
        ).fail(function (error) {
            try {
                let carrinho = JSON.parse(localStorage.getItem('carrinho'))

                if (carrinho.produtos.length > 0) {
                    return carrinho
                } else {
                    console.log('parse erorr')
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: `${error.responseJSON.message}`,
                        showConfirmButton: false,
                        timer: 1100
                    })
                }
            } catch (error) {
                return false
            }
        });

        return JSON.parse(localStorage.getItem('carrinho'))
    }

    setCart(product) {
        try {
            this.setProductQtdCart(product.produtos[0])
            this.setBadgeQtd()
            this.setBadgeValue()
        } catch (error) {
            console.warn(error)
        }
    }

    setNewCart(produtosAdd) {
        localStorage.setItem('carrinho', JSON.stringify(produtosAdd))
        this.setBadgeQtd()
        this.setBadgeValue()
    }

    setBadgeQtd() {
        let cart = this.getCart()
        let qtd = 0

        cart.produtos.forEach(e => {
            qtd += e.quantidade
        })

        let cart_qtd = document.querySelectorAll('#cart-qtd')

        cart_qtd.forEach(e => {
            e.innerHTML = qtd
        })
        
        $('.badge').empty().append(qtd)
    }

    setBadgeValue() {
        let cart = this.getCart()
        let value = 0

        cart.produtos.forEach(e => {
            let produto = new Product().getProduct(e.idProduto)
            value += produto[0].preco * e.quantidade
        })

        $('.total').empty().append(`R$ ${value.toFixed(2)}`)
        let total = document.querySelectorAll('#checkout-total')

        total.forEach(e => {
            console.log(e)
            e.innerHTML = `R$ ${value.toFixed(2)}`
        })
    }
}