function cartHover(produto, carrinho) {
        return `<ul class="shopping-cart-items">
                    <li class="clearfix">
                        <img src="${produto[0].descricao}" alt="item1" />
                        <span class="item-name">${produto[0].nome}</span>
                        <span class="item-price">R$ ${carrinho.precoUnitario}</span>
                        <span class="item-quantity">Quantidade: ${carrinho.quantidade}</span>
                    </li>
                </ul>`
}