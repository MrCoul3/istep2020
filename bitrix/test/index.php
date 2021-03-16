<? require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php"); ?>

<?php
global $APPLICATION;
$APPLICATION->IncludeComponent('web:simple', "", [
    'COLOR' => '#0f0',
    'DISPLAY' => 'FLEX',
    ],
    false);
$APPLICATION->IncludeComponent('web:simple', "", [
    'COLOR' => '#023543',
    'DISPLAY' => 'BLOCK',

],
    false);
$APPLICATION->IncludeComponent('web:simple', "new_templates", [
    'SIZE' => '300px',
    'COLOR' => '#023543',

],
    false);
?>

<? require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php"); ?>
