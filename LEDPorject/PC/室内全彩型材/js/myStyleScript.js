/**
 * Created by Administrator on 2018/2/26 0026.
 * 丁毅峰
 * 此脚本是自定义的样式脚本
 */

// 一:选择型号后输入方法
$("#selectType").click(function(){
    productType = $("#selectType").val();   //在点击选择型号的时候就把获取到的值赋值给全局变量 productType
    getSingleWidth();   //调用单元板长度方法
    getSingleHeight();  //调用单元板高度方法
    inwidth();      //型号设置后依然调用宽度改变方法
    inheight();     //型号设置后依然调用高度改变方法

})
// 二:长度输入后调用方法
$("#inputWidth").blur(function(){
    inwidth();
    alert(productType);
});
function inwidth(){
    getWidthNumber();   //调用获取单元板长个数方法
    getScreenWidth()    //调用获取显示屏长度方法
}

// 三:高度输入后调用方法
$("#inputHeight").blur(function(){
    inheight();
})
function inheight(){
    getHeightNumber();   //调用获取单元板长个数方法
    getScreenHeight();   //调用获取显示屏长度方法
}
// 四:控制卡

// 五:外边框
$("#selectBorder").click(function(){
    selectBorderFunction();
    alert(productType);
});
function selectBorderFunction(){
    getOverWdith();
}
// 六:处理器



// 七:添加新的表格按钮
$('#mytable').SetEditable({
    $addButton: $('#add')
});


// 八:表格的提交计算按钮
$("#submitNumeration").click(function(){
    $("#footerDate").text(new Date().toLocaleDateString()); //提交按钮按下后生成日期

});


// 九:表格的编辑按钮
i = 0;
$("#butin").click(  //jquery1.8 之后没有toggle(fn(),fn()) 方法,用下列方式替代
    function(){
        if(i%2 == 0){
            $(this).css({"background":"#eb1d1d"});      //按钮颜色变化
            //表单的编辑按钮
            $(" #bd1 td:nth-child(6)").html("");        //第一列最后一格内容为空
            $(" #mytable tr td:nth-child(6)").show();   //编辑按钮显示
            //按钮文本变化
            $("#bianji1").hide();
            $("#bianji2").show();

        }else if(i%2==1){
            $(this).css({"background":"#5bbfdd"});      //按钮颜色变化
            $(" #mytable tr td:nth-child(6)").hide();   //编辑按钮隐藏
            //按钮文本变化
            $("#bianji1").show();
            $("#bianji2").hide();
        }
        i++;
    }
);


// 十:生成合同
v = $(" #headline h2").text();  //这里要把获取的数据存储放置到点击事件的外部作为全局数据,不然数据是会跟随这个元素的内容而改变的
j=0;
$("#contract").click(function(){
    //信息栏隐藏
    if(j%2 == 0){
        $(this).css({"background":"#eb1d1d"});  //按钮颜色变化
        //按钮文本变化
        $("#shengcheng1").hide();
        $("#shengcheng2").show();

        $("#xinxilan").hide();                 //信息栏隐藏
        $("#tableFooter").hide();                 //表格页脚隐藏
        $(" #signatory").show();          //合同签订方显示
        $(" #contract-message").show();     //合同主体显示
        $(" #headline h2").text("购销合同");  //合同标题修改
    }else if(j%2==1){
        $(this).css({"background":"#5bbfdd"});  //按钮颜色变化
        //按钮文本变化
        $("#shengcheng1").show();
        $("#shengcheng2").hide();

        $("#xinxilan").show();         //信息栏显示
        $("#tableFooter").show();         //表格页脚显示
        $(" #signatory").hide();      //合同签订方隐藏
        $(" #contract-message").hide(); //合同主体隐藏
        $(" #headline h2").text(v);  //合同标题修改
    }
    j++;
});

// 十一:打印按钮
$("#print").click(function(){
        window.print();
});














