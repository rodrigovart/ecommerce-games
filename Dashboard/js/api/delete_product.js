function deleteProduct(nome, id) {
    Swal.fire({
        title: `Tem certeza que deseja excluir o produto ${nome}?`,
        showCancelButton: true,
        confirmButtonText: 'Excluir',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        icon: 'question',
        preConfirm: () => {
            deletarProduto(id)
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Produto Excluido!',
                icon: 'success',
            }).then((result) => {
                if (result.isConfirmed) {
                    location.reload()
                }
            })
        }
    })
}


function deletarProduto(id) {
    token()
    
    $.ajaxSetup({
        headers: {
            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    });

    $.ajax({
        type: "DELETE",
        url: `http://localhost:3000/produtos/${id}`,
        dataType: "json"
    }).fail(function (data) {
        let result = JSON.parse(data.responseText)
        console.warn(result.message)
        if (result.message) {
            Swal.fire(`Tente Novamente!`, `${result.message}`, `error`)
        }
        
        return false
    });
}