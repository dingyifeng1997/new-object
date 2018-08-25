$(function () {
    'use strict';

    //下拉刷新页面
    $(document).on("pageInit", "#page-ptr", function(e, id, page) {
        var $content = $(page).find(".content").on('refresh', function(e) {
            // 模拟2s的加载过程
            setTimeout(function() {

                //下拉刷新要执行的操作
                $(".card-container").html("更新后文件");


                // 加载完毕需要重置
                $.pullToRefreshDone($content);
            }, 1000);
        });
    });

    $.init();   //开启下拉刷新
});



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