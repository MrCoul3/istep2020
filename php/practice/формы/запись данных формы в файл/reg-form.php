<?php
$input = file_get_contents('php://input');
$req = json_encode($input);
$req = $_REQUEST;
print_r($req);

function hashPass($password)
{
    $sold = '123';
    $hashPassword = $password . $sold;
    return md5($hashPassword);

}

function saveResult($req)
{
    $result = '';
    foreach ($req as $k => $val) {
        if  ($k === 'password') {
            $val = hashPass($val);
        }
        $result .= $k . ': ' . $val . PHP_EOL;
    }
    $save = file_put_contents('form.txt', $result, FILE_APPEND);
    return $save;
}

saveResult($req);