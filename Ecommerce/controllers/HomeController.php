<?php
require_once "vendor/autoload.php";
require_once __DIR__ . "/../classes/ProductDAO.php";

class HomeController {
    static function initSession ($user) {
        $_SESSION["user"] = $user;
    }

   static function logout() {
        session_unset();
        session_destroy();
    }

    function getProducts() {
        $find_products = ProductDAO::getAllProducts();
        
        $products = array();

        foreach ($find_products as $value) {
            $product = array(
                'id' => $value->getProduto_id(),
                'nome' => $value->getProduto_nome(),
                'descricao' => $value->getProduto_descricao(),
                'imagem' => $value->getProduto_imagem()
            );

            array_push($products, $product);
        }

        return json_encode(array('produtos' => $products));
    }
}