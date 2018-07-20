<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/15
 * Time: 8:43
 */


header("content-type:text/html;charset=utf-8;");

//1.建立连接;
//    $conn= mysql_connect("localhost","root","199707142510dyf");
$conn= mysqli_connect("gxyiovmx.2365.dnstoo.com","dingyifeng_f","zxcvbn","dingyifeng");

//3.设置客户端和连接字符集;
mysqli_query($conn,"set names utf8");

//    定义每页的行数
function getPage($pageLine){
    global $conn;

    $pageLine = $pageLine;
//    获取到总页数
    $ZongPage = @mysqli_query($conn,"select count(*) from entryTable");
    $sum = @mysqli_fetch_row($ZongPage);
    $pageCount = ceil($sum[0]/$pageLine);   //总页数
//    echo $pageCount;
    $currentPage = @$_GET['page']?$_GET['page']:1;   //当前页
//    显示的索引下标
    $index = ($currentPage-1)*$pageLine;    //读取数据的是那一行
//    echo "<script>alert({$index})</script>";

    //判断,当页面超出的时候
    if($currentPage<=1){
        $prevpage=1;
    }else{
        $prevpage=$currentPage-1;
    }

    if($currentPage>=$pageCount){
        $nextpage=$pageCount;
    }else{
        $nextpage=$currentPage+1;
    }


    //4.通过PHP进行insert操作
    $sql = "select * from entryTable order by id desc limit {$index},{$pageLine} ";
    $result = mysqli_query($conn,$sql);

    //获取总字段数

    echo "<center style='margin:100px;'>";
    echo "<div style='height:600px;'>";
    echo "<table border='1'>";
    echo "<h2>数据库资料</h2>";

    echo "<tr style='background: #4ae347;'>";
    echo "<td width='150'>"."ID"."</td>";
    echo "<td width='150'>"."用户名"."</td>";
    echo "<td width='150'>"."密码"."</td>";
    echo "<td width='150'>"."确认密码"."</td>";
    echo "<td width='150'>"."密保问题"."</td>";
    echo "<td width='150'>"."密保答案"."</td>";
//    echo "<td width='150'>"."修改"."</td>";
    echo "<td width='150'>"."删除"."</td>";
    echo "</tr>";

    while($rows = mysqli_fetch_row($result)){
        echo "<tr style='background: #c9e3ca;'>";
        echo "<td width='150'>"."{$rows[0]}"."</td>";
        echo "<td width='150'>"."{$rows[1]}"."</td>";
        echo "<td width='150'>"."{$rows[2]}"."</td>";
        echo "<td width='150'>"."{$rows[3]}"."</td>";
        echo "<td width='150'>"."{$rows[4]}"."</td>";
        echo "<td width='150'>"."{$rows[5]}"."</td>";
//        echo "<td width='150'>"." <a href='javascript:;' id='setButton'>修改</a>"."</td>";
        echo "<td width='150'>"." <a href='delUserMysql.php?delId={$rows[0]}&&pg=$currentPage'>删除</a>"."</td>";
        echo "</tr>";
    }

    echo "

<div style='width:300px;height: 400px;border: 1px solid #000;position: absolute;left:20px;top:15%;background:rgba(250,250,250,0.7)' id='setBox'>
    <h1>修改内容</h1>
    <form action='modifyUserMysql.php' method='POST'>
        <div style='width:100px;height:30px;display: inline-block;'>ID : </div>
        <input type='text' name='id'><br><hr style='border: 1px solid red;'>
        
        <div style='width:100px;height:30px;display: inline-block;'>用户名 : </div>
        <input type='text' name='username'><br>
        
        <div style='width:100px;height:30px;display: inline-block;'>密码 : </div>
        <input type='text' name='password'><br>
        
        <input type='submit' value='修改'>
        <input type='button' value='首页' id='goIndex'>
    </form>
</div>




";

    echo "</table>";
    echo "</div>";
    echo "</br>";
    echo "<span>当前是 : 第<b id='dijiye'>1</b>页</span>
        <a href='showMysql.php?page={$prevpage}' >上一页</a> |
        <a href='showMysql.php?page={$nextpage}' >下一页</a>
        <span>总页数 : <b id='sumPage'>10</b>页</span>
        <form action='./showMysql.php' method='get'id='submits'>
            <input type='text' style='width:50px;'name='page' value='1' id='inputs'>
            <input type='submit' value='跳转到'>
        </form>
        ";
    echo "</center>";

    echo "<script>
document.getElementById('submits').onsubmit = function(){
    //判断输入的页数如果大于总页数的话 那么就变为最大页数
            if(document.getElementById('inputs').value >{$pageCount}){
                document.getElementById('inputs').value ={$pageCount}
            }
        }
document.getElementById('goIndex').onclick = function(){
    //判断输入的页数如果大于总页数的话 那么就变为最大页数
            location.href = '../backLogin.html';
        }
        
        
        </script>";
    echo "<script>document.getElementById('dijiye').innerHTML = {$currentPage}</script>";
    echo "<script>document.getElementById('sumPage').innerHTML = {$pageCount}</script>";
    //5.执行sql语句
//    mysql_query($sql);

    //释放结果集
//    mysqli_free_result($ZongPage);
    mysqli_free_result($result);

}

getPage(10);
//6.关闭数据库资源
mysqli_close($conn);

?>