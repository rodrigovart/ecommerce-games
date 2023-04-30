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
    <title>Usuario</title>
</head>

<body class="">
    <div id="layoutSidenav">
        <div id="layoutSidenav_content">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-7">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header">
                                        <h3 class="text-center font-weight-light my-4" id="name-card">Usuario</h3>
                                    </div>
                                    <div class="card-body">
                                        <form>
                                            <div class="row mb-3">
                                                <div class="col-md-12">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" id="nome" type="text"
                                                            placeholder="Digite seu Nome" />
                                                        <label for="nome">Nome</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="email" type="email"
                                                    placeholder="name@example.com" />
                                                <label for="email">Email</label>
                                            </div>
                                            <div class="row mb-3">
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" id="password" type="Senha"
                                                            placeholder="Criar Senha" />
                                                        <label for="password">Senha</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" id="password2" type="Senha"
                                                            placeholder="Confirmar Senha" />
                                                        <label for="password">Confirmar Senha</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <div class="col-md-12">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <select name="administrador" id="administrador"
                                                            class="form-control">
                                                            <option value=""></option>
                                                            <option value="false" selected>Não</option>
                                                            <option value="true">Sim</option>
                                                        </select>
                                                        <label for="selectAdm">Administrator</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-4 mb-0">
                                                <div class="d-grid">
                                                    <a class="btn btn-primary" href="#" id="salvar">Salvar</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous">
    </script>
    <script src="../assets/js/classes/user.js"></script>
    <script src="../assets/js/api/get_users.js"></script>
    <script src="../assets/js/api/add_user.js"></script>
    <script src="../assets/js/api/delete_user.js"></script>
    <script src="../assets/js/api/edit_user.js"></script>
</body>
</html>