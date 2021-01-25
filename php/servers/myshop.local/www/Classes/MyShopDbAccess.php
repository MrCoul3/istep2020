<?php
namespace Classes;



class MyShopDbAccess

{

    protected $mysqli = '';

    function __construct()
    {
        $this->mysqli = new \mysqli('localhost', 'root', 'asd8731ds^8243#Asf!', 'myshop');
    }

    public function query($query)
    {
        return $this->mysqli->query($query);
    }
}

//echo 'db access permission';
//echo '<br>';
//echo '<br>';
//echo 'class: MyShopDbAccess';
