<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/20
 * Time: 10:41
 * 用户自己修改密码
 */



header("content-type:text/html;charset=utf-8;");

//1.建立连接;
$conn= mysqli_connect("gxyiovmx.2365.dnstoo.com","dingyifeng_f","zxcvbn","dingyifeng");

//3.设置客户端和连接字符集;
mysqli_query($conn,"set names utf8");


//接收到传递过来的del参数
$username = @$_COOKIE['name'];
$oldPassword = @$_POST['oldPassword'];
$newPassword = $_POST['newPassword'];

//
//echo $username;
//echo $oldPassword;
//echo $newPassword;
$sql = "update entryTable set password='{$newPassword}',repassword='{$newPassword}' where username='{$username}';";

if (mysqli_query($conn,$sql)){
    echo "<script>alert('修改成功!')</script>";
    echo "<script>location = '../login.php'</script>";
}else{
    echo "<script>alert('修改失败!')</script>";
    echo "<script>location = 'setAccount.html'</script>";
}


//6.关闭数据库资源
mysqli_close($conn);

?>