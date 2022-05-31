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
    localStorage.setItem("produtos", JSON.stringify(produtos));

    pagination()
}

function pagination(search = []) {
    try {
        $('#data-container').pagination({
            dataSource: (search.length > 0) ? search : product,
            className: 'paginationjs-theme-green',
            pageSize: 6,
            callback: function (data) {
                $('#card-container').empty()
                data.forEach(produto => {
                    $('#card-container').append(createCardProduct(produto))
                });
            }
        })
    } catch (error) {
        console.warn(error)
    }
}

$('#search-game').keydown(function (e) {
    let games = []

    product.filter(function (item) {
        if (e.target.value.length >= 3) {
            if (item.nome.includes(e.target.value)) {
                games.push(item)
            }
        }
    })

    pagination(games)
})

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