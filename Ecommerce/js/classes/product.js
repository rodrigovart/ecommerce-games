class Product {
    constructor(nome = undefined, preco = undefined, descricao = undefined, quantidade = undefined, _id = undefined) {
        this.nome = nome
        this.preco = preco
        this.descricao = descricao
        this.quantidade = quantidade
        this._id = _id
    }
    
    getProduct(id) {
        let product = JSON.parse(localStorage.getItem('produtos'))
        return product.filter(p => p._id == id)
     }
}