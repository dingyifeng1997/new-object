<?php
/**
 *
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/11/19
 * Time: 12:57
 * 取到新闻总页数
 */
header("content-type:text/html;charset=utf-8;");

//1.建立连接--使用面向过程方法连接数据库，直接就选择好了数据库
$conn= mysqli_connect("gxyiovmx.2365.dnstoo.com","dingyifeng_f","zxcvbn","dingyifeng");

//2.设置客户端和连接字符集;
mysqli_query($conn,"set names utf8");


//迭代出需要点击的内容
function select(){
    global $conn;
    $sql = "SELECT COUNT(*) from yiqi_article where cid=2 order by aid desc;";
    $zhixing = mysqli_query($conn,$sql);
    $rows = mysqli_fetch_row($zhixing);
    echo $rows[0];
}
select();

//3.关闭数据库资源
mysqli_close($conn);
?>