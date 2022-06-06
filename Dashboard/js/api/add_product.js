function saveProdutos(product) {
    try {
        $.ajaxSetup({
            headers: {
                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });

        $.post(url(), product,
            function (data) {
                if (data.message) {
                    Swal.fire(`${data.message}`, ``, `success`)
                }
            },
            "json"
        ).fail(function (data) {
            if (data.responseJSON.message) {
                Swal.fire(`${data.responseJSON.message}`, ``, `error`)
            }
        });
    } catch (error) {
        console.warn(error)
    }
}

function url() {
    let id = localStorage.getItem('idAlterar')

    if (id) {
        return `http://localhost:3000/produtos/${id}`
    } else {
        return `http://localhost:3000/produtos`
    }
}

$('#add-product').click(function (e) {
    e.preventDefault();
    Swal.fire({
        title: `Adicionar um produto?`,
        icon: 'question',
    }).then((result) => {
        if (result.isConfirmed) {
            location.href = 'add_product.html'
            localStorage.removeItem('idAlterar')
            localStorage.setItem('action', 'Adicionar')
        }
    })
});

$('#salvar-prod').click(function (e) {
    e.preventDefault();
    let productData = getDataProduct()

    saveProdutos(productData)
});

// // LOGIN
// $(function () {
//     $.post(`http://localhost:3000/login`, {
//             email: "beltrano@qa.com.br",
//             password: "teste"
//         },
//         function (data) {
//             localStorage.setItem('token', data.authorization)
//         },
//         "JSON"
//     );
// });