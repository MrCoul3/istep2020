<?php
require "vendor/autoload.php";
$obj = new \Classes\MessageSend();
$messageOutput = $obj->messageOutput();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
            integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
</head>
<style>
    .frame {
        position: relative;
        width: 500px;
        height: 500px;
        border: 1px solid black;
        margin: 0 auto;
    }
    .message {
        margin-left: 50px;
    }
    form {
        bottom: 0;
        position: absolute;
    }
    .delete {
        right: 0;
    }

</style>
<body>

<div class="frame">
    <div id="messages">
        <?php while ($record  = $messageOutput->fetch_assoc()):?>
            <p class="message"><?=$record['message']?></p>
        <?php endwhile;?>
    </div>
    <form class="send" method="post" action="">
        <input type="text" name="message" class="text">
        <input type="submit" class="send-btn">
    </form>
    <form class="delete" action="" method="post">
        <input class="delete-from-db" type="submit" value="очистить БД">
    </form>
</div>

</body>
<script src="script.js"></script>
</html>

