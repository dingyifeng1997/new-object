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
boxWidth = 0;           //全局变量 箱体长尺寸
boxHeight = 0;          //全局变量 箱体高尺寸
boxWidthNumber = 0;     //全局变量 箱体高个数
boxHeightNumber = 0;    //全局变量 箱体高个数

screenWidth = 0;        //全局变量 显示总长度
screenHeight = 0;       //全局变量 显示总高度

WidthPixel = 0;         //全局变量 单板长像素
HeightPixel = 0;        //全局变量 单板高像素
WidthSumPixel = 0;      //全局变量 显示屏长总像素
HeightSumPixel = 0;     //全局变量 显示屏高总像素
boxNumber = 0;          //全局变量 箱体总数
allSquare = 0;          //全局变量 总平方数

getPowerNumber = 0;     //全局变量 电源数量 (因为要根据电源数量获取总千瓦数)
receptionCard = "";     //全局变量 接收卡数量
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
        case "室内P2/32扫":
            moduleWidth = "25.6";
            break;
        case "室内P2.5/32扫":
            moduleWidth = "32.0";
            break;
        case "室内P3/32扫":
            moduleWidth = "19.2";
            break;
        case "室内P3.91":
            moduleWidth = "25";
            break;
        case "室内P4/16扫":
            moduleWidth = "25.6";
            break;
        case "室内P4.81":
            moduleWidth = "25";
            break;
        case "室内P5/16扫":
            moduleWidth = "32.0";
            break;
    }

    $("#dataA1").text(moduleWidth);
}
//  1.2 填充单元板单板高度
function getSingleHeight(){
    switch(productType)
    {
        case "室内P2/32扫":
            moduleHeight = "12.8";
            break;
        case "室内P2.5/32扫":
            moduleHeight = "16.0";
            break;
        case "室内P3/32扫":
            moduleHeight = "19.2";
            break;
        case "室内P3.91":
            moduleHeight = "25";
            break;
        case "室内P4/16扫":
            moduleHeight = "12.8";
            break;
        case "室内P4.81":
            moduleHeight = "25";
            break;
        case "室内P5/16扫":
            moduleHeight = "16.0";
            break;
    }
    $("#dataB1").text(moduleHeight);
}
//  1.3 单元板长个数
function getWidthNumber(){
    inputWidth = $("#inputWidth").val();
    switch(productType)
    {
        case "室内P2/32扫":
            boxWidth = "51.2";
            break;
        case "室内P2.5/32扫":
            boxWidth = "64.0";
            break;
        case "室内P3/32扫":
            boxWidth = "57.6";
            break;
        case "室内P3.91":
            boxWidth = "50.0";
            break;
        case "室内P4/16扫":
            boxWidth = "51.2";
            break;
        case "室内P4.81":
            boxWidth = "50.0";
            break;
        case "室内P5/16扫":
            boxWidth = "64.0";
            break;
    }
    boxWidthNumber = Math.round(inputWidth/boxWidth);
    moduleWidthNumber = accMul((boxWidth/moduleWidth),boxWidthNumber);
    $("#dataA2").text(moduleWidthNumber);
}
//  1.4 单元板高个数
function getHeightNumber(){
    inputHeight = $("#inputHeight").val();
    switch(productType)
    {
        case "室内P2/32扫":
            boxHeight = "51.2";
            break;
        case "室内P2.5/32扫":
            boxHeight = "64.0";
            break;
        case "室内P3/32扫":
            boxHeight = "57.6";
            break;
        case "室内P3.91":
            boxHeight = "50.0";
            break;
        case "室内P4/16扫":
            boxHeight = "51.2";
            break;
        case "室内P4.81":
            boxHeight = "50.0";
            break;
        case "室内P5/16扫":
            boxHeight = "64.0";
            break;
    }
    boxHeightNumber = Math.round(inputHeight/boxHeight);
    moduleHeightNumber = accMul((boxHeight/moduleHeight),boxHeightNumber);
    $("#dataB2").text(moduleHeightNumber);

}
//  1.5 箱体长个数
function getScreenWidth(){
    $("#dataA3").text(boxWidthNumber);
}
//  1.6 箱体高个数
function getScreenHeight(){
    $("#dataB3").text(boxHeightNumber);
}
//  1.7 显示总长度
function getOverWdith(){
    screenWidth = accMul(boxWidth,boxWidthNumber);
    $("#dataA4").text(screenWidth);
}
//  1.8 显示总高度
function getOverHeight(){
    screenHeight = accMul(boxHeight,boxHeightNumber);
    $("#dataB4").text(screenHeight);
}
//  1.9 单元板长像素,通过单元板型号switch匹配
function getWidthPixel(){
    switch(productType)
    {
        case "室内P2/32扫":
            WidthPixel = "128";
            break;
        case "室内P2.5/32扫":
            WidthPixel = "128";
            break;
        case "室内P3/32扫":
            WidthPixel = "64";
            break;
        case "室内P3.91":
            WidthPixel = "64";
            break;
        case "室内P4/16扫":
            WidthPixel = "64";
            break;
        case "室内P4.81":
            WidthPixel = "52";
            break;
        case "室内P5/16扫":
            WidthPixel = "64";
            break;
    }
    $("#dataA5").text(WidthPixel);
}
//  1.10 单元板高像素,通过单元板型号switch匹配
function getHeightPixel(){
    switch(productType)
    {
        case "室内P2/32扫":
            HeightPixel = "64";
            break;
        case "室内P2.5/32扫":
            HeightPixel = "64";
            break;
        case "室内P3/32扫":
            HeightPixel = "64";
            break;
        case "室内P3.91":
            HeightPixel = "64";
            break;
        case "室内P4/16扫":
            HeightPixel = "32";
            break;
        case "室内P4.81":
            HeightPixel = "52";
            break;
        case "室内P5/16扫":
            HeightPixel = "32";
            break;
    }

    $("#dataB5").text(HeightPixel);
}
//  1.11 显示长总像素,通过单元板长个数和长像素获得
function getWidthSumPixel(){
    //使用获取到的模组长像素点和模组长数量,求得显示屏的长总像素点
    WidthSumPixel = accMul(WidthPixel,moduleWidthNumber);
    $("#dataA6").text(WidthSumPixel);
}
//  1.12 显示高总像素,通过单元板高个数和高像素获得
function getHeightSumPixel(){
    //使用获取到的模组高像素点和模组高数量,求得显示屏的高总像素点
    HeightSumPixel = accMul(HeightPixel,moduleHeightNumber);
    $("#dataB6").text(HeightSumPixel);
}
//  1.13 总千瓦数,最后点击提交计算后根据电源数量生成
function getPower(){

    //电源数量
    getPowerNumber = accMul(accMul(boxWidthNumber,boxHeightNumber),2);
    $("#dataA7").text((getPowerNumber*200)/1000);
}
//  1.14 总平方数,根据加边框后长度和加边框后高度生成
function getArea(){
    allSquare = ((accMul(screenWidth,screenHeight))/10000).toFixed(1);
    $("#dataB7").text(allSquare);
}
//  1.14 总平方数,根据加边框后长度和加边框后高度生成
function getboxNumber(){
    boxNumber = accMul(boxWidthNumber,boxHeightNumber);
}







