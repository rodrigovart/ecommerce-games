<?php
$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/' :
        require __DIR__ . '/views/login.php';
        break;
    case '' :
        require __DIR__ . '/views/login.php';
        break;
    case '/login' :
        require __DIR__ . '/controllers/LoginController.php';
        $login = new LoginController();
        echo $login->login($_POST);
        break;
    case '/home' :
        require __DIR__ . '/views/home.php';
        break;
    case '/registrar' :
        require __DIR__ . '/views/registrar.php';
        break;
    default:
        http_response_code(404);
        require __DIR__ . '/views/404.php';
        break;
}