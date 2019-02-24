/**
 * Created by Administrator on 2018/2/26 0026.
 * 丁毅峰
 * 此脚本是自定义的样式脚本
 */

// 一:选择型号后输入方法
$("#selectType").click(function(){

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

    getLine15(); //第15行数据 包装费
    getLine16(); //第16行数据 组装加工费
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

    getLine15(); //第15行数据 包装费
    getLine16(); //第16行数据 组装加工费
    types()             //判断是否输入
}



// 四:选择控制卡后调用方法
$("#selectIO").click(function(){
    getSelectsIO()
    selects()   //判断是否选择
});
function getSelectsIO(){
    getLine2()  //设置控制卡型号
    getLine12();    //选择长排线
    getLine14()     //选择网线根数
}

// 五:选择外边框后调用方法
$("#selectBorder").click(function(){
    selectBorderFunction();
    selects()   //判断是否选择
});

function selectBorderFunction(){
    getOverWdith();         //获取加边框后长度
    getOverHeight()         //获取加边框后高度
    getArea();              //设置边框后获取总平方数

    getLine5();  //选择边框的时候调用选择型号
    getLine7();  //选择边框的时候调用选择型号
    getLine8();  //选择边框的时候调用选择拐角方法
    getLine9(); //选择型材后调用选择接头方法
    getLine15();//计算面积
    getLine16();//选择型材后计算总面积平方数
}


// 七:添加新的表格按钮
$('#mytable').SetEditable({
    $addButton: $('#add')

});


// 八:表格的提交计算按钮
$("#submitNumeration").click(function(){
    //提交按钮按下后生成日期
    $("#footerDate").text(new Date().toLocaleDateString());

    inputAndSelect();   //判断输入是否为空
    onlyNumber();       //判断表格是否为数字
    getSum();           //对修改过的所有的的数量和单价都再次进行计算
    outPutImg();        //导出报价图片
});

//导出报价为图片
function outPutImg(){
    $.post("../../cookies/checkCookie.php",function(data){
        var sr = document.getElementById("kebianji");
        html2canvas(sr).then(function (canvas) {
//                    document.body.appendChild(canvas);
            var html_canvas = canvas.toDataURL();
            $.post('../server.php', {html_canvas: html_canvas,ids:data}, function (json) {
            }, 'json');
        });
    } );
}


//提交计算的时候判断选择和输入是否为空
function inputAndSelect(){
    $(".form-horizontal select").each(function(){
        if($(this).val() == null){
            $(this).parent().next().children("span").css({"display":"block"});
            alert($(this).parent().next().children("span").text())
        }
    })

    $(".form-horizontal input").each(function(){
        if($(this).val() == ""){
            $(this).parent().parent().next().children("span").css({"display":"block"});
            alert($(this).parent().parent().next().children("span").text());
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

    //先判断是否可以请求到sum.php,如果请求不到代表是本地保存文件,则不进行计算
    $.ajax({
        type: "post",
        url: "../sum.php",
        success: function(data) {
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
            layer.alert(((summation/allSquare).toFixed(1)+" 元"), {title:'每平方报价为',icon:6,shadeClose:true});  //弹出每平方价格

        }
    })

}





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
        $(" #yunfeiyejiao").hide();     //运费显示
        $(" #headline h2").text("购销合同");  //合同标题修改
        $("#kebianji").attr("contenteditable","true")//给合同元素添加可编辑属性
    }else if(j%2==1){
        $(this).css({"background":"#5bbfdd"});  //按钮颜色变化
        //按钮文本变化
        $("#shengcheng1").show();
        $("#shengcheng2").hide();

        $("#xinxilan").show();         //信息栏显示
        $("#tableFooter").show();         //表格页脚显示
        $(" #signatory").hide();      //合同签订方隐藏
        $(" #contract-message").hide(); //合同主体隐藏
        $(" #yunfeiyejiao").show(); //运费隐藏
        $(" #headline h2").text(v);  //合同标题修改
        $("#kebianji").attr("contenteditable","false")//给合同元素添加可编辑属性
    }
    j++;

});

// 十一:打印按钮
$("#print").click(function(){
        window.print();
});



// 十二:导出Excel
$("#outPutExcel").click(function(){
    // 使用outerHTML属性获取整个table元素的HTML代码（包括<table>标签），然后包装成一个完整的HTML文档，
    // 设置charset为urf-8以防止中文乱码
    var html = document.getElementById("outPutTable").outerHTML;

    // 实例化一个Blob对象，其构造函数的第一个参数是包含文件内容的数组，第二个参数是包含文件类型属性的对象
    // var blob = new Blob([html], { type: "application/vnd.ms-excel" });
    var blob = new Blob([html]);    //事实上只需要一个参数就可以

    var pids = document.getElementById("outPutExcel");
    // 利用URL.createObjectURL()方法为a元素生成blob URL
    pids.href = URL.createObjectURL(blob);

    // 设置文件名
    pids.download =  Math.random().toString(36).substr(2)+".xls";
});
// 十三:导出Word
$("#outPutWord").click(function(){
    // 使用outerHTML属性获取整个table元素的HTML代码（包括<table>标签），然后包装成一个完整的HTML文档，
    // 设置charset为urf-8以防止中文乱码

    var html =  "<html><head><meta charset='utf-8' /></head><body>" + document.getElementById("outPutTable").outerHTML + "</body></html>"

    // 实例化一个Blob对象，其构造函数的第一个参数是包含文件内容的数组，第二个参数是包含文件类型属性的对象
    // var blob = new Blob([html], { type: "application/vnd.ms-excel" });
    var blob = new Blob([html]);    //事实上只需要一个参数就可以

    var pids = document.getElementById("outPutWord");
    // 利用URL.createObjectURL()方法为a元素生成blob URL
    pids.href = URL.createObjectURL(blob);

    // 设置文件名
    pids.download =  Math.random().toString(36).substr(2)+".doc";
});

//合同区域变为大写
$("#contractNum").blur(function() {
    $("#priceDaXie").text(intToChinese($(this).val()));
});

//删除合同区域备注
$("#shanchu1").click(function(){
    $("#htbeizhu1").html("");
    $("#tbbeizhu1").html("");

});
$("#htbeizhu1").hover(
    function(){
        $("#shanchu1").css({"display":"block"});
    },
    function(){
        $("#shanchu1").css({"display":"none"});
    }
)

//删除合同区域备注
$("#shanchu2").click(function(){
    $("#htbeizhu2").html("");
    $("#tbbeizhu2").html("");

});
$("#htbeizhu2").hover(
    function(){
        $("#shanchu2").css({"display":"block"});
    },
    function(){
        $("#shanchu2").css({"display":"none"});
    }
)











