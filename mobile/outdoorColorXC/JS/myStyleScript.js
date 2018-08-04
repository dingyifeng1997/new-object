/**
 * Created by Administrator on 2018/2/26 0026.
 * 丁毅峰
 * 此脚本是自定义的样式脚本
 * 室内全彩型材移动端 - 输入栏JS
 */



//下拉按钮点击特效
p = 0;
$(" #dropDown").click(
    function(){
        if(p%2 == 0){
            $("#dropDownSpan1").hide();
            $("#dropDownSpan2").show();
        }else{
            $("#dropDownSpan1").show();
            $("#dropDownSpan2").hide();
        }
        p++;
    }
);





// 一:选择型号后输入方法
$("#selectType").blur(function(){
    productType = $("#selectType").val();   //在点击选择型号的时候就把获取到的值赋值给全局变量 productType
    inwidth();      //型号设置后调用宽度改变方法
    inheight();     //型号设置后调用高度改变方法
    selectBorderFunction(); //获取加型材后的长宽尺寸
    getWidthPixel();        //获取单板长像素
    getHeightPixel();       //获取单板高像素
    //因为inwidth在获取单板长像素后才执行,所以获取长总像素在选择型号这一项获取单板像素后还需要再执行一次
    getWidthSumPixel();     //获取长总像素(要等到获取到尺寸后再获取长总像素)
    getHeightSumPixel();    //获取高总像素(要等到获取到尺寸后再获取高总像素)

    getDataList();  //计算数据主体表格
    getSelectsIO()      //调用选择发送卡接收卡设备

    selects()   //判断是否选择
})
// 二:长度输入后调用方法
$("#inputWidth").blur(function(){
    inwidth();
});
function inwidth(){
    getSingleWidth();   //调用单元板长度方法
    getSingleHeight();  //调用单元板高度方法
    getWidthNumber();   //调用获取单元板长个数方法
    getScreenWidth()    //调用获取显示屏长度方法
    getOverWdith();     //长度输入的时候调用最终加边框长度方法
    getWidthSumPixel(); //长度输入后调用获取长总像素的方法

    getDataList();      //计算数据主体表格

    getPower();         //根据表格中电源的数量来获取功率(因为要根据电源的数量去获取,所以要等到getDataList()方法走完之后再走这一个方法)
    getArea()           //设置长度后获取总平方数
    getSelectsIO()      //调用选择发送卡接收卡设备
    types()             //判断是否输入
}

// 三:高度输入后调用方法
$("#inputHeight").blur(function(){
    inheight();
})
function inheight(){
    getSingleWidth();    //调用单元板长度方法
    getSingleHeight();   //调用单元板高度方法
    getHeightNumber();   //调用获取单元板长个数方法
    getScreenHeight();   //调用获取显示屏长度方法
    getOverHeight()      //高度输入的时候调用最终加边框高度方法
    getHeightSumPixel()  //高度输入后调用获取高总像素方法

    getDataList();       //计算数据主体表格

    getPower();          //根据表格中电源的数量来获取功率(因为要根据电源的数量去获取,所以要等到getDataList()方法走完之后再走这一个方法)
    getArea()           //设置高度后获取总平方数
    getSelectsIO()      //调用选择发送卡接收卡设备

    types()             //判断是否输入
}



// 四:选择控制卡后调用方法
$("#selectIO").blur(function(){
    getSelectsIO()
    selects()   //判断是否选择
});
function getSelectsIO(){
    getLine4(); //设置发送卡
    getLine5(); //设置接收卡
    getLine12();    //选择长排线
    getLine14()     //选择网线根数
}

// 五:选择外边框后调用方法
$("#selectBorder").blur(function(){
    selectBorderFunction();
    selects()   //判断是否选择
});

function selectBorderFunction(){
    getOverWdith();         //获取加边框后长度
    getOverHeight()         //获取加边框后高度
    getArea();              //设置边框后获取总平方数

    getLine7()  //选择边框的时候调用选择型号
    getLine8()  //选择边框的时候调用选择拐角方法
    getLine9(); //选择型材后调用选择接头方法
    getLine18();//选择型材后调用计算总平方数方法
}
// 六:选择处理器后调用方法

$("#videoProcessing").blur(function(){
    getLine17();
    selects()   //判断是否选择
});







 //七:编辑按钮点击特效
