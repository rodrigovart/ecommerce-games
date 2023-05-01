<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="Ecommerce" />
    <meta name="author" content="Rodrigo Vart" />
    <!-- Favicon-->
    <link rel="icon" type="image/x-icon" href="assets/geekBanana.jpeg" />
    <!-- Bootstrap icons-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
    <!-- Bootstrap core JS-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="../assets/css/styles.css" rel="stylesheet" />
    <link href="http://pagination.js.org/dist/2.1.5/pagination.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://pagination.js.org/dist/2.1.5/pagination.min.js"></script>
    <script src="http://pagination.js.org/js/prettify.min.js"></script>
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.1.1/css/all.css">
    <title>Login - Geek Store</title>
</head>

<body class="">
    <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5">
                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                <div class="card-header">
                                    <h3 class="text-center font-weight-light my-4">Login</h3>
                                </div>
                                <div class="card-body">
                                    <form class="needs-validation" novalidate>
                                        <div class="col-mb-3">
                                            <label for="email" class="form-label">Email</label>
                                            <div class="input-group has-validation">
                                                <input type="text" class="form-control"
                                                    id="email" value='rodrigo@gmail.com' required>
                                                <div id="email-feedback" class="invalid-feedback">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-mb-3">
                                            <label for="senha" class="form-label">Senha</label>
                                            <div class="input-group has-validation">
                                                <input type="text" class="form-control"
                                                    id="senha" value='123' required>
                                                <div id="senha-feedback" class="invalid-feedback">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-check mb-3">
                                            <input class="form-check-input" id="inputRelembrarSenha" type="checkbox"
                                                value="" />
                                            <label class="form-check-label" for="inputRelembrarSenha">Relembrar
                                                Senha</label>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                            <a class="small" href="Senha.html">Esqueceu a sua Senha?</a>
                                            <button class="btn btn-primary" type="button" id="login">Login</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="card-footer text-center py-3">
                                    <div class="small"><a href="/signup">Ainda não tem conta? Registre-se!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <div id="layoutAuthentication_footer">
            <footer class="py-4 bg-light mt-auto">
                <div class="container-fluid px-4">
                    <div class="d-flex align-items-center justify-content-between small">
                        <div class="text-muted">Copyright &copy; Rodrigo Vart 2022</div>
                        <div>
                            <a href="#">Privacy Policy</a>
                            &middot;
                            <a href="#">Terms &amp; Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous">
    </script>
    <script src="../assets/js/login.js"></script>
</body>

</html>