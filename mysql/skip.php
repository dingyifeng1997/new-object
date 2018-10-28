<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>注册成功</title>
<!--    用户注册成功页面-->
    <script src="../public/bs/js/jquery-1.11.0.min.js"></script>
    <link rel="stylesheet" href="../public/bs/css/bootstrap.css">


    <style>
        *{
            margin:0;
            padding: 0;
        }
        html,body{
            width:100vw;
            height: 100vh;
        }
        .content{
            width: 100%;
            height:60%;
            margin-top:10%;
            border: 1px solid #e3e3e3;
            color: #f8f8f8;
        }
        .Titles{
            color: green;
            font-size:20px;
            margin:10% 0;
            text-align:center
        }
        .topRight{
            position:absolute;
            top:10px;
            right:5px;
        }
        a{
            color: #666666;
        }
    </style>
</head>
<body>
    <div class="container" style="height:100%;">
        <div style="height:40px;position:relative;">
            <div class="topLeft">
                <h2 class="page-header">用户注册</h2>
            </div>
            <div class="topRight" >
                <a href="../index.html">去首页</a>
            </div>
        </div>
        <div class="content">
            <div class="row">

                <div class="col-md-4"></div>
                <div class="col-md-4">

                    <div class="Titles">
                        <span class="glyphicon glyphicon-ok-circle"></span>
                        <span>注册成功</span>
                    </div>
                    <div class="Titles">账号 : <?php echo @$_GET['username']?></div>
                    <hr>
                    <a href="../login.php" class="btn btn-primary" style="margin-left:50%;position: relative;left:-50px;width: 100px;">去登录</a>
                </div>
                <div class="col-md-4"></div>
            </div>
        </div>
    </div>
</body>
</html>