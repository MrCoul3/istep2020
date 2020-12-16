<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <title>Hello, world!</title>
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-lg-4">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
<?php
$dir = 'images';
if (is_dir($dir)) {
    $openDir = opendir($dir);
    $active = true;
    while (($file = readdir($openDir)) !== false) {
        if ($file !== '.' && $file !== '..') {
            if ($active){
                echo '<div class="carousel-item active">';
                $active = false;
            }
            else {
                echo '<div class="carousel-item">';
            }
            echo '<img class="d-block w-100 h-100" src="'.$dir.'/'.$file.'" alt="First slide"></div>';
        }
    }
    closedir($openDir);
}
?>


                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
</div>


<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

</body>
</html>


<?php

//$dir = 'images';
//if (is_dir($dir)) {
//    $openDir = opendir($dir);
//    while (($file = readdir($openDir)) !== false) {
//        if ($file !== '.' && $file !== '..') {
//            echo "$file<br>";
//        }
//    }
//    closedir($openDir);
//}
?>
