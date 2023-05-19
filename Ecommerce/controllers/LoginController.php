<?php
require_once "vendor/autoload.php";
require_once __DIR__ . "/../classes/UserDAO.php";
require_once __DIR__ . "/../classes/Validate.php";

class LoginController {
    function login($user) {
        $validate = new Validate();
        $isValidLogin = $validate->validateLogin($user);

        if (!is_array($isValidLogin) && $isValidLogin) {
            $find_user = UserDAO::getUserByEmailAndPassword($user['email'], $user['senha']);

            if ($find_user && $find_user->getUsuario_id()) {
                $user = array(
                    'id' => $find_user->getUsuario_id(),
                    'name' => $find_user->getUsuario_nome(),
                    'email' => $find_user->getUsuario_email(),
                    'password' => $find_user->getUsuario_senha(),
                );

                return json_encode(array('isValid' => true, 'user' => $user));
            }

            return json_encode(array('isValid' => false, null));
        } else {
            $validation = array('isValid' => false, $isValidLogin);
            return json_encode($validation);
        }
    }
}