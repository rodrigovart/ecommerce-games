function deleteUser(nome, id) {
    Swal.fire({
        title: `Tem certeza que deseja excluir o usuario ${nome}?`,
        showCancelButton: true,
        confirmButtonText: 'Excluir',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        icon: 'question',
        preConfirm: () => {
            deletar(id)
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Usuario Excluido!',
                icon: 'success',
            }).then((result) => {
                if (result.isConfirmed) {
                    location.reload()
                }
            })
        }
    })
}


function deletar(id) {
    $.ajax({
        type: "DELETE",
        url: `http://localhost:3000/usuarios/${id}`,
        dataType: "application/json",
        success: function (response) {
            console.log(response)
        }
    });
}