//   2 根据数据表获取材料表的所有内容
function getDataList(){
    getboxNumber();
    getLine1(); //第1行数据
    getLine2(); //第2行数据
    getLine3(); //第3行数据
    getLine4(); //第4行数据
    getLine5(); //第5行数据
    getLine6(); //第6行数据
    getLine7(); //第7行数据
    //getLine8(); //第8行数据
    //getLine9(); //第8行数据
    //getLine10(); //第8行数据
    //getLine11(); //第8行数据
    //getLine12(); //第8行数据
    //getLine13(); //第8行数据
    //getLine14(); //第8行数据
    //getLine15(); //第8行数据
    //getLine16(); //第8行数据
    //getLine17(); //第8行数据
    //getLine18(); //第8行数据

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
        case "室内P2/32扫":
            boardPrice = "370";
            tc = "P2";
            break;
        case "室内P2.5/32扫":
            boardPrice = "215";
            tc = "P2.5";
            break;
        case "室内P3/32扫":
            boardPrice = "105";
            tc = "P3";
            break;
        case "室内P3.91":
            boardPrice = "170";
            tc = "P3.91";
            break;
        case "室内P4/16扫":
            boardPrice = "56";
            tc = "P4";
            break;
        case "室内P4.81":
            boardPrice = "160";
            tc = "P4.81";
            break;
        case "室内P5/16扫":
            boardPrice = "75";
            tc = "P5";
            break;
    }
    $(" #headline span").html(tc);
    $("#partsA1").html("室内"+tc +"单元板");  //获取单元板型号
    $("#partsA3").text(boardPrice); //单元板单价
    $("#partsA4").text(accMul(boardPrice ,(moduleWidthNumber*moduleHeightNumber)));//单元板总价
}
//2.2 第2行数据 -[电源]
function getLine2(){
    $("#partsB1").text(getPowerNumber); //电源数量
    $("#partsB2").text(45); //电源价格
    $("#partsB3").text(accMul(getPowerNumber,45));
}
//2.3 第3行数据 -[发送卡]
function getLine3(){
    num = Math.ceil((WidthSumPixel*HeightSumPixel)/1300000); //发送卡数量
    $("#partsC1").text(num);

    IOtype = $("#selectIO").val();
    var price = 0;
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
    var price = 0;
    switch(IOtype)
    {
        case "聚诚":
            price = 73;
            break;
        case "诺瓦":
            price = 95;
            break;
        case "灵星雨":
            price = 75;
            break;
    }
    var number = accMul(boxWidthNumber,boxHeightNumber);
    $("#partsD1").text(number);
    $("#partsD2").text(price);
    $("#partsD3").text( accMul(number,price));
}
//2.5 第5行数据 -[DIV线]
function getLine5(){
    var num = Math.ceil((WidthSumPixel*HeightSumPixel)/1300000); //发送卡数量
    $("#partsE1").text(Math.floor(num/2));   //DIV线数量

    var be = 0;
    if( $("#partsE1").text() == "NaN"|| $("#partsE1").text() == 0){
        be = 0;
    }else{
        be =  80;
    }
    $("#partsE2").text(be);        //DIV线价格
    $("#partsE3").text(accMul(Math.floor(num/2),be));        //DIV线价格
}
//2.6 第6行数据 -[箱体]
function getLine6(){
    $("#partsF1").text(boxNumber);
    var type = "";
    var price = 0;
    switch(productType)
    {
        case "室内P2/32扫":
            type = "512*512";
            price = 320;
            break;
        case "室内P2.5/32扫":
            type = "640*640";
            price = 321;
            break;
        case "室内P3/32扫":
            type = "576*576";
            price = 322;
            break;
        case "室内P3.91":
            type = "500*500";
            price = 323;
            break;
        case "室内P4/16扫":
            type = "512*512";
            price = 324;
            break;
        case "室内P4.81":
            type = "500*500";
            price = 325;
            break;
        case "室内P5/16扫":
            type = "640*640";
            price = 326;
            break;
    }
    $("#partsF2").text(type);
    $("#partsF3").text(price);
    $("#partsF4").text(accMul(boxNumber,price));
}
//2.7 第7行数据 -[配电柜]
function getLine7(){

    if(getPowerNumber > 48){
        $("#partsG1").text(1);  //配电柜数量
    }else{
        $("#partsG1").text(0);  //配电柜数量
    }

    var xinghao = "";                       //配电柜型号
    var KW = getPowerNumber;     //数据表千瓦数
    var number  = 0;

    if(getPowerNumber>48){
        xinghao ="20KW";
    }else if(getPowerNumber>96){
        xinghao ="30KW";
    }else if(getPowerNumber>130){
        xinghao ="40KW";
    }else if(getPowerNumber>175){
        xinghao ="50KW";
    }else if(getPowerNumber>225){
        xinghao ="60KW";
    }else if(getPowerNumber>275){
        xinghao ="80KW";
    }else if(getPowerNumber>375){
        xinghao ="100KW";
    }else if(getPowerNumber>450){
        xinghao ="120KW";
    }else if(getPowerNumber>550){
        xinghao ="140KW";
    }else if(getPowerNumber>650){
        xinghao ="160KW";
    }else if(getPowerNumber>750){
        xinghao ="180KW";
    }else if(getPowerNumber>850){
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
        case "1400KW":
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
//2.8 第8行数据 -[航空插头]
function getLine8(){

    $("#partsH1").text();
    $("#partsH2").text();
    $("#partsH3").text();
}
//2.9 第9行数据 -[航空边锁]
function getLine9(){
    $("#partsI1").text();
    $("#partsI2").text();
    $("#partsI3").text();
}
//2.10 第10行数据 -[航空外箱]
function getLine10(){
    $("#partsJ1").text();
    $("#partsJ2").text();
    $("#partsJ3").text();
}
//2.11 第11行数据 -[支撑架]
function getLine11(){
    $("#partsK1").text(1);
    $("#partsK2").text(10);
    $("#partsK3").text(10);
}
//2.12 第12行数据 -[视频处理器]
function getLine12(){
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
//2.13 第13行数据 -[组装加工费]
function getLine13(){

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