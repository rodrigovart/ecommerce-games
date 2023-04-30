<?php
require_once "vendor/autoload.php";
require_once __DIR__ . "/../classes/UserDAO.php";

class IndexController {
    function index() {
        $user = new UserDAO();
        var_dump($user->getAllUsers());
        // var_dump($user->getUsersById(1)->getUser_name());
        die;
    }
}