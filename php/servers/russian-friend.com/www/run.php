<?php
require ("vendor/autoload.php");
$request  = [
    'name' => 'coul',
    'password' => '123',
    'email' => 'a@a',
    'skype' => '@ssas'
];
//print_r($request);
$obj = new \Classes\User();
$obj->addUser($request);