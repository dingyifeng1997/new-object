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
$conn= mysqli_connect("gxyiovmx.2365.dnstoo.com","dingyifeng_f","zxcvbn","dingyifeng");

//2.设置客户端和连接字符集;
mysqli_query($conn,"set names utf8");

$pageN = $_POST['page'];
$limt = $_POST['sum'];
$pageN = $pageN*$limt;

//迭代出需要点击的内容
function select(){
    global $conn;
    global $pageN;
    global $limt;

    $sql = "select pid,name,cid,content,adddate,thumb,seodescription from yiqi_product order by cid desc limit $pageN,$limt";
    $zhixing = mysqli_query($conn,$sql);
    $str = "";
    while($rows = @mysqli_fetch_row($zhixing)){
        $str.= "{'"."pid':'"."{$rows[0]}"."','"."name':'"."{$rows[1]}"."','"."cid':'"."{$rows[2]}"."','"."content':'"."{$rows[3]}"."','"."adddate':'"."{$rows[4]}"."','"."thumb':'"."{$rows[5]}"."','"."seodescription':'"."{$rows[6]}"."'"."},";
    }
    $nums = substr($str, 0, -1); //将拼接好的字符串最后一个 , 逗号去掉
    $strs = "[".$nums."]";  //再拼接上大括号

    echo $strs;

}
select();

//3.关闭数据库资源
mysqli_close($conn);
?>