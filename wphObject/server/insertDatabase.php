<?php
/**
 * Created by PhpStorm.
 * User: 丁毅峰
 * Date: 2018/8/24
 * Time: 9:13
 */

header("content-type:text/html;charset=utf-8;");

//1.建立连接;
$conn= mysqli_connect("gxyiovmx.2365.dnstoo.com","dingyifeng_f","zxcvbn","dingyifeng");

//2.设置客户端和连接字符集;
mysqli_query($conn,"set names utf8");


//3.接收到传递过来的del参数
$scenario = @$_POST['scenario'];  //屏幕类型
$address= @$_POST['address'];     //地址
$white = @$_POST['white'];         //宽度
$height = @$_POST['height'];       //高度
$contact = @$_POST['contact'];     //手机号码
$foundDate = @$_POST['foundDate'];     //手机号码


//4.编写插入sql语句
$sql = "insert into message(scenario,address,white,height,contact,foundDate) values('{$scenario}','{$address}',{$white},{$height},'{$contact}','{$foundDate}')";

$result = @mysqli_query($conn,$sql);

echo $scenario;
echo $address;
echo $white;
echo $height;
echo $contact;

//5.关闭数据库资源
mysqli_close($conn);


?>