<?php
require ('HtmlWebForm.php');
$method = 'post';
$action = 'link.php';
$obj = new HtmlWebForm($method, $action);
//echo "<pre>";
//print_r($obj);
//$obj -> formAtr('post');
$obj -> createInput('text');
$obj -> createTextarea('link');
$obj -> createSelect('select', 10);
$obj -> createButton('button');
$obj -> createElem('div');

?>

<? $obj->getHtml();?>

