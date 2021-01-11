<?php
//1. Обраться к странице http://ddred.ru/users.php получить данные и сохранить себе в локальный файлик user.json
//Далее будем работать только с этим файлом
//2. На основе данных из файла нужно создать функции для следующей статистики
//- написать функцию, которая возвращает всех однофамильцев
//- написать функцию, которая находит полных тезок
//- написать функцию, которая возвращает всех пользователей, которые старше 31 года
//- написать функцию, которая вычисляет средний возраст пользователей
//- написать функцию, которая определяет сколько в компании сотрудников с одинаковой должностью
//- написать функцию рандомного увольнения - если возраст кратен 3 или его зовут Bob Proper. Т.е. функция должна вернуть массив без сотрудников, которые подверглись увольнению
//- написать функцию, которая выдает зарплату сотруднику.
//Зарплата считается следующим образом должности 'Cleaner', 'Director', 'Clerk'  (случайное число от 1000 до 3000 умножить на 3.2 минус возраст сотрудника) , все остальные должности (случайное число от 1000 до 3000 умножить на 0.98 минус возраст сотрудника). На выходе должен получиться массив, в котором для каждого пользователя будет указана зп
//Значение зп округляем до целого числа вниз.

$file = fopen('json.txt', "r");
$file = file_get_contents('json.txt', "r");
$arr = json_decode($file);
//
//echo "<pre>";
//print_r($arr);
//echo "</pre>";


//написать функцию, которая выдает зарплату сотруднику.
function salary($array)
{

    foreach ($array as $k => $val) {
//        $val -> position === 'Cleaner'
        $pos = $val -> position;
        if ($pos === 'Cleaner' || $pos === 'Director' || $pos === 'Clerk') {
            $val -> salary = floor(rand(1000, 3000) * 3.2 - $val -> age);

        }
        else {
            $val -> salary = floor(rand(1000, 3000) * 0.98 - $val -> age);

        }
        echo "<pre>";
        print_r($val);
        echo "</pre>";

    }

}
salary($arr);

exit();
//написать функцию рандомного увольнения - если возраст кратен 3 или его зовут Bob Proper. Т.е. функция должна вернуть массив без сотрудников, которые подверглись увольнению
function dismissal($array)
{
    foreach ($array as $k => $val) {
        if ($val -> age % 3 !== 0 || $val -> name === 'Bob Proper') {
            $dismissalArr[] = $val;

        }
    }
    echo "массив без уволенных сотрудников";
    echo "<pre>";
    print_r($dismissalArr);
    echo "</pre>";
}
dismissal($arr);
die();
//- написать функцию, которая определяет сколько в компании сотрудников с одинаковой должностью
function samePosition($array)
{
    foreach ($array as $k => $val) {
        $positionArr[] = $val -> position;
    }
    $samePosition = array_count_values($positionArr);
    foreach ($samePosition as $k => $val) {
        echo $k .': '. $val . ' человека ' . '<br>';
        $summ += $val;
    }
    echo 'всего: ' . $summ . 'чел.';

}
samePosition($arr);
die();
//- написать функцию, которая вычисляет средний возраст пользователей
function averageAge($array)
{
    $summ = 0;
    foreach ($array as $k => $val) {
//        echo "<pre>";
//        print_r($val -> age);
//        echo "</pre>";
        $summ += $val -> age;
    }
    echo "средний возраст: " . round($summ / count($array));
}
averageAge($arr);

die();
//- написать функцию, которая возвращает всех пользователей, которые старше 31 года
function maxAge($array)
{
    echo "Старше 31 года";
    foreach ($array as $k => $val) {
        if ($array[$k] -> age > 31) {
            echo "<pre>";
            print_r($array[$k]);
            echo "</pre>";
        }
    }
    echo "___________________________";

}

maxAge($arr);
die();
//- написать функцию, которая возвращает всех однофамильцев
function namesakes($array)
{
    global $name;
    $name = [];
    foreach ($array as $k => $val) {
        $name[] = $array[$k] -> name;
    }

    $words = [];
    foreach ($name as $k => $val) {

        $words[] = explode(" ", $val);


    }
//    echo "<pre>";
//    print_r($words);
//    echo "</pre>";
    $sername = [];
    foreach ($words as $k => $val) {
        $sername[] = $words[$k][1];
    }
//    echo "<pre>";
//    print_r($sername);
//    echo "</pre>";

    $namesakes = array_count_values($sername);
//    echo "<pre>";
//    print_r($namesakes);
//    echo "</pre>";
    echo 'Список однофамильцев';
    foreach ($namesakes as $k => $val) {

        echo "<pre>";

        print_r($k);
        echo "</pre>";
    }
    echo "___________________________";

}
namesakes($arr);
//- написать функцию, которая находит полных тезок
function fullNamesakes($array)
{
    $fullNamesakes = array_count_values($array);
//    echo "<pre>";
//    print_r($fullNamesakes);
//    echo "</pre>";
    foreach ($fullNamesakes as $k => $val) {
        if ($val > 1) {
            $result[] = $k;
        }
    }
    echo "Список полных тезок";
    foreach ($result as $k => $val) {
        echo "<pre>";
        print_r($val);
        echo "</pre>";
    }

echo "___________________________";
}
fullNamesakes($name);
