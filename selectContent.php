<?php
/**
 *
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/13
 * Time: 12:57
 * 链接数据库 查找有没有重复的用户名,返回 0表示重复 1表示不重复
 * 链接页面: register.html
 */
header("content-type:text/html;charset=utf-8;");

//1.建立连接--使用面向过程方法连接数据库，直接就选择好了数据库
$conn= @mysqli_connect("gxyiovmx.2365.dnstoo.com","dingyifeng_f","zxcvbn","dingyifeng");

//2.设置客户端和连接字符集;
@mysqli_query($conn,"set names utf8");


$aid = $_POST['aid'];
//迭代出需要点击的内容

    $sql = "select aid,title,cid,content,adddate,seokeywords,seodescription from yiqi_article where aid = {$aid}";
    $zhixing = @mysqli_query($conn,$sql);
    while($rows = @mysqli_fetch_row($zhixing)){
//        { "name":"菜鸟教程" , "url":"www.runoob.com" }
        echo "{'"."aid':'"."{$rows[0]}"."','"."title':'"."{$rows[1]}"."','"."cid':'"."{$rows[2]}"."','"."content':'"."{$rows[3]}"."','"."adddate':'"."{$rows[4]}"."','"."seokeywords':'"."{$rows[5]}"."','"."seodescription':'"."{$rows[6]}"."'"."}";
    }


//3.关闭数据库资源
mysqli_close($conn);
?>