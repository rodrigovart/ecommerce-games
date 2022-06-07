class Cart {
    constructor(idProduto = undefined, precoUnitario = undefined, quantidade = undefined) {
        this.idProduto = idProduto
        this.precoUnitario = precoUnitario
        this.quantidade = quantidade
    }

    setCart(produto) {
        let carrinho = this.getCart()
carrinho.produtos.push(produto)
console.log(carrinho)
    //    localStorage.setItem('carrinho', produto) 
    }

    getCart() {
        let carrinho = JSON.parse(localStorage.getItem('carrinho'))
        return carrinho
     }

     addCart(id) {
         let produtosAdd = {
             produtos: [{
                idProduto: id,
                quantidade: 1
            }]
        }
         return JSON.stringify(produtosAdd)
     }
}