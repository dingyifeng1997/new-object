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



//左侧悬浮广告栏关闭单击
$("#close_left_banner").click(function(){
    $(this).parent().hide();
});

//右侧悬浮广告栏关闭单击
$("#close_right_QRcode").click(function(){
    $(this).parent().hide();
});

//判断:如果是手机页面就隐藏广告,如果不是就显示广告
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    $(".left_banner").hide();
    $(".right_QRcode").hide();
}else{
    $(".left_banner").show();
    $(".right_QRcode").show();
}

//帮助一栏切换
$(".list-group-item").click(function(){
    var idx = $(this).index();
    $(this).addClass("active");
    $(".list-group-item").not($(this)).removeClass("active");

    $(".help-content").eq(idx).show();
    $(".help-content").not($(".help-content").eq(idx)).hide();
});