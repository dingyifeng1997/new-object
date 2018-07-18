<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>河南晶泰光电科技有限公司-后台登录系统</title>
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="shortcut icon" href="public/img/icon/icon.png" >
    <script src="public/bs/js/jquery-1.11.0.min.js"></script>
    <script src="public/bs/js/bootstrap.min.js"></script>
    <script src="public/js/holder.min.js"></script>
    <style>

    body{
        background: url("public/img/bg/dlbg2.jpg") center no-repeat fixed;;
        background-size:cover;
        height: 100vh;
    }
    .home-wrapper{
        width: 100%;
        height: 380px;
        /*background: red;*/
        margin-top:40%;
    }
    .login-body{
        width: 100%;
        height:100%;
        background: rgba(238, 237, 234, 1);
        /*background: #c1fff8;*/
        margin:0 auto;
        border-radius:1px;
    }
    .box{
        padding:15px;
    }
    .form-control{
        background: rgba(238, 237, 234, 0.1);
    }
    .col-md-3 img{
        width:250px;
        margin-top:5%;
    }
    .xianshi{
        width: 17px;
        height: 17px;
        position: relative;
        top: 3px;
    }
    </style>
</head>
<body>
    <div>
        <a href="index.html">
            <span class="glyphicon glyphicon-menu-left" style="color:white;font-size:16px;margin:50px 0 0 10%;"></span>
        </a>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-7" style="margin-top:13%;">
                <!--<img src="public/img/lo.png" alt="">-->
            </div>
            <div class="col-md-5">
                <section class="box vertical home-wrapper" id="shuru">

                    <div class=" login-body">
                        <div class="box">
                            <h3 class="page-header">用户登录</h3>
                            <form>
                                <div class="form-group">
                                    <label for="exampleInputName">账 名:</label>
                                    <div style="width:100%;height:100%;border: 1px solid #cbcbcb;border-radius:4px;">
                                        <input type="text" class="form-control" id="exampleInputName" placeholder="请输入账号" onKeyUp="this.value=this.value.replace(/[^\d]/g,'');" style="outline:none;border:0;box-shadow: none;" >
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword">密 码:</label>
                                    <div style="width:100%;height:100%;border: 1px solid #cbcbcb;border-radius:4px;position: relative;">

                                        <input type="password" class="form-control" id="exampleInputPassword" placeholder="请输入密码" style="display:block;border:0;outline: none;box-shadow: none;" >
                                        <input type="checkbox"  class="xianshi" id="showPassword" style="position: absolute;right: 10px;width: 14px; ">
                                    </div>

                                </div>

                                <br>
                                <button type="button" class="btn btn-primary" id="submit">登录</button>
                                <button type="reset" class="btn btn-info">清空</button>
                                <!--<button type="reset" class="btn btn-warning"><a id="getQQ" style="text-decoration:none;">Q Q</a></button>-->
                                <button type="button" class="btn btn-warning"><a href="mysql/register.html" style="text-decoration:none;">注册</a></button>
                            </form>
                        </div>
                    </div>
                </section>


                <div style=" margin:80% 30px 0 0; display: none;" id="jindt" style="height:100px;">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h2 style="color:#0ddfcd;">loading . . .</h2>
                    <br>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="2"  style="width: 0">
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>

    <script>
        //点击登录逻辑
        $("#submit").click(function(){
            user = $("#exampleInputName").val();
            pass = $("#exampleInputPassword").val();

            $.ajax({
                type: "POST",
                url: "mysql/verify.php",
                data: {username: user, password: pass},
                success: function (msg) {
                        // console.log(msg);
                    if (msg == 1) {
                        alert("登录成功");
                        goIn();
                    }else{
                        alert("您的用户名和账户不匹配,请重新输入!");
                        $("#exampleInputPassword").val("");
                    }
                },
                error: function (msg) {
                    alert("用户名匹配错误");
                }
            });
        });

        //登录成功特效和进入页面
        function goIn(){
            //点击后计时三秒
            $("#shuru").fadeOut("slow");
            $("#jindt").delay(650).fadeIn("slow");  //延迟0.6秒后执行

            for(var i = 0;i<100;i++){
                setTimeout(function(){
                    $(".progress-bar").css({"width":i+"%"});
                },900)
            }

            setTimeout(function(){
                window.location = "backLogin.html";
            },2500)
        }




        i=0;
        $("#showPassword").click(function(){
            if(i%2==0){
                $("#exampleInputPassword").attr({"type":"text"});
            }else if(i%2==1){
                $("#exampleInputPassword").attr({"type":"password"});
            }
            i++;
        });

        //判断:如果是手机页面就把margin调成0
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone|micromessenger)/i))) {
            $(".home-wrapper").css({"margin-top":"0"});

            //如果是手机页面,就用此方法调用qq
            $("#getQQ").click(function(){
                chatQQ();
            });
        }else{
            $("#getQQ").attr("href","http://wpa.qq.com/msgrd?v=3&uin=1406838464&site=qq&menu=yes");
            $("#getQQ").attr("target","_blank");
        }


        function chatQQ(){
            //其中1234567指的是QQ号码
            window.location.href="mqqwpa://im/chat?chat_type=wpa&uin=1406838464&version=1&src_type=web&web_src=oicqzone.com";
        };




    </script>
</body>
</html>