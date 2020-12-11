<?php

//var_dump($_GET);
//print_r($_GET);
$firstName  = $_GET['firstname'];
$password  = $_GET['password'];

//echo "<pre>$firstName</pre>";
//echo "<pre>$password</pre>";
if ($password === '532256') {
    echo 'Вы авторизованы';
} else {
    echo 'Неверный пароль';
}
?>