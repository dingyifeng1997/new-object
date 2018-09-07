<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/4
 * Time: 15:23
 */

    header("content-type:text/html;charset=utf-8;");

    //1.建立连接;
    //    $conn= mysql_connect("localhost","root","199707142510dyf");
    $conn= mysql_connect("localhost","root","199707142510dyf");
    //2.选择数据库
    $ku = mysql_select_db ("mytable",$conn);

    //3.设置客户端和连接字符集;
    mysql_query("set names utf8");



    $pageN = $_POST["pageNumber"]*10;

    //4.通过PHP进行insert操作
    $sql = "select * from mydata order by id desc limit {$pageN},10";
    $result = mysql_query($sql);
    //获取总字段数
    $jsons = "[";
    while($rows = mysql_fetch_row($result)){
        $jsons.="{"."'id':'"."{$rows[0]}"."','text':'"."{$rows[1]}"."','age':'"."{$rows[2]}". "'},";
    }

    $jsons = substr($jsons, 0, -1); //将字符串最后一个 逗号 , 删除
    $jsons.="]";

    echo $jsons;

    //释放结果集
    mysql_free_result($result);


    //6.关闭数据库资源
    mysql_close($conn);
?>