<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/19
 * Time: 15:16
 * 添加一个登录成功Cookie
 * 链接页面: login.php
 */
//启动session的初始化
session_start();
//注册session变量，赋值为一个用户的名称

$val = $_POST["cook"];
// 将验证码写入 session
$_SESSION['views'] = $val;
//$_SESSION['views'] = $val;
?>