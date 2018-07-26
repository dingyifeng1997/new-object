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
$conn= mysqli_connect("gxyiovmx.2365.dnstoo.com","dingyifeng_f","zxcvbn","dingyifeng");



//    echo "username = ".$_POST['username'];
//        echo "<br>";
//    echo "password = ".$_POST['password'];
//        echo "<br>";
//    echo "repassword = ".$_POST['repassword'];
//        echo "<br>";
//    echo "issue = ".$_POST['issue'];
//        echo "<br>";
//    echo "answer = ".$_POST['answer'];
//        echo "<br>";
$username = @$_POST['username'];
$password = @$_POST['password'];
$repassword = @$_POST['repassword'];
$phoneNumber = @$_POST['phoneNumber'];


//    $conn= mysql_connect("localhost","root","199707142510dyf");

//设置要链接的库
//    $table = mysql_select_db("mysql");

//3.设置客户端和连接字符集;
mysqli_query($conn,"set names utf8");

if(@$_GET['bool'] == true){
    $insertSql = "insert into entryTable(username,password,repassword,phoneNumber) values('{$username}','{$password}','{$repassword}','{$phoneNumber}')";
    $result = @mysqli_query($conn,$insertSql);
}
echo "<script>location.href = 'skip.php?username='+'{$username}'</script>";

//6.关闭数据库资源
mysqli_close($conn);
?>