<?php

header("content-type:text/html;charset=utf-8;");

//1.建立连接--使用面向过程方法连接数据库，直接就选择好了数据库
$conn= @mysqli_connect("gxyiovmx.2365.dnstoo.com","dingyifeng_f","zxcvbn","dingyifeng");

//2.设置客户端和连接字符集;
@mysqli_query($conn,"set names utf8");

$aid = $_POST["urls"];

$sql = "select aid,title from yiqi_article ";
$zhixing = @mysqli_query($conn,$sql);

while($rows = @mysqli_fetch_row($zhixing)){
    $str.= "{'"."aid':'"."{$rows[0]}"."','"."title':'"."{$rows[1]}"."'},";
}
$str = substr($str, 0, -1); //将拼接好的字符串最后一个 , 逗号去掉
$str= "[".$str."]";
echo $str;

//3.关闭数据库资源
mysqli_close($conn);

?>
