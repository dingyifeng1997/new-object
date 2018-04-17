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

//点击后进入单色P10链接
$("#monochromeP10").click(function(){
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        window.location = "mobile/monochromeP10/index.html";
    }else{
        window.location = "PC/monochromeP10/index.html";
    }

});
//点击后进入单色3.75链接
$("#monochromeP375").click(function(){
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        //window.location = "mobile/monochromeP3.75/index.html";
        window.location = "mobile/m404.html";   //进入404页面
    }else{
        //window.location = "PC/monochromeP3.75/index.html";
        window.location = "PC/pc404.html";  //进入404页面
    }

});
//点击后进入单色5.0链接
$("#monochrome5").click(function(){
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        //window.location = "mobile/monochrome5.0/index.html";
        window.location = "mobile/m404.html";   //进入404页面
    }else{
        //window.location = "PC/monochrome5.0/index.html";
        window.location = "PC/pc404.html";  //进入404页面
    }
});
//点击后进入室内全彩压铸铝链接
$("#indoorColorYZL").click(function(){
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        //window.location = "mobile/indoorColorYZL/index.html";
        window.location = "mobile/m404.html";   //进入404页面
    }else{
        //window.location = "PC/indoorColorYZL/index.html";
        window.location = "PC/pc404.html";  //进入404页面
    }

});
//点击后进入室内全彩型材链接
$("#indoorColorXC").click(function(){
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        //window.location = "mobile/indoorColorXC/index.html";
        window.location = "mobile/m404.html";   //进入404页面
    }else{
        //window.location = "PC/indoorColorXC/index.html";
        window.location = "PC/pc404.html";  //进入404页面
    }

});
//点击后进入室外全彩型材链接
$("#outdoorColorXC").click(function(){
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        //window.location = "mobile/outdoorColorXC/index.html";
        window.location = "mobile/m404.html";   //进入404页面
    }else{
        //window.location = "PC/outdoorColorXC/index.html";
        window.location = "PC/pc404.html";  //进入404页面
    }

});
//点击后进入室外全彩箱体链接
$("#outdoorColorXT").click(function(){
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        //window.location = "mobile/outdoorColorXT/index.html";
        window.location = "mobile/m404.html";   //进入404页面
    }else{
        //window.location = "PC/outdoorColorXT/index.html";
        window.location = "PC/pc404.html";  //进入404页面
    }

});
//点击后进入室外全彩压铸铝链接
$("#outdoorColorYZL").click(function(){
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        //window.location = "mobile/outdoorColorYZL/index.html";
        window.location = "mobile/m404.html";   //进入404页面
    }else{
        //window.location = "PC/outdoorColorYZL/index.html";
        window.location = "PC/pc404.html";  //进入404页面
    }
});















//百度统计代码
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?fd78c159c8c6d14f7879542888b18b86";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();