<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/19
 * Time: 15:16
 * HTML页面查找返回Cookie,
 */
header("content-type:text/html;charset=utf-8;");
echo @$_COOKIE["name"]; //这里返回cookie 的值
?>
