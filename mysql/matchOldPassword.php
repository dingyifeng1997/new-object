<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/20
 * Time: 11:35
 * 用户修改密码的时候,AJAX发送过来一个username和password值匹配旧密码是否正确
 * 链接页面: setAccount.html
 */



    header("content-type:text/html;charset=utf-8;");

    //1.建立连接;
    $conn= mysqli_connect("gxyiovmx.2365.dnstoo.com","dingyifeng_f","zxcvbn","dingyifeng");

    //3.设置客户端和连接字符集;
    mysqli_query($conn,"set names utf8");

    //接收到传递过来的del参数
    $username = @$_COOKIE['name'];
    $oldPassword = @$_POST['oldPassword'];

    //打断点测试得到的ID参数
    //echo "<script>alert({$id})</script>";
    //echo "<script>alert('{$username}')</script>";
    //echo "<script>alert('{$password}')</script>";
    //echo "<script>alert({$_POST['user']})</script>";
    //echo "<script>alert({$id})</script>";


    $sql = "select password from entryTable where username = '{$username}'";
    $execute = mysqli_query($conn,$sql);
    while($row = mysqli_fetch_row($execute)){
        $mima =  $row[0];
    }

    if($oldPassword == $mima){
        echo 1;
    }else{
        echo 0;
    }

    //6.关闭数据库资源
    mysqli_close($conn);

?>