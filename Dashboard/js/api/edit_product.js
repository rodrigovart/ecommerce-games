function editProduct(id) {
    Swal.fire({
        title: `Tem certeza que deseja editar o produto?`,
        icon: 'question',
    }).then((result) => {
        if (result.isConfirmed) {
            location.href = 'add_product.html'
            localStorage.setItem('idAlterar', id)
            localStorage.setItem('action', 'Editar')
        }
    })
}

function getDataProduct() {
    let data = new Product()

    data.nome = $('#nome').val()
    data.preco = $('#preco').val()
    data.quantidade =  $('#quantidade').val()
    data.descricao = $('#descricao').val()

    return data
}