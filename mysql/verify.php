<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/18
 * Time: 12:57
 * 链接数据库 验证登录页面发送过来的数据是否和数据库中的匹配,若不匹配返回 0  若匹配返回 1
 */
header("content-type:text/html;charset=utf-8;");

//1.建立连接--使用面向过程方法连接数据库，直接就选择好了数据库
$conn= mysqli_connect("gxyiovmx.2365.dnstoo.com","dingyifeng_f","zxcvbn","dingyifeng");

//2.设置客户端和连接字符集;
mysqli_query($conn,"set names utf8");

function select(){
    $username = @$_POST['username'];
    $password = @$_POST['password'];
    global $conn;
    $sql = "select * from entryTable";
    $zhixing = mysqli_query($conn,$sql);
    while($row = mysqli_fetch_row($zhixing)){
        //和数据库中的username数据做对比,发现数据有相同的时候就返回 [0] 没有则返回 [1]
        if($username == $row[1]&&$password == $row[2]){
            echo 1;//用户名可用
            return;
        }
    }
    echo 0; //用户名不可用
    return;
}
select();

//6.关闭数据库资源
mysqli_close($conn);

?>