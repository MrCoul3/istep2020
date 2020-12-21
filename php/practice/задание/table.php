<?php
$req = $_REQUEST;
$data = json_encode($req);
print_r($data);
function save($data) {
    $save = file_put_contents('data.txt', $data, FILE_APPEND);
    return $save;
}
save($data);