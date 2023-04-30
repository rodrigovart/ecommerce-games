<?php
Class User {
    private $user_id;
    private $user_name;
    private $user_email;
    private $user_password;

    public function __construct($user) {
        $this->setUser_id($user["user_id"]);
        $this->setUser_name($user["user_name"]);
        $this->setUser_email($user["user_email"]);
        $this->setUser_password($user["user_password"]);
    }

    /**
     * Get the value of user_id
     */
    public function getUser_id() {
        return $this->user_id;
    }

    /**
     * Set the value of user_id
     *
     * @return  self
     */
    public function setUser_id($user_id) {
        $this->user_id = $user_id;
    }

    /**
     * Get the value of user_name
     */
    public function getUser_name() {
        return $this->user_name;
    }

    /**
     * Set the value of user_name
     *
     * @return  self
     */
    public function setUser_name($user_name) {
        $this->user_name = $user_name;
    }

    /**
     * Get the value of user_email
     */
    public function getUser_email() {
        return $this->user_email;
    }

    /**
     * Set the value of user_email
     *
     * @return  self
     */
    public function setUser_email($user_email) {
        $this->user_email = $user_email;

        return $this;
    }

    /**
     * Get the value of user_password
     */
    public function getUser_password() {
        return $this->user_password;
    }

    /**
     * Set the value of user_password
     *
     * @return  self
     */
    public function setUser_password($user_password) {
        $this->user_password = $user_password;
    }
}