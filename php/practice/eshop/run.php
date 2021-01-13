<?php
require ('vendor/autoload.php');

try {
    $obj = new \Eshop\DbHelper('product');
    $data = $obj->getData();
    echo "<pre>";
    print_r($data);
    echo "</pre>";
    $obj->addData([1=>"1",2=>"2"]);
    $obj->addData(["a"=>"a", "b"=>"b"]);
    $obj->save();
    $obj->addData(36);
    $obj->save();


}
catch (Exception $e) {
    echo $e->getMessage();
}


