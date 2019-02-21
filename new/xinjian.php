<?php

header("content-type:text/html;charset=utf-8;");

//1.建立连接--使用面向过程方法连接数据库，直接就选择好了数据库
$conn = @mysqli_connect("gxyiovmx.2365.dnstoo.com", "dingyifeng_f", "zxcvbn", "dingyifeng");

//2.设置客户端和连接字符集;
@mysqli_query($conn, "set names utf8");

$sql = "select aid,title,content,adddate,seokeywords,seodescription from yiqi_article";
$zhixing = @mysqli_query($conn, $sql);
while ($rows = @mysqli_fetch_row($zhixing)) {
    //调用创建文件方法
    newfile($rows[0], $rows[1], $rows[2], $rows[3], $rows[4], $rows[5]);
}

//3.关闭数据库资源
mysqli_close($conn);

function newfile($fileNames, $title, $content, $adddate, $seokeywords, $seodescription)
{
    //判断file文件夹下以这个命名的文件是否存在
    $newfiles = './file/' . $fileNames;

    //如果不存在则创建
    if (!file_exists($newfiles)) {
        mkdir("./file/" . $fileNames, 0700);
        $tmpfname = "./file/" . $fileNames . "/" . "index.html";    //要新建的文件名

        $handle = fopen($tmpfname, "w");
        $contents = "<!DOCTYPE html><html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">
    <meta name=\"keywords\" content='" . $seokeywords . "'>
    <meta name=\"description\" content='" . $seodescription . "'>
    <title id=\"tit\">" . $title . " -河南晶泰光电科技有限公司</title>
    <link rel=\"stylesheet\" href=\"../../../public/bs/css/bootstrap.css\">

    <link rel=\"shortcut icon\" href=\"../../../public/img/icon/icon.png\">
    <script src=\"../../../public/bs/js/jquery-1.11.0.min.js\"></script>
    <style>
        img{
            width: 100%;
        }
        P{
            line-height:30px;
            font-size:20px;
        }
        
    </style>
</head>
<body>
<div style=\"width:100%;border-bottom: 1px solid #676767;\">
        <a href=\"../../../index.html\">
            <img src=\"../../../temp/img/logo/jtlogo.png \" style=\"width:auto;height:60px;margin-left:30%\">
        </a>
    </div>
<div class=\"container main-container\">
    <div class=\"col-md-2\"></div>
    <div class=\"col-md-8\">
        <h2 style=\"margin:20px 0;font-weight:700;text-align: left\" id=\"contentTitle\">" . $title . "</h2>
            <p style=\"margin:20px 0;text-align: center\" id=\"contentDate\">" . $adddate . "</p>
        <div id=\"contentText\" style=\"text-align: left\">" . $content . "</div>
    </div>
    <div class=\"col-md-2\"></div>
</div>

<div class=\"container\">

    <div class=\"col-md-2\"></div>
    上一条<div class=\"priorContent\" style=\"display: inline-block;\"></div><br>
    下一条<div class=\"nextContent\" style=\"display: inline-block;\"></div>
    <div class=\"col-md-2\"></div>
</div>

<script src='../../priorNext.js'></script>

</body>
</html>";
        fwrite($handle, $contents); //开始创建文件
        fclose($handle);        //关闭一个已打开的文件指针(关闭资源)
    }
}

?>
