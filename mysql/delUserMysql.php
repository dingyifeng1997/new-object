<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/15
 * Time: 8:43
 * 删除数据库的数据
 * 链接页面: showMysql.php
 */


header("content-type:text/html;charset=utf-8;");

//1.建立连接;
$conn= mysqli_connect("gxyiovmx.2365.dnstoo.com","dingyifeng_f","zxcvbn","dingyifeng");

//3.设置客户端和连接字符集;
mysqli_query($conn,"set names utf8");

//接收到传递过来的del参数
$did = $_GET['delId'];

//打断点测试得到的ID参数
//echo "<script>alert({$did})</script>";

$sql = "delete from entryTable where id={$did}";

if (mysqli_query($conn,$sql)){
    echo "<script>alert('删除成功!')</script>";
    echo "<script>location = 'showMysql.php?page={$_GET['pg']}'</script>";
}else{
    echo "<script>alert('删除失败!')</script>";
    echo "<script>location = 'showMysql.php?page={$_GET['pg']}'</script>";
}



//6.关闭数据库资源
mysqli_close($conn);

?>