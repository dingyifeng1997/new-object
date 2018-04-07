/**
 * Created by Administrator on 2018/4/7 0007.
 * 首页
 */

//点击后进入登录界面
$(".goto-login").click(function(){
    window.location = "login.html";
});
//导航栏点击后显示特定画面
$(".nav-tabs li").click(function(){
    $(this).addClass("active");
    $(".nav-tabs li").not($(this)).removeClass("active");
    var idx = $(this).index();
    $(".forum").eq(idx).show();
    $(".forum").not($(".forum").eq(idx)).hide();
});

$(document).scroll(function(){
    if($(window).scrollTop() > 100){
        $("#goTop").show();
    }else if($(window).scrollTop() < 100){
        $("#goTop").hide();
    }
});
$("#goTop").click(function(){
    $(' body ,html').animate({scrollTop:0},300)
    return false;
});

//百度统计代码
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?fd78c159c8c6d14f7879542888b18b86";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();