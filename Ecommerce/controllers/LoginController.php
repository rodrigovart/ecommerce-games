<?php
require_once "vendor/autoload.php";
require_once __DIR__ . "/../classes/UserDAO.php";
require_once __DIR__ . "/../classes/Validate.php";

class LoginController {
    function login($user) {
        $validate = new Validate();
        $isValidLogin = $validate->validateLogin($user);

        if (!is_array($isValidLogin)) {
            $find_user = UserDAO::getUserByEmailAndPassword($user['email'], $user['senha']);

            if ($find_user) {
                $user = array(
                    'id' => $find_user->getUser_id(),
                    'name' => $find_user->getUser_name(),
                    'email' => $find_user->getUser_email(),
                    'password' => $find_user->getUser_password(),
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