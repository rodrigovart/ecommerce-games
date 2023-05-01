<?php
require_once "vendor/autoload.php";
require_once __DIR__ . "/../classes/UserDAO.php";
require_once __DIR__ . "/../classes/Validate.php";

class SingUpController {
    function sign($user) {
        $validate = new Validate();
        $isValidSign = $validate->validateSign($user);

        if (!is_array($isValidSign) && $isValidSign) {
            UserDAO::insertUser($user);
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
            $validation = array('isValid' => false, $isValidSign);
            return json_encode($validation);
        }
    }
}