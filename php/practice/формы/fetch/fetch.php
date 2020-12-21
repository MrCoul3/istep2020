<?php

$out[] = file_get_contents('php://input');
print_r($out);
//$out[] = 100;
//$out[] = $_POST;
echo json_encode($out);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>fetch</title>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
            integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="wrap">
    <form method="post">
        <label for="name">Имя</label>
        <input class="name" type="text" name="name" >

        <label for="password">Пароль</label>
        <input class="password" type="password" name="password" >

        <input id="submit" type="submit">
    </form>
</div>
</body>
<script src="fetch-script.js"></script>
</html>
