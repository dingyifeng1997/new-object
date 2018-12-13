<?php
    $cid = $_POST["cid"];
    unlink("file/$cid/index.html");
    rmdir('file/'.$cid);
?>
