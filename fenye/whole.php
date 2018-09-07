<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/4
 * Time: 15:23
 */

header("content-type:text/html;charset=utf-8;");

//1.建立连接;
//    $conn= mysql_connect("localhost","root","199707142510dyf");
$conn= mysql_connect("localhost","root","199707142510dyf");
//2.选择数据库
$ku = mysql_select_db ("mytable",$conn);

//3.设置客户端和连接字符集;
mysql_query("set names utf8");
//    获取到总页数
$ZongPage = mysql_query("select count(*) from mydata");
$sum = mysql_fetch_row($ZongPage);
$pageC = ceil($sum[0]/1);   //总条数
//$pageCount = ceil($sum[0]/10);   //总页数
echo $pageC;
//echo $pageCount;


//6.关闭数据库资源
mysql_close($conn);
?>