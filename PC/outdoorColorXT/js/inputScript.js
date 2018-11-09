/**
 *
 * 自定义的逻辑脚本
 * 此脚本是表单内数据的自计算逻辑
 */


//全局变量
//1.输入和选择
productType = "";       //全局变量 选择型号
inputWidth = 0;         //输入框输入长度值
inputHeight = 0;        //输入框输入高度值


//2.数据表信息
moduleWidth = 0;        //全局变量 模组长度A1
moduleHeight = 0;       //全局变量 模组高度B1
moduleWidthNumber = 0;  //全局变量 模组长个数A2
moduleHeightNumber = 0; //全局变量 模组高个数B2
screenWidth = 0;        //全局变量 显示总长度
screenHeight = 0;       //全局变量 显示总高度
borderSumWidth = 0;     //全局变量 加边框后总长度
borderSumHeight = 0;    //全局变量 加边框后总高度
WidthPixel = 0;         //全局变量 单板长像素
HeightPixel = 0;        //全局变量 单板高像素
WidthSumPixel = 0;      //全局变量 显示屏长总像素
HeightSumPixel = 0;     //全局变量 显示屏高总像素
allSquare = 0;          //全局变量 总平方数

getPowerNumber = 0;     //全局变量 电源数量 (因为要根据电源数量获取总千瓦数)
receptionCard = 0;     //全局变量 接收卡数量
heightNumber = 0;       //接收卡高帯载几块
widthNumber = 0;        //接收卡长帯载几块
boardNumber = 0;        //全局变量 单元板总数量
//判断输入和选择的内容不为空

function selects(){
    $(".form-horizontal select").each(function(){
        if($(this).val() != null){
            $(this).parent().next().children("span").css({"display":"none"});
        }
    })
}

function types(){
    $(".form-horizontal input").each(function(){
        if($(this).val() != ""){
            $(this).parent().parent().next().children("span").css({"display":"none"});
        }
    })
}


//  1.1 填充单元板单板长度
function getSingleWidth(){
    switch(productType)
    {
        case "室外P4":
            moduleWidth = "25.6";
            break;
        case "室外P5":
            moduleWidth = "32.0";
            break;
        case "室外P6":
            moduleWidth = "19.2";
            break;
        case "室外P8":
            moduleWidth = "25.6";
            break;
        case "室外P10":
            moduleWidth = "32.0";
            break;
    }

    $("#dataA1").text(moduleWidth);
}

//  1.2 填充单元板单板高度
function getSingleHeight(){
    switch(productType)
    {

        case "室外P4":
            moduleHeight = "12.8";
            break;
        case "室外P5":
            moduleHeight = "16.0";
            break;
        case "室外P6":
            moduleHeight = "19.2";
            break;
        case "室外P8":
            moduleHeight = "12.8";
            break;
        case "室外P10":
            moduleHeight = "16.0";
            break;

    }
    $("#dataB1").text(moduleHeight);
}

//  1.3 单元板长个数,通过输入框四舍五入获得
function getWidthNumber(){
    //先获取输入的总长度,再用总长度除以获取到的单板长度,求得单元板长个数
    inputWidth = $("#inputWidth").val();
    moduleWidthNumber = Math.round(inputWidth/moduleWidth); //单元板长个数
    $("#dataA2").text(moduleWidthNumber);
}
//  1.4 单元板高个数,通过输入框四舍五入获得
function getHeightNumber(){
    //先获取输入的总高度,再用总高度除以获取到的单板高度,求得单元板高个数
    inputHeight = $("#inputHeight").val();   //获取输入框的值
    moduleHeightNumber = Math.round(inputHeight/moduleHeight); //单元板高个数
    $("#dataB2").text(moduleHeightNumber);
}

//  1.5 显示总长度,通过长个数乘以单板长度获得
function getScreenWidth(){
    //使用获取到的模组长度和模组长个数,求得显示屏的总长度
    screenWidth = accMul(moduleWidth,moduleWidthNumber);
    $("#dataA3").text(screenWidth);
}
//  1.6 显示总高度,通过高个数乘以单板高度获得
function getScreenHeight(){
    //使用获取到的模组高度和模组高个数,求得显示屏的总高度
    screenHeight = accMul(moduleHeight,moduleHeightNumber)
    $("#dataB3").text(screenHeight);
}

