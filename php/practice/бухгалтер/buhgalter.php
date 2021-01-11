<?php
//Необходимо реализовать функционал, который будет записывать, сохранять данные о доходах пользователя.
//1. На странице необходимо сделать форму для занесения данных в хранилище. Поля формы: селектор для выбора типа записи "доход или расход", комментарий к транзакции (куда были потрачены деньги или откуда пришли), и значение денежных единиц.
//2. На странице результата вывести данные о транзакциях в 2 таблицы. В одной отобразить данные по затратам, в другой данные по доходам.
//+ на странице необходимо вывести суммарные данные. Сделать возможность фильтровать данные по месяцам.
//3. На странице результата нужно вывести топ3 самых популярных затрат

//фильтрация по месяцам
$month = 12;
$monthInput = file_get_contents('php://input');
$reqMonthInput = json_decode($monthInput);
//    [month] => december
foreach ($reqMonthInput as $k => $val) {
    $month = $val;
}
if ($month === 'december') {
    $month = 12;
}
if ($month === 'january') {
    $month = 1;
}
echo $month;
$req = $_REQUEST;
// добавляем в массив текущую дату

$req[data] = date('d.m h:m');


// проверка на пустоту
$errors = [];
foreach ($req as $k => $val) {
    $val = trim($val);
    if (empty($val)) {
       $errors[$k] = 'Не заполнено поле ' . $k;
    }
}
echo "<pre>";
print_r($errors);
echo "</pre>";

// функция сохранения в файл - базу данных
function save($input)
{
    $save = file_put_contents('data.txt', $input . "\n", FILE_APPEND);
    return $save;
}
// если массив с ошибками пуст - кодируем данные формы и выполняем функцию сохранения
if (empty($errors)) {
//    $req .= date('d.m h:m');
    $input = json_encode($req);
    save($input);
}
// открываем файл data.txt
$file = fopen('data.txt', "r");
// записываем  в массив построчно элементы json, пока не кончатся строки в файле
$arr =[];
while (!feof($file)) {
        $arr[] = fgets($file);
}

// закрываем файл
fclose($file);
// записываем в новый массив $dec декодированные строки json без пустой строки(из-за переноса строки при записи в базу данных $input . "\n")
// и добавляем нужные значения массива в таблицу (Html)
$dec =[];
for ($i=0; $i < count($arr) -1; $i++) {
    if ($arr[$i] !== "\n") {
        $dec[] = json_decode($arr[$i]);
    }
}
// создаю переменные для подсчета суммы расходов и доходов
$sumexp = 0;
$sumprofits = 0;
// создаю массив элементов comments для топ-3 популярных затрат
$comments =[];
// кладу в массив называния статей затрат
foreach ($dec as $k => $val) {
    if ($dec[$k] -> comment && ($dec[$k] -> coming) === 'Expenses') {
        $comments[] = $dec[$k] -> comment;
    }
}
// подсчитываю количество всех значений массива comments
$popularArr = array_count_values($comments);
// сортирую в обратном порядке
arsort($popularArr);

//записываю в новый массив отсортированные именования статей затрат
$popularItems = [];

foreach ($popularArr as $k =>  $val) {
    $popularItems[] = $k;
}
// присваиваю топовым переменным 1, 2 и 3 значения массива $popularItems
$top1 = $popularItems[0];
$top2 = $popularItems[1];
$top3 = $popularItems[2];

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Бухгалтер</title>
    <style>
        form {
            width: 700px;
            border: 1px solid black;
            margin: 0 auto;
            padding: 40px;
        }
        .select {
            display: flex;
            margin: 0 auto;
            justify-content: center;
        }
        .submit {
            width: 100px;
            height: 40px;
            display: block;
            margin: 0 auto;
            margin-top: 20px;
        }
        .flex {
            display: flex;
            width: 700px;
            margin: 0 auto;
            justify-content: space-between;
        }
        .month-expenses {
            position: absolute;
            left: 228px;
        }
        .month-select {
            position: absolute;
            left: 318px;
            height: 19px;
        }
        caption {
            text-align: left;
        }
        h3 {
             text-align: center;
        }
    </style>
</head>
<body>
<form action="buhgalter.php" method="post" id="form">
    <div class="select">
        <select name="coming">
            <option value="Profit">Profit</option>
            <option value="Expenses">Expenses</option>
        </select>
        <input name="summ" type="number" placeholder="сумма">
        <input name="comment" type="text" placeholder="коммент">
        <select name="currency">
            <option value="RUB">RUB</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
        </select>
    </div>
    <input class="submit"  type="submit" value="Занести">
</form>
<div class="flex">

    <table>
        <caption>Таблица расходов</caption>
        <form class="month-change" method="post">
            <select name="month" class="month-expenses">
                <option value="december">december</option>
                <option value="january">january</option>
            </select>
            <input type="submit" class="month-select" value="ok">
        </form>


        <tr>
            <th>Сумма</th>
            <th>Коммент</th>
            <th>Валюта</th>
            <th>Вемя</th>
        </tr>
        <?php foreach ($dec as $k => $val):?>

            <?php if ($dec[$k] -> coming === 'Expenses'):
                $sumexp += $dec[$k] -> summ;?>
                <tr>
                    <td><?=$dec[$k] -> summ?></td>
                    <td><?=$dec[$k] -> comment?></td>
                    <td><?=$dec[$k] -> currency?></td>
                    <td><?=date('d.m h:m')?></td>
                </tr>

            <?php endif;?>
        <?php endforeach;?>
        <tr>
            <td><?=$sumexp?></td>
        </tr>

    </table>

    <table>
        <caption>Таблица доходов</caption>
        <tr>
            <th>Сумма</th>
            <th>Коммент</th>
            <th>Валюта</th>
            <th>Вемя</th>
        </tr>
        <?php foreach ($dec as $k => $val):?>
            <?php if ($dec[$k] -> coming === 'Profit'):
                $sumprofits += $dec[$k] -> summ;?>
                <tr>
                    <td><?=$dec[$k] -> summ?></td>
                    <td><?=$dec[$k] -> comment?></td>
                    <td><?=$dec[$k] -> currency?></td>
                    <td><?=$dec[$k] -> data?></td>
                </tr>
            <?php endif;?>
        <?php endforeach;?>
        <tr>
            <td><?=$sumprofits?></td>
        </tr>
    </table>

</div>
<div>
    <h3>Топ 3 популярных затрат</h3>
    <ul>
        <li><?=$top1?></li>
        <li><?=$top2?></li>
        <li><?=$top3?></li>
    </ul>
</div>
</body>
<script src="script.js"></script>
</html>