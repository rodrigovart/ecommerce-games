<?php
require_once "vendor/autoload.php";

use Monolog\Handler\StreamHandler;
use Monolog\Level;
use Monolog\Logger;

class Connection {

    public $instance;
    protected $db_host;
    protected $db_name;
    protected $db_user;
    protected $db_password;

    public function __construct() {
        $this->db_host = 'localhost';
        $this->db_name = 'loja';
        $this->db_user = 'root';
        $this->db_password = 'root';
    }

    public function getInstance() {
        try {
            if (!isset($this->instance)) {
                $this->instance = new PDO('mysql:host=' . $this->db_host . ';dbname=' . $this->db_name, $this->db_user, $this->db_password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
                $this->instance->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $this->instance->setAttribute(PDO::ATTR_ORACLE_NULLS, PDO::NULL_EMPTY_STRING);
            } else {
                throw new Exception("Erro ao instanciar o banco", 1);
            }

            return $this->instance;
        } catch (Exception $e) {
            $log = new Logger('Logger Conexao');
            $log->pushHandler(new StreamHandler('logs/log_connection.log', Level::Error));
            $log->error($e);
        }
    }
}
?>