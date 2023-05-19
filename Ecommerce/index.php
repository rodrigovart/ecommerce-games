<?php
require_once "vendor/autoload.php";

use Monolog\Handler\StreamHandler;
use Monolog\Level;
use Monolog\Logger;

$request = $_SERVER['REQUEST_URI'];

try {
    switch ($request) {
        case '/' :
            require __DIR__ . '/views/login.php';
            break;
        case '' :
            require  __DIR__ . '/views/login.php';
            break;
        case '/login' :
            require __DIR__ . '/controllers/LoginController.php';
            $login = new LoginController();
            echo $login->login($_POST);
            break;
        case '/home' :
            require __DIR__ . '/views/home.php';
            break;
        case '/signup' :
            if ($_POST) {
                require __DIR__ . '/controllers/SignUpController.php';
                $sign = new SingUpController();
                echo $sign->sign($_POST);
                break;
            } else {
                require __DIR__ . '/views/signup.php';
                break;
            }
        case '/logout' :
            require __DIR__ . '/controllers/HomeController.php';
            HomeController::logout();
            header("Location: /");
            break;
        case '/products' :
            require __DIR__ . '/controllers/HomeController.php';
            $home = new HomeController();
            echo $home->getProducts();
            break;
        default:
            http_response_code(404);
            require __DIR__ . '/views/404.php';
            break;
    }
} catch (Exception $e) {
    $log = new Logger('Logger Router');
    $log->pushHandler(new StreamHandler('logs/log_connection.log', Level::Error));
    $log->error($e);
}