j = 0;
$(" #copyreader").click(
    function(){
        if(j%2 == 0){
            $(this).css({"background":"#eb1d1d","color":"black"});  //按钮颜色变红
            $(" #mytable tr td:nth-child(6)").show();               //删除按钮显示
            //$(" #bd1 td:nth-child(6)").text("");                  //设置第一行没有删除按钮
            $("#dropDownIcon").addClass("glyphicon glyphicon-chevron-up");
            $("#dropDownIcon").removeClass("glyphicon glyphicon-chevron-down");
        }else{
            $(" #mytable tr td:nth-child(6)").hide();               //删除按钮隐藏
            $(this).css({"background":"#efac4e","color":"white"});  //按钮颜色变回原色
            $("#dropDownIcon").addClass("glyphicon glyphicon-chevron-down");
            $("#dropDownIcon").removeClass("glyphicon glyphicon-chevron-up");
        }
        j++;
    }
);

//i = 0;
//$("#butin").click(  //jquery1.8 之后没有toggle(fn(),fn()) 方法,用下列方式替代
//    function(){
//        if(i%2 == 0){
//            $(this).css({"background":"#eb1d1d"});      //按钮颜色变化
//            //表单的编辑按钮
//            $(" #bd1 td:nth-child(6)").html("");        //第一列最后一格内容为空
//            $(" #mytable tr td:nth-child(6)").show();   //编辑按钮显示
//            //按钮文本变化
//            $("#bianji1").hide();
//            $("#bianji2").show();
//
//        }else if(i%2==1){
//            $(this).css({"background":"#5bbfdd"});      //按钮颜色变化
//            $(" #mytable tr td:nth-child(6)").hide();   //编辑按钮隐藏
//            //按钮文本变化
//            $("#bianji1").show();
//            $("#bianji2").hide();
//        }
//        i++;
//    }
//);







// 八:表格的提交计算按钮
$(" #numeration").click(function(){
    //提交按钮按下后生成日期
    $("#footerDate").text(new Date().toLocaleDateString());

    inputAndSelect();   //判断输入是否为空
    onlyNumber();       //判断表格是否为数字
    getSum();           //对修改过的所有的的数量和单价都再次进行计算

});

//提交计算的时候判断选择和输入是否为空
function inputAndSelect(){
    $(".form-horizontal select").each(function(){
        if($(this).val() == null){

            alert($(this).parent().next().children("span").text())
        }
    })

    $(".form-horizontal input").each(function(){
        if($(this).val() == ""){

            alert($(this).parent().next().children("span").text());
        }
    })
}

//限制只能输入数字,输入不正确就弹出弹框
function onlyNumber(){
    b = 0;  //输入框的索引
    c = 0;  //输入框不为数字个数
    val = $(".astrict-number");
    while(b < val.length){
        //判断,遍历输入框的内容,当发现输入框的内容不为数字时,就记录输入框不为数字的个数
        if(!val.eq(b)[0].innerText.match(/^\d/i)){
            c++;
            val.eq(b).css({"color":"red"});
        }else{
            val.eq(b).css({"color":"black"});
        }
        b++;
    }
    //判断,当输入框中发现有一个或者一个以上的内容不为数字,就打印出有几个输入框不为数字
    if(c != 0){
        alert("报错! 编辑表格中有"+c+"个输入框的内容为空.或者不为数字,请检查后再提交");

    }

}

//对所有的单价和数量再次进行求和
function getSum(){
    summation = 0;
    $(" #mytable .warp-tbody").children("tr").each(function(){
        num = $(this).children("td").eq(1).text();    //数量
        prace = $(this).children("td").eq(3).text();    //单价
        $(this).children("td").eq(4).text(accMul(num,prace));
        summation += accMul(num,prace);
    })
    $("#zongHeJi").text(summation.toFixed(1)); //插入到总合计中
    $("#allDaXie").text(intToChinese(summation.toFixed(1))); //插入到总合计中
    // alert("折合每平方价格为 : "+(summation/allSquare).toFixed(1)+" 元")  //弹出每平方价格
    layer.alert(((summation/allSquare).toFixed(1)+" 元"), {title:'每平方报价为',icon:6});  //弹出每平方价格
}


// 九:添加新的表格按钮
$('#mytable').SetEditable({
    $addButton: $('#add')

});

















