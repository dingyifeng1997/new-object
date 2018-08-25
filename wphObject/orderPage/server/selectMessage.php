<?php
/**
 * Created by PhpStorm.
 * User: 丁毅峰
 * Date: 2018/8/24
 * Time: 9:13
 */

    header("content-type:text/html;charset=utf-8;");

    //1.建立连接;
    $conn= mysqli_connect("gxyiovmx.2365.dnstoo.com","dingyifeng_f","zxcvbn","dingyifeng");

    //2.设置客户端和连接字符集;
    mysqli_query($conn,"set names utf8");

    //3.编写插入sql语句
    $sql = "select * from message";

    $result = @mysqli_query($conn,$sql);
echo "<table border='1'>";
    while($row = mysqli_fetch_row($result)){

        echo "<tr>";
        echo "<td>$row[1]</td>";
        echo "<td>$row[2]</td>";
        echo "<td>$row[3]</td>";
        echo "<td>$row[4]</td>";
        echo "<td>$row[5]</td>";

        echo "</tr>";

    }
echo "</table>";


//    得到的参数
    /*
        echo $row[1];   //屏幕类型
        echo $row[2];   //客户地址
        echo $row[3];   //屏幕宽度
        echo $row[4];   //屏幕高度
        echo $row[5];   //电话号码
    */


    //5.关闭数据库资源
    mysqli_close($conn);


?>