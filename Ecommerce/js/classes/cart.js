class Cart {
    constructor(idProduto = undefined, precoUnitario = undefined, quantidade = undefined) {
        this.idProduto = idProduto
        this.precoUnitario = precoUnitario
        this.quantidade = quantidade
    }

    getCart() {
        let carrinho = JSON.parse(localStorage.getItem('carrinho'))
        return carrinho
     }
}