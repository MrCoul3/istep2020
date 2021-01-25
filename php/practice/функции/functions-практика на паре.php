<?php
$request = $_REQUEST;
$errors = [];
foreach ($request as $k => &$item) {
    $item = trim(strip_tags($item));
    if (empty($item)) {
        $errors[$k] = 'Не заполнено ' . $k;
    }
}

function getPassHash($userPassword)
{
    $sold = 'pass23';
    $hashString = $userPassword . $sold;
    return md5($hashString);
}

function saveRes($req)
{
    $string = '';
    $string .= date("Y-m-d H:i:s");
    foreach ($req as $k => $val) {
        if ($k === 'pass') {
            $val = getPassHash($val);
        }
        $string .= $k . ': ' . $val . PHP_EOL;
    }
    $string .= '============' . PHP_EOL;
    // записать в файл
    $save = file_put_contents('form.txt', $string, FILE_APPEND);
    return $save;
}
//$test = json_encode($errors);
//$decode = json_decode($test);
//$decode
//&$item - & позволяет работать не с копией а с ссылкой на элемент массива
//echo "<pre>";
//print_r($request);
//echo "</pre>";


exit();

//print_r($_COOKIE);
//print_r($_GET);
//print_r($_REQUEST); // в request лежит и get и post
die();
function get()
{
    echo 'get';
    return 'left';
}
$k = 2;
function myFunc($arg = false)
{
    var_dump($arg);
    var_dump(get());
    get();
    global $k;
//    print_r($GLOBALS);
    $res = 1 + $k;
    return $res;
}
$p = 'test';
echo myFunc($p);
echo '<br>';
myFunc($p);

//if (function_exists('myFunc')) {
//
//}         - проверка на существование функции

//x -debug расширение