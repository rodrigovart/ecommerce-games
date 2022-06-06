function getProdutos() {
    let produtos = new Product().getProduct()
    fillTableProduct(produtos)
}

function getProdutoById() {
    let id = localStorage.getItem('idAlterar')
    if (id) {
        fetch(`http://localhost:3000/produtos/${id}`)
        .then(response => response.json())
        .then(json => fillView(json));
    }
}

async function setProdutos(products) {
    products.forEach((p, index) => {
        // let name = `${u.name.first} ${u.name.last}`
        // let email = `${u.name.first}${u.name.last}@email.com`
        // let password = `${u.name.first}${u.name.last}@123`
        // let product = new Product(name, email, password, 'false')
        // saveProdutos(product)
        console.log(p)
    });
}

function fillTableProduct(products) {
    products.forEach(product => {
        $('#tbody-produtos').append(productRow(product));
        // deleteproduct(product._id)
    });

    dataTable()
}

function fillView(product) {
    console.log(product)
    $('#nome').val(product.nome)
    $('#preco').val(product.preco)
    $('#quantidade').val(product.quantidade)
    $('#descricao').val(product.descricao)
}