<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/15
 * Time: 8:43
 * 修改数据库中的内容
 */


header("content-type:text/html;charset=utf-8;");

//1.建立连接;
$conn= mysqli_connect("gxyiovmx.2365.dnstoo.com","dingyifeng_f","zxcvbn","dingyifeng");

//3.设置客户端和连接字符集;
mysqli_query($conn,"set names utf8");

//接收到传递过来的del参数
$id = @$_POST['id'];
$username = @$_POST['username'];
$password = @$_POST['password'];

//打断点测试得到的ID参数
//echo "<script>alert({$id})</script>";
//echo "<script>alert({$username})</script>";
//echo "<script>alert({$password})</script>";
//echo "<script>alert({$_POST['user']})</script>";
//echo "<script>alert({$id})</script>";


echo "<a href='../backLogin.html'>回首页</a> ";

$sql = "update entryTable set username={$username},password={$password},repassword={$password} where id={$id};";
//$sql = "update entryTable set username=123,password=123,repassword=123,issue=123,answer=123  where id=15;";


//update entryTable set username=123,password=123,repassword=123,issue=123,answer=123  where id=12; //cmd测试语句

if (mysqli_query($conn,$sql)){
    echo "<script>alert('修改成功!')</script>";
    echo "<script>location = 'showMysql.php?page={$_GET['pg']}'</script>";
}else{
    echo "<script>alert('修改失败!')</script>";
    echo "<script>location = 'showMysql.php?page={$_GET['pg']}'</script>";
}



//6.关闭数据库资源
mysqli_close($conn);

?>