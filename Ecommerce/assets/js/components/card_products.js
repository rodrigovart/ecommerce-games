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
                            R$ ${produto.preco.toFixed(2)}
                            <div class="d-flex p-2 col-md-12">
                                <span class="btn btn-light" id="-" onClick="javascript:addProductsCart('${produto._id}', $('#input${produto._id}').val())">-</span>
                                    <input type="text" class="form-control text-center" id="input${produto._id}" value="1">
                                <span class="btn btn-light" id="+" onClick="javascript:addProductsCart('${produto._id}', $('#input${produto._id}').val())">+</span>
                            </div>
                        </div>
                    </div>
                    <!-- Product actions-->
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><a class="btn btn-success mt-auto" onClick="javascript:addProductsCart('${produto._id}', $('#input${produto._id}').val())">Adicionar <i class="bi bi-cart-plus"></i></a>
                        </div>
                    </div>
                </div>
            </div>`
}