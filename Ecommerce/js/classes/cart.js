class Cart {
    constructor(idProduto, precoUnitario, quantidade) {
        this.idProduto = idProduto
        this.precoUnitario = precoUnitario
        this.quantidade = quantidade
    }

    setAll(carrinho) {
        carts.push(carrinho)
    }

    getAll() {
        return carts
    }
}