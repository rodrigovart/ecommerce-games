<?php
require_once "vendor/autoload.php";
require_once __DIR__ . "/../database/Connection.php";
require_once __DIR__ . "/../models/Product.php";

use Monolog\Handler\StreamHandler;
use Monolog\Level;
use Monolog\Logger;

class ProductDAO {
    static function getAllProducts() {
        try {
            $sql = "SELECT * FROM produto";

            $connection = New Connection();
            $p_sql = $connection->getInstance()->prepare($sql);
            $p_sql->execute();
            $fetch = $p_sql->fetchAll(PDO::FETCH_ASSOC);

            if ($fetch != null && $fetch) {
                $products = array();

                foreach ($fetch as $value) {
                    $product = new Product($value);
                    array_push($products, $product);
                }

                return $products;
            } else {
                throw new Exception("Erro ao trazer todos os produtos", 1);
            }
        } catch (Exception $e) {
            $log = new Logger('Logger ProductDAO');
            $log->pushHandler(new StreamHandler('logs/log_connection.log', Level::Error));
            $log->error($e);
        }
    }

    static function getProductById($id) {
        try {
            $sql = "SELECT * FROM produto WHERE produto_id = :id";

            $connection = New Connection();
            $p_sql = $connection->getInstance()->prepare($sql);
            $p_sql->bindValue(":id", $id);
            $p_sql->execute();
            $fetch = $p_sql->fetch(PDO::FETCH_ASSOC);

            if ($fetch != null && $fetch) {
                $product = new Product($fetch);

                return $product;
            } else {
                throw new Exception("Erro ao trazer o produto", 1);
            }
        } catch (Exception $e) {
            $log = new Logger('Logger ProdutoDAO');
            $log->pushHandler(new StreamHandler('logs/log_connection.log', Level::Error));
            $log->error($e);
        }
    }
}