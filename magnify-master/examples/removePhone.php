<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/2/24
 * Time: 11:33
 */

$path = $_POST["path"];
unlink($path);
echo "删除成功";