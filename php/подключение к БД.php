<?php

$mysqli = new mysqli("localhost", "mysql", "mysql", "hello2");
$result = $mysqli->query('SELECT * FROM users WHERE 1=1');

$all = $result->fetch_all(MYSQLI_ASSOC); // просто массив без обработки без ассоцияативного ключа
echo "<pre>"; print_r($all); echo "</pre>";


//while ($record  = $result->fetch_assoc()) {
//    echo "<pre>"; print_r($record); echo "</pre>";
//}