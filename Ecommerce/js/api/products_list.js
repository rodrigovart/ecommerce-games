// PRODUCTS
function getAllProducts() {
    $.getJSON(`${URL_BASE+URL_PRODUTOS}`,
        function (data) {
            fetchProducts(data.produtos)
        },
        "json"
    );
}

function fetchProducts(produtos) {
    produtos.forEach((p) => {
        let produto = new Product(p.nome, p.preco, p.descricao, p.quantidade, p._id)
        produto.setAll(produto)
        $('#card-container').append(createCardProduct(produto))
        // deleteProducts(produto._id)
    });
}

function deleteProducts(id) {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": `${URL_BASE+URL_PRODUTOS}/${id}`,
        "method": "DELETE",
        "headers": {
            "Authorization": TOKEN
        }
    };

    $.ajax(settings).done(function (response) {
        Swal.fire(
            `${response.message}`,
            '',
            'success'
        )
    });
}