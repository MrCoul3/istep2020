<?php
require ("vendor/autoload.php");
$request = json_decode(file_get_contents('php://input'), true);
//print_r($request);
$obj = new \Classes\User();
$obj->addUser($request);
