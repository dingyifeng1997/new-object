/**
 * Created by Administrator on 2018/4/7 0007.
 * 首页:登陆后首页逻辑
 */
//点击后进入登录界面
    $(".goto-login").click(function () {
        window.location = "login.php";
    });
//导航栏点击后显示特定画面
    $(".nav-li").click(function () {
        $(this).addClass("active");
        $(".nav-li").not($(this)).removeClass("active");
        var idx = $(this).index();
        $(".forum").eq(idx).show();
        $(".forum").not($(".forum").eq(idx)).hide();
    });

    $(document).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("#goTop").show();
        } else if ($(window).scrollTop() < 100) {
            $("#goTop").hide();
        }
    });
    $("#goTop").click(function () {
        $(' body ,html').animate({scrollTop: 0}, 300)
        return false;
    });

//点击后进入单色P10链接
    $("#monochromeP10").click(function () {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            window.location = "mobile/monochromeP10/index.html";
        } else {
            window.location = "PC/monochromeP10/index.html";
        }

    });
//点击后进入单色3.75链接
    $("#monochromeP375").click(function () {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            window.location = "mobile/monochromeP3.75/index.html";
            //window.location = "mobile/m404.html";   //进入404页面
        } else {
            window.location = "PC/monochromeP3.75/index.html";
            //window.location = "PC/pc404.html";  //进入404页面
        }

    });
//点击后进入单色5.0链接
    $("#monochrome5").click(function () {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            window.location = "mobile/monochrome5.0/index.html";
            //window.location = "mobile/m404.html";   //进入404页面
        } else {
            window.location = "PC/monochrome5.0/index.html";
            //window.location = "PC/pc404.html";  //进入404页面
        }
    });
//点击后进入室内全彩压铸铝链接
    $("#indoorColorYZL").click(function () {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            //window.location = "mobile/indoorColorYZL/index.html";
            window.location = "mobile/m404.html";   //进入404页面
        } else {
            //window.location = "PC/indoorColorYZL/index.html";
            window.location = "PC/pc404.html";  //进入404页面
        }

    });
//点击后进入室内全彩型材链接
    $("#indoorColorXC").click(function () {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            window.location = "../../mobile/indoorColorXC/index.html";
            //window.location = "mobile/m404.html";   //进入404页面
        } else {
            window.location = "PC/indoorColorXC/index.html";
            //window.location = "PC/pc404.html";  //进入404页面
        }

    });
//点击后进入室外全彩型材链接
    $("#outdoorColorXC").click(function () {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            window.location = "mobile/outdoorColorXC/index.html";
            //window.location = "mobile/m404.html";   //进入404页面
        } else {
            window.location = "PC/outdoorColorXC/index.html";
            //window.location = "PC/pc404.html";  //进入404页面
        }

    });
//点击后进入室外全彩箱体链接
    $("#outdoorColorXT").click(function () {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            window.location = "mobile/outdoorColorXT/index.html";
            // window.location = "mobile/m404.html";   //进入404页面
        } else {
            window.location = "PC/outdoorColorXT/index.html";
            // window.location = "PC/pc404.html";  //进入404页面
        }

    });
//点击后进入室外全彩压铸铝链接
    $("#outdoorColorYZL").click(function () {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            //window.location = "mobile/outdoorColorYZL/index.html";
            window.location = "mobile/m404.html";   //进入404页面
        } else {
            //window.location = "PC/outdoorColorYZL/index.html";
            window.location = "PC/pc404.html";  //进入404页面
        }
    });


//百度统计代码
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?fd78c159c8c6d14f7879542888b18b86";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();


//左侧悬浮广告栏关闭单击
    $("#close_left_banner").click(function () {
        $(this).parent().hide();
    });

//右侧悬浮广告栏关闭单击
    $("#close_right_QRcode").click(function () {
        $(this).parent().hide();
    });

//判断:如果是手机页面就隐藏广告,如果不是就显示广告
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        $(".left_banner").hide();
        $(".right_QRcode").hide();
    } else {
        $(".left_banner").show();
        $(".right_QRcode").show();
    }

//帮助一栏切换
    $(".list-group-item").click(function () {
        var idx = $(this).index();
        $(this).addClass("active");
        $(".list-group-item").not($(this)).removeClass("active");

        $(".help-content").eq(idx).show();
        $(".help-content").not($(".help-content").eq(idx)).hide();
    });

//点击出现桃心
    (function (window, document, undefined) {
        var hearts = [];
        window.requestAnimationFrame = (function () {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) {
                    setTimeout(callback, 1000 / 60);
                }
        })();
        init();
        function init() {
            css(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}");
            attachEvent();
            gameloop();
        }

        function gameloop() {
            for (var i = 0; i < hearts.length; i++) {
                if (hearts[i].alpha <= 0) {
                    document.body.removeChild(hearts[i].el);
                    hearts.splice(i, 1);
                    continue;
                }
                hearts[i].y--;
                hearts[i].scale += 0.004;
                hearts[i].alpha -= 0.013;
                hearts[i].el.style.cssText = "left:" + hearts[i].x + "px;top:" + hearts[i].y + "px;opacity:" + hearts[i].alpha + ";transform:scale(" + hearts[i].scale + "," + hearts[i].scale + ") rotate(45deg);background:" + hearts[i].color;
            }
            requestAnimationFrame(gameloop);
        }

        function attachEvent() {
            var old = typeof window.onclick === "function" && window.onclick;
            window.onclick = function (event) {
                old && old();
                createHeart(event);
            }
        }

        function createHeart(event) {
            var d = document.createElement("div");
            d.className = "heart";
            hearts.push({
                el: d,
                x: event.clientX - 5,
                y: event.clientY - 5,
                scale: 1,
                alpha: 1,
                color: randomColor()
            });
            document.body.appendChild(d);
        }

        function css(css) {
            var style = document.createElement("style");
            style.type = "text/css";
            try {
                style.appendChild(document.createTextNode(css));
            } catch (ex) {
                style.styleSheet.cssText = css;
            }
            document.getElementsByTagName('head')[0].appendChild(style);
        }

        function randomColor() {
            return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + ")";
        }
    })(window, document);
