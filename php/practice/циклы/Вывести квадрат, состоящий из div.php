<?php
$count = $_POST['number'];

?>

<style>
    .clear {
        clear: both;
    }
    .col {
        float: left;
        background: red;
        border: 1px solid black;
        width: 30px;
        height: 30px;
    }
</style>
<form action="index.php" method="post">
    <input type="number" name="number" style="margin: 20px 0; width: 100px;" placeholder="Введите число квадратов">
    <input type="submit" value="ok" style="width: 40px;">
</form>
<?php for ($i = 0; $i < $count ** 2; $i++):
    if ($i % $count === 0) {
        echo "<div class=\"clear\"></div>";
    }?>
<div class="col"></div>
<?php endfor?>
