<?php
    $cid = $_POST["cid"];
    unlink("file/$cid/dw.html");
    rmdir('file/'.$cid);
?>
