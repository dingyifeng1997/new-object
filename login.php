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
<!--    引入layer弹出层-->
    <script src="layer/layer.js"></script>
<!--    引入弹出层css-->
    <link rel="shortcut icon" href="layer/mobile/need/layer.css" >




    <style>

    body{
        background: url("public/img/bg/dlbg2.jpg") center no-repeat fixed;;
        background-size:cover;
        height: 100vh;
    }
    .home-wrapper{
        width: 100%;
        height:100%;
        /*background: red;*/
        margin-top:70%;
        padding-top:15%!important;
        position: relative;
    }
    .login-body{
        width: 100%;
        height:100%;
        background: rgba(251, 255, 255,0.8);
        /*background: #c1fff8;*/
        margin:0 auto;
        border-radius:10px;
    }
    .box{
        padding:15px;
    }
    .form-control{
        background: rgba(0, 0, 0, 0);

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
    .page-header{
        margin:20px 0;
    }

    /*用户图标*/
    .icon-sheet{
        width: 33px;
        height:30px;
        position: relative;
        top: 9px;
        left:-5px;
        display: inline-block;
        background:url("public/img/spriteSheet/spriteSheetIcon.png") no-repeat;
        background-size:200px 200px;
        /*background-position: 20px 20px;*/
        background-position:-37px -37px;
        margin-left:10px;
    }
    .icon2{
        background-position:-69px -37px;
    }
    .form-group{
        border-bottom: 1px solid #878787;
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
                            <h3 style="text-align: center;color: white;">用户登录</h3>

                            <form style="padding-bottom:10px;">
                                <div class="form-group">
<!--                                    <label for="exampleInputName">账 名:</label>-->
                                    <span class="icon-sheet"></span>
                                    <div style="width:70%;height:100%;display: inline-block;">
                                        <input type="text" class="form-control" id="exampleInputName" placeholder="请输入账号" onkeyup="this.value=this.value.replace(/[^\w_]/g,'');" style="outline:none;border:0;box-shadow: none;" >
                                    </div>
                                </div>
                                <div class="form-group">
<!--                                    <label for="exampleInputPassword">密 码:</label>-->
                                    <span class="icon-sheet icon2"></span>
                                    <div style="width:70%;height:100%;display: inline-block;position:relative;">
<!--                                        密码输入框-->
                                        <input type="password" class="form-control" id="exampleInputPassword" placeholder="请输入密码" style="display:block;border:0;outline: none;box-shadow: none;" >
<!--                                        显示密码按钮-->
                                        <input type="checkbox"  class="xianshi" id="showPassword" style="position: absolute;right: 0;width: 14px; ">
                                    </div>

                                </div>
                                <br>
                                <button type="button" class="btn btn-primary" id="submit" style="width:100%;">登录</button>
<!--                                <input type="submit" class="btn btn-primary" id="submit" value="登录">-->


<!--                                清空按钮-->
<!--                                <button type="reset" class="btn btn-info" style="margin-left:50%;position:absolute;left:-10%;width:25%;">清空</button>-->

<!--                                qq按钮-->
                                <!--<button type="reset" class="btn btn-warning"><a id="getQQ" style="text-decoration:none;">Q Q</a></button>-->

<!--                                <button type="button" class="btn btn-warning" style="position: absolute;right:20px;width:25%;"><a href="mysql/register.html" style="text-decoration:none;">注册</a></button>-->
                            </form>
                                <a href="mysql/register.html" style="color: #2c6eff;">立即注册</a>

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
            verdict();
        });
        document.onkeydown =  function(event){
            //获取需要改变的标签对象
            var divobj = document.getElementById("divid");

            //获取键盘输入键位的代表数字
            var keyobj = event.keyCode;
            if(keyobj ==13){
                verdict();
            }
        }

        //点击按钮后的判断方法
        function verdict(){
            user = $("#exampleInputName").val();
            pass = $("#exampleInputPassword").val();

            $.ajax({
                type: "POST",
                url: "mysql/verify.php",
                data: {username: user, password: pass},
                success: function (msg) {
                    // console.log(msg);
                    if (msg == 1) {
                        goIn();
                        addCookie();
                    }else{
                        // 调用layer弹出层 弹出密码错误信息
                        layer.alert('用户名或密码错误', { anim:6,icon: 2});

                        $("#exampleInputPassword").val(""); //输入错误清空输入框
                    }
                },
                error: function (msg) {
                    alert("用户名匹配错误");
                }
            });
        }


        //成功后发送一个Cookie
        function addCookie(){
            val = $("#exampleInputName").val();

            $.ajax({
                type:"GET",
                url:"cookies/addCookie.php",
                data:{cook:val},
                success: function(msg){
                },
                error:function(msg){
                    alert("发送失败");
                }
            });
        }



        //登录成功特效和进入页面
        function goIn(){

            setTimeout(function(){
                layer.load(1,
                    {shade:[0.5, '#dbdede'],}
                ); //layer弹出层加载中页面
                setTimeout(function(){
                    window.location = "backLogin.html";
                },1300)
            },200)
        }


        //判断显示密码按钮是否被点击
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