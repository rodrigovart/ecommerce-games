class Product {
    constructor(nome = undefined, preco = undefined, descricao = undefined, quantidade = undefined, _id = undefined) {
        this.nome = nome
        this.preco = preco
        this.descricao = descricao
        this.quantidade = quantidade
        this._id = _id
    }

    getProduct(id = undefined) {
        fetch(`${URL_BASE+URL_PRODUTOS}`).then((resp) => {
            if (resp.ok) {
                resp.json().then((data) => {
                    localStorage.setItem('produtos', JSON.stringify(data.produtos))
                })
            }
        })

        let product = JSON.parse(localStorage.getItem('produtos'))

        if (id != undefined) {
            return product.filter(p => p._id == id)
        }

        return product
    }

    jsonProduct() {
        let produtosAdd = {
            produtos: [{
                idProduto: this._id,
                quantidade: this.quantidade
            }]
        }

        return produtosAdd
    }
}