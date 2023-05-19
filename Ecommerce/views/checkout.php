<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="Ecommerce" />
    <meta name="author" content="Rodrigo Vart" />
    <!-- Favicon-->
    <link rel="icon" type="image/x-icon" href="../../assets/geekBanana.jpeg" />
    <!-- Bootstrap icons-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
    <link href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" rel="stylesheet" />
    <!-- Bootstrap core JS-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="../../css/styles.css" rel="stylesheet" />
    <link href="../../css/hover.css" rel="stylesheet" />
    <link href="../../css/dark-theme.css" rel="stylesheet" />
    <link href="../../css/checkout.css" rel="stylesheet" />
    <link href="https://pagination.js.org/dist/2.1.5/pagination.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <title>Geek Store</title>
</head>

<body>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="../../index.html">Geek Store <img class="geekBanana"
                    src="../../assets/geekBanana.jpeg"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li class="nav-item"><a class="nav-link active" aria-current="page" id="home" href="#!">Home</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">Loja</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#!" id="showAllProducts">Todos os Produtos</a></li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li><a class="dropdown-item" href="#!">Produtos Populares</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="#!">Sobre</a></li>
                </ul>
                <div class="d-flex navbar-right">
                    <button class="btn btn-secondary" type="button" id="cart">
                        <i class="bi-cart-fill me-1"></i>
                        Carrinho
                        <span class="badge bg-info text-white ms-1 rounded-pill" id="cart-qtd">0</span>
                    </button>
                    <button class="btn btn-danger" type="button" id="logout">
                        <i class="bi bi-x-lg"></i>
                    </button>
                    <div class="shopping-cart">
                        <div class="shopping-cart-header">
                            <i class="bi-cart-fill me-1 cart-icon"></i><span class="badge">3</span>
                            <div class="shopping-cart-total">
                                <span class="lighter-text">Total:</span>
                                <span class="main-color-text total">70€</span>
                            </div>
                        </div>
                        <div id="cart-hover">
                        </div>
                        <!--end shopping-cart-header -->
                        <a href="js/components/checkout.html" class="button-checkout">Checkout <i
                                class="fa fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 mt-5 justify-content-center mb-5">
        <div class="card box1 shadow-sm p-md-5 p-md-5 p-4">
            <div class="fw-bolder mb-4">
                <span class="ps-1" id="pedido"></span>
            </div>
            <div class="d-flex flex-column">
                <div class="d-flex align-items-center justify-content-between text mb-4">
                    <span>Total</span>
                    <span class="ps-1" id="checkout-total">600.99</span></span>
                </div>
                <div class="d-flex align-items-center justify-content-between text mb-4">
                    <span>Quantidade</span>
                    <span class="ps-1" id="cart-qtd"></span></span>
                </div>
                <div class="border-bottom mb-4"></div>
                <div class="d-flex flex-column mb-4">
                    <span class="far fa-file-alt text">
                        <span class="ps-2">Invoice ID:</span></span> <span class="ps-3">SN8478042099</span>
                </div>
                <div class="d-flex flex-column mb-4" id="checkout-detalhe"></div>
                <div class="d-flex align-items-center justify-content-between text mt-5">
                    <div class="d-flex flex-column text">
                        <span>Customer Support:</span> <span>online chat 24/7</span>
                    </div>
                    <div class="btn btn-primary rounded-circle">
                        <span class="fas fa-comment-alt"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="card box2 shadow-sm">
            <div class="d-flex align-items-center justify-content-between p-md-5 p-4">
                <span class="h5 fw-bold m-0">Formas de Pagamento</span>
                <div class="btn btn-primary bar">
                    <span class="fas fa-bars"></span>
                </div>
            </div>
            <ul class="nav nav-tabs mb-3 px-md-4 px-2">
                <li class="nav-item"> <a class="nav-link px-2 active" aria-current="page" id="home" href="#">Cartao de Crédito</a>
                </li>
                <li class="nav-item ms-auto"> <a class="nav-link px-2" href="#">+ More</a> </li>
            </ul>
            <div class="px-md-5 px-4 mb-4 d-flex align-items-center">
                <div class="btn btn-success me-4">
                    <span class="fas fa-plus"></span>
                </div>
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                    <label class="btn btn-outline-primary" for="btnradio1"><span class="pe-1">+</span>5949</label>
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                    <label class="btn btn-outline-primary" for="btnradio2"><span class="lpe-1">+</span>3894</label>
                </div>
            </div>
            <form action="">
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex flex-column px-md-5 px-4 mb-4">
                            <span>Credit Card</span>
                            <div class="inputWithIcon"> <input class="form-control" type="text"
                                    value="5136 1845 5468 3894">
                                <span class="">
                                    <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png"
                                        alt="">
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4">
                            <span>Expiration<span class="ps-1">Date</span></span>
                            <div class="inputWithIcon">
                                <input type="text" class="form-control" value="05/20">
                                <span class="fas fa-calendar-alt"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                            <span>Code CVV</span>
                            <div class="inputWithIcon">
                                <input type="password" class="form-control" value="123">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="d-flex flex-column px-md-5 px-4 mb-4">
                            <span>Name</span>
                            <div class="inputWithIcon">
                                <input class="form-control text-uppercase" type="text" value="valdimir berezovkiy">
                                <span class="far fa-user"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 px-md-5 px-4 mt-3">
                        <div class="btn btn-primary w-100 btn-checkout" id="checkout-total">
                            Pay $599.00
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!-- Footer-->
    <footer class="py-5 bg-dark">
        <div class="container">
            <p class="m-0 text-center text-white">Copyright &copy; Rodrigo Vart 2022</p>
        </div>
    </footer>
</body>
<!-- Core theme JS-->
<script src="../../js/env.js"></script>
<script src="../../js/classes/cart.js"></script>
<script src="../../js/classes/product.js"></script>
<script src="../../js/api/login.js"></script>
<script src="../../js/components/card_products.js"></script>
<script src="../../js/components/cart_hover.js"></script>
<script src="../../js/components/checkout.js"></script>
<script src="../../js/api/products_list.js"></script>
<script src="../../js/api/add_cart.js"></script>
<script src="../../js/api/cart_list.js"></script>
<script src="../scripts.js"></script>
</html>