//  1.7 加边框后长度,通过显示总长度加上10cm获得
function getOverWdith(){
    var borderWidth = 0;
    var price = 0;  //这里把这个型材单价设置成局部变量
    switch($("#selectBorder").val()) {




        case "9025常规型材":
            borderWidth = 5;
            break;
        case "9035常规型材":
            borderWidth = 7;
            break;
        case "9040常规型材":
            borderWidth = 8;
            break;
        case "9045常规型材":
            borderWidth = 9;
            break;
        case "10050常规型材":
            borderWidth = 10;
            break;
        case "9045金型材":
            borderWidth = 9;
            break;
        case "10050金型材":
            borderWidth = 10;
            break;
        case "9045银型材":
            borderWidth = 9;
            break;
        case "9060银型材":
            borderWidth = 12;
            break;
        case "10070银型材":
            borderWidth = 14;
            break;


    }
    borderSumWidth = borderWidth + screenWidth;
    $("#dataA4").text(borderSumWidth);
    $("#partsG2").text(price);
    //求得型材的合计金额
    $("#partsG3").text($("#partsG2").text()*Math.ceil(((screenWidth*2)+(screenHeight*2))/600));
}
//  1.8 加边框后高度,通过显示总高度加上10cm获得
function getOverHeight(){
    var borderHeight = 0;


    switch($("#selectBorder").val()) {
        case "9025常规型材":
            borderHeight = 5;
            break;
        case "9035常规型材":
            borderHeight = 7;
            break;
        case "9040常规型材":
            borderHeight = 8;
            break;
        case "9045常规型材":
            borderHeight = 9;
            break;
        case "10050常规型材":
            borderHeight = 10;
            break;
        case "9045金型材":
            borderHeight = 9;
            break;
        case "10050金型材":
            borderHeight = 10;
            break;
        case "9045银型材":
            borderHeight = 9;
            break;
        case "9060银型材":
            borderHeight = 12;
            break;
        case "10070银型材":
            borderHeight = 14;
            break;
    }
    borderSumHeight = borderHeight + screenHeight
    $("#dataB4").text(borderSumHeight);

    //求得型材的合计金额
    $("#partsG3").text($("#partsG2").text()*Math.ceil(((screenWidth*2)+(screenHeight*2))/600));
}

//  1.9 单元板长像素,通过单元板型号switch匹配
function getWidthPixel(){
    switch(productType)
    {

        case "室外P4":
            WidthPixel = "64";
            break;
        case "室外P5":
            WidthPixel = "64";
            break;
        case "室外P6":
            WidthPixel = "32";
            break;
        case "室外P8":
            WidthPixel = "32";
            break;
        case "室外P10":
            WidthPixel = "32";
            break;

    }
    $("#dataA5").text(WidthPixel);
}
//  1.10 单元板高像素,通过单元板型号switch匹配
function getHeightPixel(){
    switch(productType)
    {

        case "室外P4":
            HeightPixel = "32";
            break;
        case "室外P5":
            HeightPixel = "32";
            break;
        case "室外P6":
            HeightPixel = "32";
            break;
        case "室外P8":
            HeightPixel = "16";
            break;
        case "室外P10":
            HeightPixel = "16";
            break;

    }

    $("#dataB5").text(HeightPixel);
}

//  1.11 显示长总像素,通过单元板长个数和长像素获得
function getWidthSumPixel(){
    //使用获取到的模组长像素点和模组长数量,求得显示屏的长总像素点
    WidthSumPixel = accMul(WidthPixel,moduleWidthNumber)
    $("#dataA6").text(WidthSumPixel);
}
//  1.12 显示高总像素,通过单元板高个数和高像素获得
function getHeightSumPixel(){
    //使用获取到的模组高像素点和模组高数量,求得显示屏的高总像素点
    HeightSumPixel = accMul(HeightPixel,moduleHeightNumber)
    $("#dataB6").text(HeightSumPixel);
}
//  1.13 总千瓦数,最后点击提交计算后根据电源数量生成
function getPower(){
    //每个电源功率200瓦,除以1000为千瓦值
    $("#dataA7").text((getPowerNumber*200)/1000);
}
//  1.14 总平方数,根据加边框后长度和加边框后高度生成
function getArea(){
    allSquare = ((accMul(borderSumWidth,borderSumHeight))/10000).toFixed(1);
    $("#dataB7").text(allSquare);
}




//   2 根据数据表获取材料表的所有内容
function getDataList(){
    getLine1(); //第1行数据
    getLine2(); //第2行数据
    getLine3(); //第3行数据
    getLine4(); //第4行数据
    getLine5(); //第5行数据
    getLine6(); //第6行数据
    getLine7(); //第7行数据
    getLine8(); //第8行数据
    getLine9(); //第8行数据
    getLine10(); //第8行数据
    getLine17(); //第8行数据
    getLine18(); //第8行数据

}

