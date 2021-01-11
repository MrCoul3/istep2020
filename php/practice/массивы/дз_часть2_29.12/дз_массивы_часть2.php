<?php
//5. Создать массив из 5 элементов. Элементом массива является массив из 5 цифр. Заполнить элементы
//случайными числами от 10 до 100. Вывести массив,
//минимальные значения в каждом столбце выделить
//красным цветом. Найти сумму минимальных элементов в каждом столбце и их среднее значение.

$color = '';
$sum = 0;
for ($i = 1; $i < 6; $i++) {
    for ($k = 0; $k < 5; $k++) {
        $arr[$i][] = rand(10, 100);
    }
    $sum += min($arr[$i]);
}
//echo "<pre>";
//print_r($arr);
//echo "</pre>";


?>
<?php for ($i = 1; $i < 6; $i++):?>
    <?php for($k = 0; $k < 5; $k++):?>
        <?php if ($arr[$i][$k] === min($arr[$i])):
            $color = 'red';?>
<span style="color: <?=$color?>"><?=$arr[$i][$k]?></span>
        <?php else:
            $color = 'black'?>
            <span style="color: <?=$color?>"><?=$arr[$i][$k]?></span>
        <?php endif;?>
    <?php endfor;?>
<br>

<?php endfor;?>
    <p>сумма минимальных значений: <?=$sum?></p>
    <p>среднее значение: <?=$sum / 5?></p>



<?php
die();

//4. Создать массив из 10 чисел. Элемент массива: число
//с плавающей точкой и степень округления. Заполнить
//массив, округлить и вывести на страницу

$arr = array(
    '121.2323' => 2,
    '100.512121212' => 4,
    '121.2323111' => 5,
    '121.23212123' => 3,
);
echo "<pre>";
print_r($arr);
echo "</pre>";
?>
<?php foreach ($arr as $k => $val):?>
<p><?=$k?> rounded to <?=$val?>: <?=round($k, $val)?> </p>
<?php endforeach;?>
<?php
//die();

//3. Создать массив из 10 чисел. В первый элемент записать число 1. Каждое следующее число генерируется
//случайно и записывается в массив при условии, если
//оно больше предыдущего. Результат массива вывести
//на страницу.

$arr[] = 1;
$step = 10;
echo ' рандомные числа ';
while (count($arr) < 10) {
    $r = rand(1, $step );
print_r( $r . " ");

    if ( $r > max($arr)) {
        $arr[] = $r;
        $step += 1;
    }
}
echo "<pre>";
print_r($arr);
echo "</pre>";


die();
?>

<?php

//1, 2 задание

$file = fopen('json.txt', "r");
$file = file_get_contents('json.txt', "r");
$arr = json_decode($file);
echo "<pre>";
print_r($arr);
echo "</pre>";

$arrComp = [];
foreach ($arr as $k => $val) {
    $arrComp[] =$val -> company;
}
$arrComp = array_unique($arrComp);

?>
<!--    2. Отфильтровать массив из задания 1 и вывести работников в зависимости от компаний в виде списка.-->
    <h3>2 задание</h3>
<ul>
<?php for ($i = 0; $i < count($arrComp); $i++):?>
    <li>
        <?=$arrComp[$i]?>
        <?php foreach ($arr as $k => $val):?>
            <?php if($val->company === $arrComp[$i]):?>
        <ul>
            <li>
                <?=$val->name?>
            </li>
        </ul>
        <?php endif;?>
        <?php endforeach;?>
    </li>
<?php endfor;?>
</ul>

<!--    //1. Имеется массив из 10 элементов, структура элемента:-->
<!--    //name, company, position. Вывести на экран массив в-->
<!--    //следующем формате: «“Name” is working in “Company”-->
<!--    //as: “position”».-->
<h3>1 задание</h3>
<?php foreach ($arr as $k => $val):?>
<p><?=$val->name?> is working in <?=$val->company?> on position: <?=$val->position?></p>
<?php endforeach;?>