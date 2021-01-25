<?php
require "vendor/autoload.php";
//var_dump(file_get_contents("php://input"));
$request = json_decode(file_get_contents('php://input'), true);
//print_r($request);
$obj = new \Classes\MessageSend();
if ($request['method'] == 'setMessage') {
    $obj->addMessage($request['message']);

    $messageOutput = $obj->messageOutput();
}

if ($request['method'] == 'clearDb') {
    $obj->clearDB();
}



?>
<body>
        <?php while ($record  = $messageOutput->fetch_assoc()):?>
        <p class="message"><?=$record['message']?></p>
        <?php endwhile;?>
</body>

<?php
//$messageOutput = $obj->messageOutput();
//$arr = [];
//
//while ($record  = $messageOutput->fetch_assoc()) {
//    echo "<pre>"; var_dump($record['message']); echo "</pre>";
//    $arr[] = $record['message'];
//}
//$data = json_encode($arr);

//if(isset($_POST['messages']))
//{
//    $messages = $_POST['messages'];
//
//}
//else
//{
//    echo "Неудача";
//}
//

