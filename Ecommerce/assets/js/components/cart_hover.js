function cartHover(produto, carrinho) {
    if (carrinho.idProduto) {
        return `<ul class="shopping-cart-items">
                <li class="clearfix">
                    <img src="${produto[0].descricao}" alt="item1" />
                    <span class="item-name">${produto[0].nome}</span>
                    <span class="item-price">R$ ${produto[0].preco}</span>
                    <span class="item-quantity">Quantidade: ${carrinho.quantidade ? carrinho.quantidade : produto.quantidade}</span>
                </li>
            </ul>`
    } else {
        return `<ul class="shopping-cart-items">
                <li class="clearfix">
                    <p><img src="${produto[0].descricao}" alt="item1" /></p>
                    <p><span class="item-name">${produto[0].nome}</span></p>
                    <p><span class="item-price">R$ ${produto[0].preco}</span></p>
                    <p><span class="item-quantity">Quantidade: ${carrinho.quantidade ? carrinho.quantidade : produto.quantidade}</span></p>
                </li>
            </ul>
            <hr>`

    }
}