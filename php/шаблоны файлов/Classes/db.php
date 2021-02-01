<?php

namespace Classes;


class db
{
    protected $db = null;

    function __construct()
    {
        $db = new \mysqli('localhost', 'root', 'asd8731ds^8243#Asf!', 'testing.coul');
    }

    public function query($query)
    {
        return $this->db->query($query);
    }
}