<?php
$input = file_get_contents('php://input');
$req = json_decode($input);
var_dump($req);


?>
