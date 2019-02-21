<?php
/**
 *
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/13
 * Time: 12:57
 * 链接数据库 注册页面插入数据
 * 链接页面: register.html
 */
header("content-type:text/html;charset=utf-8;");

//使用面向对象方法连接数据库
//$db=new mysqli("gxyiovmx.2365.dnstoo.com","dingyifeng_f","zxcvbn","dingyifeng");

//使用PDO方式链接数据库
//$dsn='mysql:host='.'gxyiovmx.2365.dnstoo.com'.';dbname='.'dingyifeng'.';';
//$dbh=new PDO($dsn,"dingyifeng_f","zxcvbn");

//1.建立连接--使用面向过程方法连接数据库，直接就选择好了数据库
$conn = mysqli_connect("gxyiovmx.2365.dnstoo.com", "dingyifeng_f", "zxcvbn", "dingyifeng");


$username = @$_POST['user'];
$password = @$_POST['pass'];
$times = @$_POST['times'];

//3.设置客户端和连接字符集;
mysqli_query($conn, "set names utf8");

$insertSql = "insert into business(username,password,times) values('{$username}','{$password}','{$times}')";

$result = @mysqli_query($conn, $insertSql);
//6.关闭数据库资源
mysqli_close($conn);
?>