//2.1 第1行数据 -[单元板]
function getLine1(){
    //获取单元板型号
    var tc = "";

    //获取单元板数量
    $("#partsA2").html(moduleWidthNumber*moduleHeightNumber);
    //获取单板价格
    var boardPrice = 0;
    switch(productType)
    {


        case "室外P4":
            boardPrice = "135";
            tc = "P4";
            break;
        case "室外P5":
            boardPrice = "131";
            tc = "P5";
            break;
        case "室外P6":
            boardPrice = "68";
            tc = "P6";
            break;
        case "室外P8":
            boardPrice = "43";
            tc = "P8";
            break;
        case "室外P10":
            boardPrice = "56";
            tc = "P10";
            break;
    }
    $(" #headline span").html(tc);
    $("#partsA1").html("室外"+tc +"单元板");  //获取单元板型号
    $("#partsA3").text(boardPrice); //单元板单价
    $("#partsA4").text(accMul(boardPrice ,(moduleWidthNumber*moduleHeightNumber)));//单元板总价
}
//2.2 第2行数据 -[电源]
function getLine2(){
    boardNumber = moduleWidthNumber * moduleHeightNumber; //板子总数量
    //获取单板价格
    powerSource = 0;
    switch(productType)
    {
        case "室外P4":
            powerSource = "4";
            break;
        case "室外P5":
            powerSource = "3";
            break;
        case "室外P6":
            powerSource = "6";
            break;
        case "室外P8":
            powerSource = "6";
            break;
        case "室外P10":
            powerSource = "6";
            break;
    }
    getPowerNumber =  Math.ceil(boardNumber/powerSource);
    $("#partsB1").text(getPowerNumber); //电源数量
    $("#partsB2").text(45); //电源价格
    $("#partsB3").text(accMul(getPowerNumber,45));

}
//2.3 第3行数据 -[发送卡]
function getLine3(){
    num = Math.ceil((WidthSumPixel*HeightSumPixel)/1300000); //发送卡数量
    $("#partsC1").text(num);

    IOtype = $("#selectIO").val();
    price = 0;
    switch(IOtype)
    {
        case "聚诚":
            price = 550;
            break;
        case "诺瓦":
            price = 750;
            break;
        case "灵星雨":
            price = 550;
            break;
    }
    $("#partsC2").text(price);  //发送卡价格
    $("#partsC3").text(accMul(num,price)); //发送卡合计

}
//2.4 第4行数据 -[接收卡]
function getLine4(){
    //长192像素 高12张板
    var price = 0;                      //卡单价
    var type = $("#selectIO").val();    //选择型号
    switch(type)
    {
        case "聚诚":
            price = 73;
            break;
        case "诺瓦":
            price = 95;
            break;
        case "灵星雨":
            price = 73;
            break;
    }

    if(type=="聚诚"||type=="灵星雨"){
        heightNum = moduleHeightNumber/12;
        widthNum = WidthSumPixel/192;
    }else if (type=="诺瓦") {
        heightNum = moduleHeightNumber/8;
        widthNum = WidthSumPixel/128;
    }


    receptionCard =  Math.ceil(heightNum) * Math.ceil(widthNum)

    $("#partsD1").text(receptionCard);
    $("#partsD2").text(price);
    $("#partsD3").text(accMul(receptionCard,price));

}
//2.5 第5行数据 -[箱体]
function getLine5(){
    $("#partsF1").text(allSquare);
    $("#partsF2").text(140);
    $("#partsF3").text(accMul(receptionCard,price));
}
//2.6 第6行数据 -[配电柜]
function getLine6(){

    if(getPowerNumber > 50){
        $("#partsG1").text(1);  //配电柜数量
    }else{
        $("#partsG1").text(0);  //配电柜数量
    }

    var xinghao = "";                       //配电柜型号
    var KW = getPowerNumber;     //数据表千瓦数
    var number  = 0;

    if(getPowerNumber>50&&getPowerNumber<100){
        xinghao ="20KW";
    }else if(getPowerNumber>100&&getPowerNumber<150){
        xinghao ="30KW";
    }else if(getPowerNumber>150&&getPowerNumber<200){
        xinghao ="40KW";
    }else if(getPowerNumber>200&&getPowerNumber<250){
        xinghao ="50KW";
    }else if(getPowerNumber>250&&getPowerNumber<300){
        xinghao ="60KW";
    }else if(getPowerNumber>300&&getPowerNumber<400){
        xinghao ="80KW";
    }else if(getPowerNumber>400&&getPowerNumber<500){
        xinghao ="100KW";
    }else if(getPowerNumber>500&&getPowerNumber<600){
        xinghao ="120KW";
    }else if(getPowerNumber>600&&getPowerNumber<700){
        xinghao ="140KW";
    }else if(getPowerNumber>700&&getPowerNumber<800){
        xinghao ="160KW";
    }else if(getPowerNumber>800&&getPowerNumber<900){
        xinghao ="180KW";
    }else if(getPowerNumber>900&&getPowerNumber<1000){
        xinghao ="200KW";
    }

    $("#partsG2").text(xinghao);  //配电柜数量
    switch(xinghao)
    {
        case "20KW":
            number = 1050;
            break;
        case "30KW":
            number = 1500;
            break;
        case "40KW":
            number = 1800;
            break;
        case "50KW":
            number = 2200;
            break;
        case "60KW":
            number = 2500;
            break;
        case "80KW":
            number = 2900;
            break;
        case "100KW":
            number = 3500;
            break;
        case "120KW":
            number = 4500;
            break;
        case "140KW":
            number = 5300;
            break;
        case "160KW":
            number = 6100;
            break;
        case "180KW":
            number = 6900;
            break;
        case "200KW":
            number = 7500;
            break;
    }
    //
    $("#partsG3").text(number);
    $("#partsG4").text(number);
}

