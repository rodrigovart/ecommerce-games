function addCart(id, preco, qtd, event) {
    let action = event.target.id
    let val = parseInt($(`#input${id}`).val())

    if (qtd) {
        if (action == '+') {
            // carrinho.addCart(id)
            val = val + 1
        } else {
            val = val - 1
        }
    }

    let result = val < 1 ? 1 : val

    $(`#input${id}`).val(result)

    let carrinho = new Cart(id, preco, result)
    console.log(carrinho.setCart(carrinho))
}

function closeCart() {
    let carrinho = new Cart()

    fetch(`${URL_BASE+URL_CARRINHOS}`, {
        method: 'post', // Default is 'get'
        body: carrinho,
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': localStorage.getItem('token')
        })
      })
      .then(response => response.json())
      .then(json => console.log('Response', json))
}