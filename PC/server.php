<?php

    $id = $_POST["ids"];

    date_default_timezone_set(PRC);
    $data = date('Y-m-d_H-i-s', time());

    $html_canvas = $_POST['html_canvas'];
    $image = base64_decode(substr($html_canvas, 22));
    header('Content-Type: image/png');
    $filename = "../magnify-master/examples/img/".$id."-".$data . ".png";
    $fp = fopen($filename, 'w');
    fwrite($fp, $image);
    fclose($fp);
    echo $data;
?>
