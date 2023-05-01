<?php
require_once "vendor/autoload.php";
require_once __DIR__ . "/../database/Connection.php";
require_once __DIR__ . "/../models/User.php";

use Monolog\Handler\StreamHandler;
use Monolog\Level;
use Monolog\Logger;

class UserDAO {
    static function getAllUsers() {
        try {
            $sql = "SELECT * FROM usuario";

            $connection = New Connection();
            $p_sql = $connection->getInstance()->prepare($sql);
            $p_sql->execute();
            $fetch = $p_sql->fetchAll(PDO::FETCH_ASSOC);

            if ($fetch != null && $fetch) {
                $users = array();

                foreach ($fetch as $value) {
                    $user = new User($value);
                    array_push($users, $user);
                }

                return $users;
            } else {
                throw new Exception("Erro ao trazer todos os usuario", 1);
            }
        } catch (Exception $e) {
            $log = new Logger('Logger UserDAO');
            $log->pushHandler(new StreamHandler('logs/log_connection.log', Level::Error));
            $log->error($e);
        }
    }

    static function getUserById($id) {
        try {
            $sql = "SELECT * FROM usuario WHERE usuario_id = :id";

            $connection = New Connection();
            $p_sql = $connection->getInstance()->prepare($sql);
            $p_sql->bindValue(":id", $id);
            $p_sql->execute();
            $fetch = $p_sql->fetch(PDO::FETCH_ASSOC);

            if ($fetch != null && $fetch) {
                $user = new User($fetch);

                return $user;
            } else {
                throw new Exception("Erro ao trazer usuario", 1);
            }
        } catch (Exception $e) {
            $log = new Logger('Logger UserDAO');
            $log->pushHandler(new StreamHandler('logs/log_connection.log', Level::Error));
            $log->error($e);
        }
    }

    static function getUserByEmailAndPassword($email, $senha) {
        try {
            $sql = "SELECT * FROM usuario WHERE usuario_email = :email AND usuario_senha = :senha";

            $connection = New Connection();
            $p_sql = $connection->getInstance()->prepare($sql);
            $p_sql->bindValue(":email", $email);
            $p_sql->bindValue(":senha", $senha);
            $p_sql->execute();
            $fetch = $p_sql->fetch(PDO::FETCH_ASSOC);

            if ($fetch != null && $fetch) {
                $user = new User($fetch);

                return $user;
            } else {
                throw new Exception("Erro ao trazer usuario e senha", 1);
            }
        } catch (Exception $e) {
            $log = new Logger('Logger UserDAO');
            $log->pushHandler(new StreamHandler('logs/log_connection.log', Level::Error));
            $log->error($e);
        }
    }

    static function deleteUser($id) {
        try {
            $sql = "DELETE FROM usuario WHERE usuario_id = :id";

            $connection = New Connection();
            $p_sql = $connection->getInstance()->prepare($sql);
            $p_sql->bindValue(":id", $id);
            $p_sql->execute();
        } catch (Exception $e) {
            $log = new Logger('Logger UserDAO');
            $log->pushHandler(new StreamHandler('logs/log_connection.log', Level::Error));
            $log->error($e);
        }
    }

    static function insertUser($user) {
        try {
            $sql = "INSERT INTO usuario (usuario_nome, usuario_email, usuario_senha) 
                    VALUES (:nome, :email, :senha)";

            $connection = New Connection();
            $p_sql = $connection->getInstance()->prepare($sql);
            $p_sql->bindValue(":nome", $user['nome']);
            $p_sql->bindValue(":email", $user['email']);
            $p_sql->bindValue(":senha", $user['senha']);
            $p_sql->execute();
        } catch (Exception $e) {
            $log = new Logger('Logger UserDAO');
            $log->pushHandler(new StreamHandler('logs/log_connection.log', Level::Error));
            $log->error($e);
        }
    }

    static function updateUser($user) {
        try {
            $sql = "UPDATE user SET usuario_nome = :nome, 
                                    usuario_email = :email, 
                                    usuario_password = :senha
                    WHERE usuario_id = :id";

            $connection = New Connection();
            $p_sql = $connection->getInstance()->prepare($sql);
            $p_sql->bindValue(":nome", $user['nome']);
            $p_sql->bindValue(":email", $user['email']);
            $p_sql->bindValue(":senha", $user['senha']);
            $p_sql->bindValue(":id", $user['id']);
            $p_sql->execute();
        } catch (Exception $e) {
            $log = new Logger('Logger UserDAO');
            $log->pushHandler(new StreamHandler('logs/log_connection.log', Level::Error));
            $log->error($e);
        }
    }
}