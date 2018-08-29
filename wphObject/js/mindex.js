/**
 * Created by 丁毅峰 on 2018/5/25.
 */

//默认的回到顶部按钮是隐藏的,我们要先获取滚动条离顶部的高度,超过100px就设置为显示
//当页面滚动条发生滚动的时候,window 或者document 都可以

$(document).scroll(
    function(){
        //判断,滚动条的高度,大于滚动高度,则将其Y方向位置设置为0,小于则将其Y方向位置设置为200
        if($(document).scrollTop() > 500){
            $("#InquiryBottom").css({ "transform":"translateY(0px)"});
        }else{
            $("#InquiryBottom").css({ "transform":"translateY(200px)"});
        }


        //滚动时,判断顶部导航选中
        var top = $(document).scrollTop();

        var nli = $("#navs li");
        if(top<600){
            nli.eq(0).find("a").addClass("active");
            nli.not(nli.eq(0)).find("a").removeClass("active")}else if(top>600&& top<1000){
            nli.eq(1).find("a").addClass("active");
            nli.not(nli.eq(1)).find("a").removeClass("active");
        }else if(top>1000&& top<1600){
            nli.eq(2).find("a").addClass("active");
            nli.not(nli.eq(2)).find("a").removeClass("active");
        }else if(top>1600&& top<2500){
            nli.eq(3).find("a").addClass("active");
            nli.not(nli.eq(3)).find("a").removeClass("active");
        }else if(top>2500&& top<3100){
            nli.eq(4).find("a").addClass("active");
            nli.not(nli.eq(4)).find("a").removeClass("active");
        }else if(top>3100&& top<4000){
            nli.eq(5).find("a").addClass("active");
            nli.not(nli.eq(5)).find("a").removeClass("active");
        }
    }
);



//输入框获取焦点方法
$(".input-pane-lg").focus(function(){
    // 输入框点击后变换边框颜色
    $(this).css({borderColor:'rgb(25, 105, 255)'})
});
$(".input-pane-lg").blur(function(){
    $(this).css({borderColor:'rgb(194, 194, 194)'})
});


var a = 0;
$(".psc,.UpDown").click(function(){
    if(a%2 == 0){
        $("#usageScenario").slideDown();    //定义选项下滑显示
        $(".choose-pane").css({borderColor:'rgb(25, 105, 255)'});   //定义外框变为蓝色
        $(".UpDown").css({"transform":" rotate(180deg)"});  //定义方向顺时针旋转180度
    }else if(a%2 == 1){
        $("#usageScenario").slideUp();
        $(".choose-pane").css({borderColor:'rgb(194, 194, 194)'})
        $(".UpDown").css({"transform":" rotate(0deg)"});
    }
    a++;
});


//选项选择点击后 标签内容就变为此选项
$(" #usageScenario li").click(function(){
    $("#selectd").html($(this).html());
    $("#usageScenario").slideUp();
    $(".choose-pane").css({borderColor:'rgb(194, 194, 194)'})
    a++;
});


//项目案例按钮点击特效
$("#projectbtn .item").click(function(){
    $(this).addClass("main-color-bg");
    $("#projectbtn .item").not($(this)).removeClass("main-color-bg");
    var btnId = $(this).attr('cid');
});


//产品展示按钮点击特效(根据坐标移动位置)
$("#productCenter .item").click(function(){
    $(this).addClass("main-color-bg");
    $("#productCenter .item").not($(this)).removeClass("main-color-bg");
    var btnId = $(this).attr('cid');


});




// 设置 开始计算按钮点击后事件
$(".get-quote-calculate").click(function(){
    if($(".phone").val().length <11){
        $("#topMessage .errorTip").css({"display":"inline-block"});
    }else{
        layer.open({
            type: 1,
            title:" ",
            area: ['80%', '340px'], //宽高
            content: '<div style="padding:20px;margin-top: 60px;text-align: center"><span class="layui-icon layui-icon-ok-circle" style="font-size: 80px;color: #F49F13;"></span><br><h4 style="font-size: 20px;line-height: 28px;margin: 14px 0;color: #212022;font-weight: bold;">提交成功</h4><p style="line-height: 26px;">晶泰光电客服将在3分钟内给您回电<br>免费提供装屏咨询服务</p></div>'
        });

        //提交到数据库
        var scenario = $("#selectd").html();          //屏幕类型
        var address= $("#address").val();            //地址
        var white = $("#screenWidth").val();          //宽度
        var height = $("#screenHeight").val();        //高度
        var contact = $("#phoneNumner").val();        //手机号码
        var dt = new Date();    //提交时间
        var foundDate = dt.getFullYear()+"-"+dt.getMonth()+"-"+dt.getDate()+" "+dt.getHours()+":"+dt.getMinutes();
        // 提交到数据库
        $.post("server/insertDatabase.php",{ scenario:scenario, address:address ,white:white,height:height ,contact:contact,foundDate:foundDate })
    }
});
$(".phone").focus(function(){
    $("#topMessage .errorTip").hide();
});




