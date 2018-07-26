<?php
/**
 *
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/13
 * Time: 12:57
 * 链接数据库 查找有没有重复的用户名,返回 0表示重复 1表示不重复
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

    //3.设置客户端和连接字符集;
    mysqli_query($conn,"set names utf8");


    function select(){
        global $conn;
        $sql = "select * from entryTable";
        $zhixing = mysqli_query($conn,$sql);
        while($row = mysqli_fetch_row($zhixing)){
            //和数据库中的username数据做对比,发现数据有相同的时候就返回 [0] 没有则返回 [1]
            if($_POST['username'] == $row[1]){
                echo 0; //用户名不可用
                return;
            }
        }
        echo 1; //用户名可用
        return;
    }
    select();

    //6.关闭数据库资源
    mysqli_close($conn);
?>