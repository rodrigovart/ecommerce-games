class Product {
    constructor(nome, preco, descricao, quantidade, _id) {
        this.nome = nome
        this.preco = preco
        this.descricao = descricao
        this.quantidade = quantidade
        this._id = _id
    }

    setAll(produto) {
        product.push(produto)
    }

    getAll() {
        return product
    }
}