//2.7 第7行数据 -[长排线]
function getLine7(){
    $("#partsH1").text(moduleHeightNumber * Math.ceil(WidthSumPixel/192));
    $("#partsH2").text(2.5);
    $("#partsH3").text(accMul(moduleHeightNumber * Math.ceil(WidthSumPixel/192),2.5));


}
//2.8 第8行数据 -[电源线]
function getLine8(){
    $("#partsI1").text(getPowerNumber);
    $("#partsI2").text(2.5);
    $("#partsI3").text(getPowerNumber * 2.5);
}
//2.9 第9行数据 -[网线1米]
function getLine9(){
    $("#partsJ1").text(receptionCard);
    $("#partsJ2").text(3);
    $("#partsJ3").text(receptionCard * 3);

}
//2.9 第10行数据 -[网线3米]
function getLine10(){

    $("#partsK1").text(1);
    $("#partsK2").text(10);
    $("#partsK3").text(10);

}


//2.9 第12行数据 -[长排线]
function getLine12(){

    var num = Math.ceil(moduleWidthNumber/widthNumber)*moduleHeightNumber+ 30;
    $("#partsL1").text(num );  //插入长排线数量



    ss = $("#partsL1").text();
    var danjia = 0;             //长排线单价
    if(ss > 0){
        danjia = 2.5;
    }else{
        danjia = 0;
    }

    $("#partsL2").text(danjia);  //插入长排线数量
    $("#partsL3").text(accMul(num,danjia));  //插入长排线数量
}
//2.9 第14行数据 -[网线一米]
function getLine14(){
    $("#partsN1").text(receptionCard);
    $("#partsN2").text(5);
    $("#partsN3").text(receptionCard*5);
}

//2.9 第17行数据 -[视频处理器]
function getLine17(){
    //sss = $("#videoProcessing").val();
    $("#partsL1").text($("#videoProcessing").val());
    $("#partsL2").text(1);

    var xinghao = 0;
    switch($("#videoProcessing").val()) {
        case "华瑞视界800":
            xinghao = 800;
            break;
        case "维奥505":
            xinghao = 1800;
            break;
        case "BVP3200":
            xinghao = 4500;
            break;
        case "异步盒子":
            xinghao = 800;
            break;
    }

    $("#partsL3").text(xinghao);
    $("#partsL4").text(xinghao);
}
//2.9 第18行数据 -[组装加工费]
function getLine18(){

    var v = ((accMul(borderSumWidth,borderSumHeight))/10000).toFixed(1)


    $("#partsM1").text(v);
    $("#partsM2").text(400);
    $("#partsM3").text(Math.ceil(v*400));
}





//  算法 : 两个浮点数相乘获取准确位数小数
function accMul(arg1,arg2){
    var m=0,s1=arg1.toString(),
        s2=arg2.toString();
    try{
        m+=s1.split(".")[1].length}catch(e){}
    try{
        m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
}

//算法:合计小写数字转汉字大写
function zhuanhuan(){
    $("#daXie").text(
        intToChinese($("#summation").text())
    );
}
function intToChinese(n) {
    var fraction = ['角', '分'];
    var digit = [
        '零', '壹', '贰', '叁', '肆',
        '伍', '陆', '柒', '捌', '玖'
    ];
    var unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ];
    var head = n < 0 ? '欠' : '';
    n = Math.abs(n);
    var s = '';
    for (var i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (var i = 0; i < unit[0].length && n > 0; i++) {
        var p = '';
        for (var j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整');
}