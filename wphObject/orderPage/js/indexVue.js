/**
 * Created by 丁毅峰 on 2018/8/26.
 */


$(function () {
    'use strict';

    //下拉刷新页面
    $(document).on("pageInit", "#page-ptr", function(e, id, page) {
        var $content = $(page).find(".content").on('refresh', function(e) {
            // 模拟2s的加载过程
            setTimeout(function() {

                //下拉后先将容器内部重新清理,只留一个Vue模板,给下边的Vue渲染操作预留位置
                $("#userinfo").html('<div class="card"  v-for="ms in messages"><div class="card-header"><b class="topTitle">{{ms.scenario}}</b> <button class="layui-btn layui-btn-sm layui-btn-radius layui-btn-normal"  :cid="ms.id">获取电话号码</button></div><div class="card-content"><div class="card-content-inner"><span>位 置</span><b>{{ms.address}}</b><br> <span>屏 宽</span><b>{{ms.white}}</b><br> <span>屏 高</span><b>{{ms.height}}</b><br> <span>时 间</span><b>{{ms.foundDate}}</b><br><div class="defaultHide"><span>电 话</span><b>{{ms.contact}}</b><br></div><div class="whether-follow-up"><span>是否跟进</span><b>{{ms.checkPerson}}</b><br></div></div></div></div>')

                //下拉执行 AJAX ,将数据获取到并使用Vue渲染出来


                $.post("server/selectMessage.php",function(dat){
                    var sd =  eval('(' + dat + ')');
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
                    for(var s in sd){
                        if(sd[s].checkPerson == ""){
                            var idx = sd[s].id;
                            console.log(idx)

                            var obj = $(".layui-btn-radius[cid='"+idx+"']");

                            obj.parent().next().children(".card-content-inner").children(".defaultHide").addClass("defaultHide");
                            //设置点击按钮为不可点击
                            obj.removeClass("layui-btn layui-btn-sm layui-btn-radius layui-btn-disabled");
                            obj.addClass("layui-btn layui-btn-sm layui-btn-radius layui-btn-normal");
                            obj.html("获取电话号码")
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


                // 加载完毕需要重置
                $.pullToRefreshDone($content);
            }, 1000);
        });
    });

    $.init();   //开启下拉刷新
});
