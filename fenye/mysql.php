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
    $conn= mysql_connect("localhost","root","199707142510dyf");
    //2.选择数据库
    $ku = mysql_select_db ("mytable",$conn);

    //3.设置客户端和连接字符集;
    mysql_query("set names utf8");

//    定义每页的行数
function getPage($pageLine){

    $pageLine = $pageLine;
//    获取到总页数
    $ZongPage = mysql_query("select count(*) from mydata");
    $sum = mysql_fetch_row($ZongPage);
    $pageCount = ceil($sum[0]/$pageLine);   //总页数
//    echo $pageCount;
    $currentPage = $_GET['page']?$_GET['page']:1;   //当前页
//    显示的索引下标
    $index = ($currentPage-1)*$pageLine;    //读取数据的是那一行

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
    $sql = "select * from mydata order by id desc limit {$index},{$pageLine} ";
    $result = mysql_query($sql);
    //获取总字段数

    echo "<center style='margin:100px;'>";
    echo "<div style='height:350px;'>";
        echo "<table border='1'>";
        echo "<h2>数据库资料</h2>";
        while($rows = mysql_fetch_row($result)){
            echo "<tr>";
            echo "<td width='150'>"."{$rows[0]}"."</td>";
            echo "<td width='150'>"."{$rows[1]}"."</td>";
            echo "<td width='150'>"."{$rows[2]}"."</td>";
            echo "<td width='150'>"." <a href=''>修改</a>"."</td>";
            echo "<td width='150'>"." <a href='delUserMysql.php?delId={$rows[0]}&&pg=$currentPage'>删除</a>"."</td>";
            echo "</tr>";
        }

        echo "</table>";
    echo "</div>";
    echo "</br>";
    echo "<span>当前是 : 第<b id='dijiye'>1</b>页</span>
        <a href='mysql.php?page={$prevpage}' >上一页</a> |
        <a href='mysql.php?page={$nextpage}' >下一页</a>
        <span>总页数 : <b id='sumPage'>10</b>页</span>
        <form action='mysql.php' method='get'id='submits'>
            <input type='text' style='width:50px;'name='page' value='1' id='inputs'>
            <input type='submit' value='跳转到'>
        </form>
        ";
    echo "</center>";

    echo "<script>document.getElementById('submits').onsubmit = function(){
            if(document.getElementById('inputs').value >{$pageCount}){
                document.getElementById('inputs').value ={$pageCount}
            }
        }</script>";
    echo "<script>document.getElementById('dijiye').innerHTML = {$currentPage}</script>";
    echo "<script>document.getElementById('sumPage').innerHTML = {$pageCount}</script>";

    //5.执行sql语句
//    mysql_query($sql);

    //释放结果集
    mysql_free_result($ZongPage);
    mysql_free_result($result);

}

    getPage(10);
    //6.关闭数据库资源
    mysql_close($conn);

?>