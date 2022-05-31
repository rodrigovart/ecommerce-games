class Product {
    constructor(nome = undefined, preco = undefined, descricao = undefined, quantidade = undefined, _id = undefined) {
        this.nome = nome
        this.preco = preco
        this.descricao = descricao
        this.quantidade = quantidade
        this._id = _id
    }
    
    getProduct(id = undefined) {
        let product = JSON.parse(localStorage.getItem('produtos'))

        if (id != undefined) {
            return product.filter(p => p._id == id)
        }

        return product
     }
}