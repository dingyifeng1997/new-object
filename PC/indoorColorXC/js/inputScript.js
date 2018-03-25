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
receptionCard = "";     //全局变量 接收卡数量
heightNumber = 0;       //接收卡高帯载几块
widthNumber = 0;        //接收卡长帯载几块

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
        case "室内P4/16扫":
            moduleWidth = "25.6";
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
        case "室内P4/16扫":
            moduleHeight = "12.8";
            break;
        case "室内P5/16扫":
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
    borderWidth = 0;
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
    borderHeight = 0;


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
        case "室内P2/32扫":
            WidthPixel = "128";
            break;
        case "室内P2.5/32扫":
            WidthPixel = "128";
            break;
        case "室内P3/32扫":
            WidthPixel = "64";
            break;
        case "室内P4/16扫":
            WidthPixel = "64";
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
        case "室内P4/16扫":
            HeightPixel = "32";
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
    getLine11(); //第8行数据
    getLine12(); //第8行数据
    getLine13(); //第8行数据
    getLine14(); //第8行数据
    getLine15(); //第8行数据
    getLine16(); //第8行数据
    getLine17(); //第8行数据
    getLine18(); //第8行数据

}

//2.1 第1行数据 -[单元板]
function getLine1(){
    //获取单元板数量
    $("#partsA1").html(moduleWidthNumber*moduleHeightNumber);
    //获取单板价格
    boardPrice = 0;
    switch(productType)
    {
        case "室内P2/32扫":
            boardPrice = "370";
            break;
        case "室内P2.5/32扫":
            boardPrice = "215";
            break;
        case "室内P3/32扫":
            boardPrice = "105";
            break;
        case "室内P4/16扫":
            boardPrice = "56";
            break;
        case "室内P5/16扫":
            boardPrice = "75";
            break;
    }
    $("#partsA2").text(boardPrice); //单元板单价
    $("#partsA3").text(boardPrice *(moduleWidthNumber*moduleHeightNumber));//单元板总价
}
//2.2 第2行数据 -[磁铁]
function getLine2(){
    var num = moduleWidthNumber * moduleHeightNumber; //板总数量
    $("#partsB1").text(num * 4 + 30);   //磁铁数量加30个
    $("#partsB2").text(0.25);   //磁铁数量加30个
    $("#partsB3").text((num * 4 + 30)*0.25);   //磁铁数量加30个

}
//2.3 第3行数据 -[电源]
function getLine3(){
    boardNumber = moduleWidthNumber*moduleHeightNumber; //板子总数量
    //获取单板价格
    powerSource = 0;
    switch(productType)
    {
        case "室内P2/32扫":
            powerSource = "3";
            break;
        case "室内P2.5/32扫":
            powerSource = "3";
            break;
        case "室内P3/32扫":
            powerSource = "6";
            break;
        case "室内P4/16扫":
            powerSource = "6";
            break;
        case "室内P5/16扫":
            powerSource = "6";
            break;
    }
    getPowerNumber =  Math.ceil(boardNumber/powerSource);
    $("#partsC1").text(getPowerNumber); //电源数量
    $("#partsC2").text(45); //电源价格
    $("#partsC3").text(getPowerNumber*45);

}
//2.4 第4行数据 -[发送卡]
function getLine4(){
    num = Math.ceil((WidthSumPixel*HeightSumPixel)/1300000); //发送卡数量
    $("#partsD1").text(num);

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
    $("#partsD2").text(price);  //发送卡价格
    $("#partsD3").text(num*price); //发送卡合计

}
//2.5 第5行数据 -[接收卡]
function getLine5(){
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

    //receptionCard = "";
    if(type=="聚诚"){
        switch(productType)
        {
            case "室内P2/32扫":
                widthNumber = "1";
                heightNumber = "12";
                break;
            case "室内P2.5/32扫":
                widthNumber = "1";
                heightNumber = "12";
                break;
            case "室内P3/32扫":
                widthNumber = "2";
                heightNumber = "12";
                break;
            case "室内P4/16扫":
                widthNumber = "3";
                heightNumber = "12";
                break;
            case "室内P5/16扫":
                widthNumber = "3";
                heightNumber = "12";
                break;
        }

    }else if(type=="诺瓦"){
        switch(productType)
        {
            case "室内P2/32扫":
                widthNumber = "1";
                heightNumber = "6";
                break;
            case "室内P2.5/32扫":
                widthNumber = "1";
                heightNumber = "6";
                break;
            case "室内P3/32扫":
                widthNumber = "2";
                heightNumber = "6";
                break;
            case "室内P4/16扫":
                widthNumber = "3";
                heightNumber = "12";
                break;
            case "室内P5/16扫":
                widthNumber = "3";
                heightNumber = "12";
                break;
        }
    }else if(type=="灵星雨"){
        switch(productType)
        {
            case "室内P2/32扫":
                widthNumber = "1";
                heightNumber = "6";
                break;
            case "室内P2.5/32扫":
                widthNumber = "1";
                heightNumber = "6";
                break;
            case "室内P3/32扫":
                widthNumber = "2";
                heightNumber = "6";
                break;
            case "室内P4/16扫":
                widthNumber = "3";
                heightNumber = "12";
                break;
            case "室内P5/16扫":
                widthNumber = "3";
                heightNumber = "12";
                break;
        }
    }
    receptionCard =  Math.ceil(moduleWidthNumber/widthNumber) * Math.ceil(moduleHeightNumber/heightNumber)

    $("#partsE1").text(receptionCard);
    $("#partsE2").text(price);
    $("#partsE3").text(receptionCard * price);
}
//2.6 第6行数据 -[DIV线]
function getLine6(){
    num = Math.ceil((WidthSumPixel*HeightSumPixel)/1300000); //发送卡数量
    $("#partsF1").text(Math.floor(num/2));   //DIV线数量

    be = 0;
    if( $("#partsF1").text() == "NaN"|| $("#partsF1").text() == 0){
        be = 0;
    }else{
        be =  80;
    }
    $("#partsF2").text(be);        //DIV线价格
    $("#partsF3").text(Math.floor(num/2) * be);        //DIV线价格
}
//2.7 第7行数据 -[型材]
function getLine7(){



    cel =Math.ceil(((screenWidth*2)+(screenHeight*2))/600);  //型材总根数
    $("#partsG1").text(cel);

    var corner = 0;
    switch($("#selectBorder").val()) {

        case "9025常规型材":
            corner = 60;
            break;
        case "9035常规型材":
            corner = 60;
            break;
        case "9040常规型材":
            corner = 60;
            break;
        case "9045常规型材":
            corner = 60;
            break;
        case "10050常规型材":
            corner = 100;
            break;
        case "9045金型材":
            corner = 200;
            break;
        case "10050金型材":
            corner = 200;
            break;
        case "9045银型材":
            corner = 230;
            break;
        case "9060银型材":
            corner = 260;
            break;
        case "10070银型材":
            corner = 330;
            break;
    }


    $("#partsG2").text(corner);

    $("#partsG3").text(cel * corner);


}
//2.8 第8行数据 -[拐角]
function getLine8(){
    $("#partsH1").text(4);  //拐角数量

    var corner = 0;
    switch($("#selectBorder").val()) {

        case "9025常规型材":
            corner = 3;
            break;
        case "9035常规型材":
            corner = 3;
            break;
        case "9040常规型材":
            corner = 3;
            break;
        case "9045常规型材":
            corner = 3;
            break;
        case "10050常规型材":
            corner = 5;
            break;
        case "9045金型材":
            corner = 10;
            break;
        case "10050金型材":
            corner = 10;
            break;
        case "9045银型材":
            corner = 25;
            break;
        case "9060银型材":
            corner = 25;
            break;
        case "10070银型材":
            corner = 25;
            break;
    }
    $("#partsH2").text(corner);  //拐角单价
    $("#partsH3").text(corner*4);  //拐角合计
}
//2.9 第9行数据 -[型材接头]
function getLine9(){
    //screenWidth = 0;        //显示总长度
    //screenHeight = 0;       //显示总高度

    //接头数量/4 向上取整
    var number = (Math.floor(screenWidth/300)*2)+(Math.floor(screenHeight/300)*2);
    $("#partsI1").text(number);  //接头数量

    var corner = 0;
    switch($("#selectBorder").val()) {
        case "9025常规型材":
            corner = 8;
            break;
        case "9035常规型材":
            corner = 8;
            break;
        case "9040常规型材":
            corner = 8;
            break;
        case "9045常规型材":
            corner = 8;
            break;
        case "10050常规型材":
            corner = 10;
            break;
        case "9045金型材":
            corner = 20;
            break;
        case "10050金型材":
            corner = 20;
            break;
        case "9045银型材":
            corner = 30;
            break;
        case "9060银型材":
            corner = 30;
            break;
        case "10070银型材":
            corner = 30;
            break;
    }

    if(number != 0){
        $("#partsI2").text(corner);  //接头价格
    }else{
        $("#partsI2").text(0);  //接头价格
    }
    $("#partsI3").text(corner*number);  //接头合计


}
//2.9 第10行数据 -[方管]
function getLine10(){

    //moduleWidthNumber = 0;  //全局变量 模组长个数A2
    //screenWidth = 0;        //全局变量 显示总长度
    //screenHeight = 0;       //全局变量 显示总高度

    //方管算法: ① 6米/ (显示总高度+3) 得出一根方管可以切几根,
    //          ② 显示总长度 / 3米 得出需要加几根,
    //          ③ 单元板数量加1,再加上中间分隔的几根  / 一根方管切出的根数


    if(screenHeight>600){
        number = (moduleWidthNumber+ Math.floor(600/(screenHeight+3)) +1) * Math.ceil(screenHeight/600);
    }else{
        number = moduleWidthNumber+ Math.floor(600/(screenHeight+3)) +1
    }
    $("#partsJ1").text(number);  //方管数量

    $("#partsJ2").text(25);  //方管单价
    $("#partsJ3").text(number*25);  //方管合计

}
//2.9 第11行数据 -[配电柜]
function getLine11(){

    if(getPowerNumber > 48){
        $("#partsK1").text(1);  //配电柜数量
    }else{
        $("#partsK1").text(0);  //配电柜数量
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

    $("#partsK2").text(xinghao);  //配电柜数量
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
    $("#partsK3").text(number);
    $("#partsK4").text(number);
}
//2.9 第12行数据 -[长排线]
function getLine12(){

    num = Math.ceil(moduleWidthNumber/widthNumber)*moduleHeightNumber+ 30;
    $("#partsL1").text(num );  //插入长排线数量



    ss = $("#partsL1").text();
    var danjia = 0;             //长排线单价
    if(ss > 0){
        danjia = 2.5;
    }else{
        danjia = 0;
    }

    $("#partsL2").text(danjia);  //插入长排线数量
    $("#partsL3").text(num * danjia);  //插入长排线数量
}
//2.9 第13行数据 -[电源线]
function getLine13(){
    $("#partsM1").text(1);
    $("#partsM2").text(240);
    $("#partsM3").text(240);
}
//2.9 第14行数据 -[网线一米]
function getLine14(){
    $("#partsN1").text(receptionCard);
    $("#partsN2").text(5);
    $("#partsN3").text(receptionCard*5);
}
//2.9 第15行数据 -[网线三米]
function getLine15(){
    $("#partsO1").text(1);
    $("#partsO2").text(10);
    $("#partsO3").text(10);
}
//2.9 第16行数据 -[挂件]
function getLine16(){
    //screenWidth = 0;

    number = Math.floor(screenWidth/150)*2;
    if(number == 2){
        number = 4;
    }

    $("#partsP1").text(number);
    $("#partsP2").text(3);
    $("#partsP3").text(number*3);
}
//2.9 第17行数据 -[视频处理器]
function getLine17(){
    //sss = $("#videoProcessing").val();
    $("#partsQ1").text($("#videoProcessing").val());
    $("#partsQ2").text(1);

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

    $("#partsQ3").text(xinghao);
    $("#partsQ4").text(xinghao);
}
//2.9 第18行数据 -[组装加工费]
function getLine18(){

    var v = ((accMul(borderSumWidth,borderSumHeight))/10000).toFixed(1)


    $("#partsR1").text(v);
    $("#partsR2").text(400);
    $("#partsR3").text(Math.ceil(v*400));
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