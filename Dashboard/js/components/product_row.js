function productRow(product) {
    return `<tr>
                <td>${product._id}</td>
                <td>${product.nome}</td>
                <td>R$ ${parseFloat(product.preco).toFixed(2)}</td>
                <td>${product.quantidade}</td>
                <td><a class="text-primary" target="_blank" href="${product.descricao}">${product.descricao}</a></td>
                <td><span class="bi-pen-fill action" onClick="javascript:editProduct('${product._id}')"></span></td>
                <td><span class="bi-trash-fill text-success action" onClick="javascript:deleteProduct('${product.nome}', '${product._id}')"></span></td>
            </tr>`
}