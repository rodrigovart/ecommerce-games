<?php
require_once "vendor/autoload.php";

use Valitron\Validator;

class Validate {
    function validateLogin($args) {
        Validator::lang('pt-br');
        $v = new Validator($args);
        $v->rule('required', ['senha', 'email']);
        $v->rule('email', 'email');

        if($v->validate()) {
            return true;
        } else {
            return $v->errors();
        }
    }

    function validateSign($args) {
        Validator::lang('pt-br');
        $v = new Validator($args);
        $v->rule('required', ['senha', 'email', 'nome']);
        $v->rule('email', 'email');

        if($v->validate()) {
            return true;
        } else {
            return $v->errors();
        }
    }
}