<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/15
 * Time: 8:43
 */


header("content-type:text/html;charset=utf-8;");

//1.建立连接;
//    $conn= mysql_connect("localhost","root","199707142510dyf");
$conn= mysql_connect("localhost","root","199707142510dyf");
//2.选择数据库
$ku = mysql_select_db ("mytable",$conn);

//3.设置客户端和连接字符集;
mysql_query("set names utf8");

//接收到传递过来的del参数
$did = $_GET['delId'];
$sql = "delete from mydata where id=$did";
if (mysql_query($sql)){
    echo "<script>alert('删除成功!')</script>";
    echo "<script>location = 'mysql.php?page={$_GET['pg']}'</script>";
}else{
    echo "<script>alert('删除失败!')</script>";
    echo "<script>location = 'mysql.php?page={$_GET['pg']}'</script>";
}



//6.关闭数据库资源
mysql_close($conn);

?>