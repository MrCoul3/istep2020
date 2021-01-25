require "1.php"; подключает файл , если его нет, то fatal error
include."2.php"; тоже подключает файл, если его нет то "warning"


$file = fopen('json.txt', "r");

$file = file_get_contents('json.txt', "r");

$arr = json_decode($file);

