function getProdutos() {
    fetch(`http://localhost:3000/produtos`)
        .then(response => response.json())
        .then(json => fillTableProduct(json));
}

function getProdutoById() {
    let id = localStorage.getItem('idAlterar')
    if (id) {
        fetch(`http://localhost:3000/produtos/${id}`)
        .then(response => response.json())
        .then(json => fillView(json));
    }
}

function fillTableProduct(products) {
    localStorage.setItem("produtos", JSON.stringify(products.produtos));
    let produtos = new Product().getProduct()

    produtos.forEach(product => {
        $('#tbody-produtos').append(productRow(product));
        // deleteproduct(product._id)
    });

    dataTable()
}

function fillView(product) {
    // console.log(product)
    $('#nome').val(product.nome)
    $('#preco').val(product.preco)
    $('#quantidade').val(product.quantidade)
    $('#descricao').val(product.descricao)
}