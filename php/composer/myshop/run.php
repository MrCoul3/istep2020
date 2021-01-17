<?php

require "vendor/autoload.php";

use \Base\MyShopDbAccess;


$MyShopDbAccess = new MyShopDbAccess(); // получить доступ к БД
echo '<pre>'; print_r($MyShopDbAccess); echo'</pre>';

$query = "SELECT * FROM shops WHERE 1=1"; // запрос
$queryResult = $MyShopDbAccess->query($query);


while ($record  = $queryResult->fetch_assoc()) {
    echo "<pre>"; print_r($record); echo "</pre>";
}
