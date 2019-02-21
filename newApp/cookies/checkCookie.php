<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/19
 * Time: 15:16
 * HTML页面查找返回Cookie,
 */

session_start();
$newYZM = @$_SESSION['views'];

echo $newYZM;
?>
