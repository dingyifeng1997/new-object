
<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/15
 * Time: 8:43
 * 数据库管理页面 修改数据库中的内容
 * 链接页面: showMysql.php
 */

@header("content-type:text/html;charset=utf-8;");

//1.建立连接;
$conn= mysqli_connect("gxyiovmx.2365.dnstoo.com","dingyifeng_f","zxcvbn","dingyifeng");

//3.设置客户端和连接字符集;
mysqli_query($conn,"set names utf8");

//接收到传递过来的参数
$User = @$_POST['User'];
$signature = @$_POST['signature'];

//echo $User."+".$newPass;

$sql = "update business set autograph='{$signature}' where username='{$User}';";

if (mysqli_query($conn,$sql)){
    echo "修改成功";
}else{
    echo "修改失败";
}



//6.关闭数据库资源
mysqli_close($conn);

?>