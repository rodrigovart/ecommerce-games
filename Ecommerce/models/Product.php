<?php

class Product {
    private $produto_id;
    private $produto_nome;
    private $produto_descricao;
    private $produto_imagem;

    public function __construct($product) {
        $this->setProduto_id($product["produto_id"]);
        $this->setProduto_nome($product["produto_nome"]);
        $this->setProduto_descricao($product["produto_descricao"]);
        $this->setProduto_imagem($product["produto_imagem"]);
    }

    /**
     * Get the value of produto_id
     */ 
    public function getProduto_id()
    {
        return $this->produto_id;
    }

    /**
     * Set the value of produto_id
     *
     * @return  self
     */ 
    public function setProduto_id($produto_id)
    {
        $this->produto_id = $produto_id;

        return $this;
    }

    /**
     * Get the value of produto_nome
     */ 
    public function getProduto_nome()
    {
        return $this->produto_nome;
    }

    /**
     * Set the value of produto_nome
     *
     * @return  self
     */ 
    public function setProduto_nome($produto_nome)
    {
        $this->produto_nome = $produto_nome;

        return $this;
    }

    /**
     * Get the value of produto_descricao
     */ 
    public function getProduto_descricao()
    {
        return $this->produto_descricao;
    }

    /**
     * Set the value of produto_descricao
     *
     * @return  self
     */ 
    public function setProduto_descricao($produto_descricao)
    {
        $this->produto_descricao = $produto_descricao;

        return $this;
    }

    /**
     * Get the value of produto_imagem
     */ 
    public function getProduto_imagem()
    {
        return $this->produto_imagem;
    }

    /**
     * Set the value of produto_imagem
     *
     * @return  self
     */ 
    public function setProduto_imagem($produto_imagem)
    {
        $this->produto_imagem = $produto_imagem;

        return $this;
    }
}