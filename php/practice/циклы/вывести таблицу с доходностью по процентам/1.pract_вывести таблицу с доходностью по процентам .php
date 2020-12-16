
<?php 

$summ = 300;
$rate = 0.2;
$array = [];

for ($i = 1; $i <= 20; $i++) {
    $a = $summ * $rate;
    $summ = $summ + $a;
    $array[] = $summ;
}

echo "<pre>";
print_r($array);
echo "</pre>";
?>

<table>
<tr>
    <th>Year</th>
    <th>SumStart</th>
    <th>SumEnd</th>
    <th>Profit</th>
</tr>

<?php foreach ($array as $key => $value):?>
<tr>
    <td><?=$key+1?></td>
    <td><?=$value / 1.2?></td>
    <td><?=$value?></td>
    <td><?=$value - $value / 1.2?></td>
</tr>

<?php endforeach?>
</table>


