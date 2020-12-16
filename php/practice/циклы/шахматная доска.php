
<!--//Вывести на экран шахматную доску элементом «таблица».-->



<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        td {
            width: 50px;
            height: 50px;
        }
    </style>
</head>
<body>
    <table style="margin: 0 auto; border: 1px solid black">
        <?php for ($k = 0; $k <= 8; $k++):?>
        <tr>
            <?php for ($i = 0; $i <= 8; $i++):
            if ($k % 2 === 0) {
                if ($i % 2 === 0) {
                    $a = 'black';
                } else {
                    $a = 'white';
                }
            }
            if ($k % 2 !== 0) {
                if ($i % 2 === 0) {
                    $a = 'white';
                } else {
                    $a = 'black';
                }
            }
                echo "<td style='background: $a;'></td>";
            ?>
            <?php endfor?>
        </tr>
        <?php endfor?>
    </table>
</body>
</html>
