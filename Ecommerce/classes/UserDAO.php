<?php
require_once "vendor/autoload.php";
require_once __DIR__ . "/../database/Connection.php";
require_once __DIR__ . "/../models/User.php";

use Monolog\Handler\StreamHandler;
use Monolog\Level;
use Monolog\Logger;

class UserDAO {
    function getAllUsers() {
        try {
            $sql = "SELECT * FROM user";

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

    function getUserById($id) {
        try {
            $sql = "SELECT * FROM user WHERE user_id = :id";

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

    function deleteUserById($id) {
        try {
            $sql = "DELETE FROM user WHERE user_id = :id";

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

    function insertUser($user) {
        try {
            $sql = "INSERT INTO user (user_name, user _email, user_password) 
                    VALUES (:nome, :email, :senha)";

            $connection = New Connection();
            $p_sql = $connection->getInstance()->prepare($sql);
            $p_sql->bindValue(":user_name", $user['nome']);
            $p_sql->bindValue(":user _email", $user['email']);
            $p_sql->bindValue(":user_password", $user['senha']);
            $p_sql->execute();
        } catch (Exception $e) {
            $log = new Logger('Logger UserDAO');
            $log->pushHandler(new StreamHandler('logs/log_connection.log', Level::Error));
            $log->error($e);
        }
    }

    function updateUser($user) {
        try {
            $sql = "UPDATE user SET user_name = :user_name, 
                                    user_email = :user _email, 
                                    user_password = :user_password
                    WHERE user_id = :id";

            $connection = New Connection();
            $p_sql = $connection->getInstance()->prepare($sql);
            $p_sql->bindValue(":user_name", $user['nome']);
            $p_sql->bindValue(":user _email", $user['email']);
            $p_sql->bindValue(":user_password", $user['senha']);
            $p_sql->bindValue(":id", $user['id']);
            $p_sql->execute();
        } catch (Exception $e) {
            $log = new Logger('Logger UserDAO');
            $log->pushHandler(new StreamHandler('logs/log_connection.log', Level::Error));
            $log->error($e);
        }
    }
}