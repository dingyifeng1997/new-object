<?php
/**
 * Created by PhpStorm.
 * User: 丁毅峰
 * Date: 2018/8/24
 * Time: 9:13
 * usage:将点击的按钮内容添加到数据库中
 */

//    获取按钮状态

header("content-type:text/html;charset=utf-8;");

//1.建立连接;
$conn= mysqli_connect("gxyiovmx.2365.dnstoo.com","dingyifeng_f","zxcvbn","dingyifeng");

//2.设置客户端和连接字符集;
mysqli_query($conn,"set names utf8");

$cid = @$_POST['cid'];
$clickName = @$_POST['clickName'];
//3.编写插入sql语句
//$sql = "update test1 set username ='g' where id=1;
$sql = "update message set 	checkPerson='{$clickName}' where id={$cid}";

$result = @mysqli_query($conn,$sql);


//5.关闭数据库资源
mysqli_close($conn);

?>
