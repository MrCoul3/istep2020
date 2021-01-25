<?php
require "vendor/autoload.php";

use \Classes\MyShopDbAccess;


$MyShopDbAccess = new MyShopDbAccess(); // получить доступ к БД

$queryShops = "SELECT * FROM shops WHERE 1=1";
//$queryShops = "INSERT INTO `shops` (`id`, `name`, `adress`, `city`) VALUES (NULL, 'df', 'df', 'df');";
$queryResultShops = $MyShopDbAccess->query($queryShops);

$queryProducts = "SELECT * FROM products WHERE 1=1";
$queryResultProducts = $MyShopDbAccess->query($queryProducts);

// добавить товар
//$queryInsertProducts = "INSERT INTO `products` (`id`, `name`, `price`, `description`, `img_path`, `active`) VALUES (NULL, 'asd', '12333', 'asdsadasdasdsadsadasd', '', '1')";
//$queryResultInsertProducts = $MyShopDbAccess->query($queryInsertProducts);

echo 'shops';
while ($record  = $queryResultShops->fetch_assoc()) {
    echo "<pre>"; print_r($record); echo "</pre>";
}
//
//echo 'products';
//while ($record  = $queryResultProducts->fetch_assoc()) {
//    echo "<pre>"; print_r($record); echo "</pre>";
//}
?>
<form class="form" method="post" action="index.php">
    <input class="form__elem form-input form-input--email" type="email" placeholder="email" id="email">
    <label class="label-email" for="email"></label>
    <input class="form__elem form-input form-input--password" type="password" placeholder="пароль" id="password">
    <label class="label-password" for="password"></label>
    <input class="form__elem form-submit form-submit-login button" type="submit" value="войти">
</form>
