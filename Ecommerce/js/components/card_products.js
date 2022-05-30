function createCardProduct(produto) {
    return `<div class="col mb-5">
                <div class="card h-100">
                    <!-- Product image-->
                    <img class="card-img-top" src="${produto.descricao}" alt="..." />
                    <!-- Product details-->
                    <div class="card-body p-4">
                        <div class="text-center">
                            <!-- Product name-->
                            <h5 class="fw-bolder">${produto.nome}</h5>
                            <!-- Product price-->
                            R$ ${produto.preco}
                        </div>
                    </div>
                    <!-- Product actions-->
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><a class="btn btn-success mt-auto add-to-cart">Adicionar</a>
                        </div>
                    </div>
                </div>
            </div>`
}