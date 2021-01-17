<?php

namespace Base;



class MyShopDbAccess

{

    protected $mysqli = '';

    function __construct()
    {
        $this->mysqli = new \mysqli('localhost', 'mysql', 'mysql', 'myshop');
    }
    public function query($query)
    {
        return $this->mysqli->query($query);
    }
}
