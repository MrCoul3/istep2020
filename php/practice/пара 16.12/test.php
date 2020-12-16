<?php
/* 
echo $name;
$number = 1;
$double = 1.2;
$array = [1, "test"]; // новый вид массива вместо array()
echo "<pre>";
print_r($array);
echo "</pre>";

    $fakenumber = 1;
    $fakenumber .= "прибавить строку";
    var_dump((int)$fakenumber); */

//    var_dump((int)$fakenumber); привести к числу dump - проверка типа 

// для сложения строк используется точка 
// + это всегда математический оператор 

// psr стандарт написания 
/* class MyClass 
{

}

$obj = new MyClass;

var_dump($obj);

if ($number > 3) {

}
elseif {

}
else {

}
 */

// die(); функция умереть 


// перебор массивов
$array = ["one" => "1", "test"];
foreach ($array as $key => $value) {
    # code...
    echo $key;
    echo $value;
}

// циклы 
// for ($i...) как на JS