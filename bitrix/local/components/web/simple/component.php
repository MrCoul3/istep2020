<?php
//echo '<pre>'; print_r($arParams); echo '</pre>';
$descr = [
    '#0f0' => 'green',
  '#f00' => 'red',
    '#023543' => 'КАКОЙ ТО ЦВЕТ'
];

$paramColor = $arParams['COLOR'];
$paramDisplay = $arParams['DISPLAY'];
if (array_key_exists($paramColor, $descr)) {
    $colorName = $descr[$paramColor];
} else {
    $colorName = 'не знаю';
}
$arResult['COLOR_NAME'] = $colorName;
$arResult['DISPLAY_TYPE'] = $paramDisplay;

$this->IncludeComponentTemplate();