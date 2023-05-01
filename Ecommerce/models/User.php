<?php
Class User {
    private $usuario_id;
    private $usuario_nome;
    private $usuario_email;
    private $usuario_senha;

    public function __construct($user) {
        $this->setUsuario_id($user["usuario_id"]);
        $this->setUsuario_nome($user["usuario_nome"]);
        $this->setUsuario_email($user["usuario_email"]);
        $this->setUsuario_senha($user["usuario_senha"]);
    }

    /**
     * Get the value of usuario_id
     */ 
    public function getUsuario_id()
    {
        return $this->usuario_id;
    }

    /**
     * Set the value of usuario_id
     *
     * @return  self
     */ 
    public function setUsuario_id($usuario_id)
    {
        $this->usuario_id = $usuario_id;

        return $this;
    }

    /**
     * Get the value of usuario_nome
     */ 
    public function getUsuario_nome()
    {
        return $this->usuario_nome;
    }

    /**
     * Set the value of usuario_nome
     *
     * @return  self
     */ 
    public function setUsuario_nome($usuario_nome)
    {
        $this->usuario_nome = $usuario_nome;

        return $this;
    }

    /**
     * Get the value of usuario_email
     */ 
    public function getUsuario_email()
    {
        return $this->usuario_email;
    }

    /**
     * Set the value of usuario_email
     *
     * @return  self
     */ 
    public function setUsuario_email($usuario_email)
    {
        $this->usuario_email = $usuario_email;

        return $this;
    }

    /**
     * Get the value of usuario_senha
     */ 
    public function getUsuario_senha()
    {
        return $this->usuario_senha;
    }

    /**
     * Set the value of usuario_senha
     *
     * @return  self
     */ 
    public function setUsuario_senha($usuario_senha)
    {
        $this->usuario_senha = $usuario_senha;

        return $this;
    }
}