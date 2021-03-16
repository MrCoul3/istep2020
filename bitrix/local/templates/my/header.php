<?php
global $APPLICATION;
?>
<!DOCTYPE html>
<html>
<head>
    <? $APPLICATION->ShowHead(); ?>
    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/styles/my.css">
</head>
<body>
<div id="panel"><? $APPLICATION->ShowPanel(); ?></div>
    <header>
        <h1>Я header</h1>
        <h3>init my_template_2</h3>
    </header>

