$(document).ready(function() {

    $.post("server/selectMessage.php",function(dat){
        var sd =  eval('(' + dat + ')');


        // alert(sd);
        new Vue({
            el:"#userinfo",
            data:{
                messages:sd
            }
        });

        // 先全部设置为不可点击
        var obj = $(".layui-btn-radius");
        obj.parent().next().children(".card-content-inner").children(".defaultHide").addClass("defaultHide");
        //设置点击按钮为不可点击
        obj.removeClass("layui-btn layui-btn-sm layui-btn-radius layui-btn-normal");
        obj.addClass("  layui-btn layui-btn-sm layui-btn-radius layui-btn-disabled");
        obj.html("已跟进")

        // 再循环出服务器返回来的数据
        for(s in sd){
            if(sd[s].checkPerson == ""){
                var idx = sd[s].id;
                console.log(idx)

                var obj = $(".layui-btn-radius[cid='"+idx+"']");

                obj.parent().next().children(".card-content-inner").children(".defaultHide").addClass("defaultHide");
                //设置点击按钮为不可点击
                obj.removeClass("layui-btn layui-btn-sm layui-btn-radius layui-btn-disabled");
                obj.addClass("layui-btn layui-btn-sm layui-btn-radius layui-btn-normal");
                obj.html("获取电话号码");
                obj.css({"background":"blue"});

            }
        }





        // 获取号码按钮点击,要再post内部
        $(".layui-btn-normal").click(function(){
            // alert($(this).attr("cid"));
            //设置电话号码显示
            $(this).parent().next().children(".card-content-inner").children(".defaultHide").removeClass("defaultHide");
            //设置点击按钮为不可点击
            $(this).removeClass("layui-btn layui-btn-sm layui-btn-radius layui-btn-normal");
            $(this).addClass("  layui-btn layui-btn-sm layui-btn-radius layui-btn-disabled");
            //将按钮的内容变为登录的人名
            $(this).html(name+"已跟进");
            var clickCid = $(this).attr("cid");
            var clickNames = name+"已跟进";
            // alert(clickCid);
            // alert(clickNames);
            $.post("server/gitPhoneState.php", {cid:clickCid,clickName:clickNames})
        });


    });


})




// nav菜单点击特效
$(".bar-tab .external").click(function(){
    $(this).addClass("active");
    $(".bar-tab .external").not($(this)).removeClass("active");

    //判断点击的是哪一个按钮
    var idx = $(this).index();  //获取点击按钮的索引
    if(idx == 0){
        $(".title").text("客户信息");
        $(".myMessage").addClass("defaultNotDisplay");                  //个人信息隐藏
        $(".card-container").removeClass("defaultNotDisplay");          //客户信息显示
        $(".pull-to-refresh-layer").removeClass("defaultNotDisplay");   //下拉刷新隐藏

    }else if(idx == 1){
        $(".title").text("个人信息");
        $(".card-container").addClass("defaultNotDisplay");         //个人信息显示
        $(".myMessage").removeClass("defaultNotDisplay");           //客户信息隐藏
        $(".pull-to-refresh-layer").addClass("defaultNotDisplay");  //下拉刷新隐藏
    }

});





//获取到登录用户的用户名
$.ajax({
    type: "POST",
    url: "../../cookies/checkCookie.php",
    success: function (msg) {
        name = msg;
    },
    error: function (msg) {
        // alert("发送失败");
    }
});




