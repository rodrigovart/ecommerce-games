function addCart(id, qtd) {
        Swal.fire(`Produto Adicionado!`, '', 'success')
}

$('#add-to-cart').click(function (e) {
    e.preventDefault();
    console.log(e)
    addCart('', 0)
});