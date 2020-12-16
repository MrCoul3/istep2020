<?php
$dec = $_POST['dec'];
$bin = decbin($dec);
?>
<h3 style="text-align: center">Перевод из десятичной в двоичную СИ</h3>
<form action="index.php" method="post" style="display: flex; justify-content: center">
<input type="text" name="dec" placeholder="число в десятичной СИ">
<input type="submit" value="перевести">
<input type="text" style="border: 1px solid black;" value="<?=$bin?>">
</form>
