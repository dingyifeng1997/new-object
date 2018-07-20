<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/19
 * Time: 15:16
 * 添加一个登录成功Cookie
 */
header("content-type:text/html;charset=utf-8;");

setcookie("name",$_GET['cook'],0,"/");

?>