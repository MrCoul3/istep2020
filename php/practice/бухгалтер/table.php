<?php
//через fetch
$input = file_get_contents('php://input');
$req = json_decode($input);
var_dump($req);

function save($input)
{
    $save = file_put_contents('data.txt', $input . "\n", FILE_APPEND);
    return $save;
}

save($input);

$file = fopen('data.txt', "r");
$arr =[];
while (!feof($file)) {
        $arr[] = fgets($file);
}
fclose($file);
print_r($arr);

$dec =[];
for ($i=0; $i < count($arr) -1; $i++) {
    if ($arr[$i] !== "\n") {
        $dec[] = json_decode($arr[$i]);
    }
}
echo "<pre>";
print_r($dec);
echo "</pre>";
