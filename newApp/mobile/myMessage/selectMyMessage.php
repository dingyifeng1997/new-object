<?php
/**
 * Created by PhpStorm.
 * User: 丁毅峰
 * Date: 2018/8/24
 * Time: 9:13
 * usage:返回查找到数据库的所有信息
 */

header("content-type:text/html;charset=utf-8;");

//1.建立连接;
$conn= mysqli_connect("gxyiovmx.2365.dnstoo.com","dingyifeng_f","zxcvbn","dingyifeng");

//2.设置客户端和连接字符集;
mysqli_query($conn,"set names utf8");

//要查找的用户名
$user = $_POST["user"];

//3.编写插入sql语句
$sql = "select * from business where username='{$user}'";
$result = @mysqli_query($conn,$sql);
while($row = mysqli_fetch_row($result)){
    @$st .=  "{"."id:\""."$row[0]"."\","."username:\""."$row[1]"."\","."password:\""."$row[2]"."\","."time:\""."$row[3]\"".","."imgpath:\""."$row[4]\"".","."autograph:\""."$row[5]\""."},";
}
$nums = substr($st, 0, -1); //将拼接好的字符串最后一个 , 逗号去掉
echo $nums;

//    得到的参数
/*
    echo $row[1];   //屏幕类型
    echo $row[2];   //客户地址
    echo $row[3];   //屏幕宽度
*/


//5.关闭数据库资源
mysqli_close($conn);


?>