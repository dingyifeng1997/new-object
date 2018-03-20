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
borderWidth = 0;        //全局变量 加边框后总长度
borderHeight = 0;       //全局变量 加边框后总高度
WidthPixel = 0;         //全局变量 单板长像素
HeightPixel = 0;        //全局变量 单板高像素
WidthSumPixel = 0;      //全局变量 显示屏长总像素
HeightSumPixel = 0;     //全局变量 显示屏高总像素

getPowerNumber = 0;//全局变量 电源数量 (因为要根据电源数量获取总千瓦数)



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
        case "室内P3.91/16扫":
            moduleWidth = "25.0";
            break;
        case "室内P4/16扫":
            moduleWidth = "25.6";
            break;
        case "室内P4.81/13扫":
            moduleWidth = "25.0";
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
        case "室内P3.91/16扫":
            moduleHeight = "25.0";
            break;
        case "室内P4/16扫":
            moduleHeight = "12.8";
            break;
        case "室内P4.81/13扫":
            moduleHeight = "25.0";
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
    switch($("#selectBorder").val()) {
        case "9045常规型材":
            borderWidth = 9;
            break;
        case "9025常规型材":
            borderWidth = 5;
            break;
        case "10050常规型材":
            borderWidth = 10;
            break;
        case "9045金型材":
            borderWidth = 9;
            break;
        case "9025金型材":
            borderWidth = 5;
            break;
        case "10050金型材":
            borderWidth = 10;
            break;
        case "9045银型材":
            borderWidth = 9;
            break;
        case "9025银型材":
            borderWidth = 5;
            break;
        case "10050银型材":
            borderWidth = 10;
            break;
    }
    $("#dataA4").text(borderWidth + screenWidth);
}
//  1.8 加边框后高度,通过显示总高度加上10cm获得
function getOverHeight(){
    switch($("#selectBorder").val()) {
        case "9045常规型材":
            borderHeight = 9;
            break;
        case "9025常规型材":
            borderHeight = 5;
            break;
        case "10050常规型材":
            borderHeight = 10;
            break;
        case "9045金型材":
            borderHeight = 9;
            break;
        case "9025金型材":
            borderHeight = 5;
            break;
        case "10050金型材":
            borderHeight = 10;
            break;
        case "9045银型材":
            borderHeight = 9;
            break;
        case "9025银型材":
            borderHeight = 5;
            break;
        case "10050银型材":
            borderHeight = 10;
            break;
    }
    $("#dataB4").text(borderHeight + screenHeight);
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
        case "室内P3.91/16扫":
            WidthPixel = "64";
            break;
        case "室内P4/16扫":
            WidthPixel = "64";
            break;
        case "室内P4.81/13扫":
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
        case "室内P3.91/16扫":
            HeightPixel = "64";
            break;
        case "室内P4/16扫":
            HeightPixel = "32";
            break;
        case "室内P4.81/13扫":
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

//  1.14 总平方数,根据加边框后长度和加边框后高度生成


//   2 根据数据表获取材料表的所有内容
function getDataList(){
    //第一行数据
    getLine1();
    gitLine2();
    gitLine3();
}
//2.1第一行数据 -[单元板]
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
        case "室内P3.91/16扫":
            boardPrice = "170";
            break;
        case "室内P4/16扫":
            boardPrice = "56";
            break;
        case "室内P4.81/13扫":
            boardPrice = "160";
            break;
        case "室内P5/16扫":
            boardPrice = "75";
            break;
    }
    $("#partsA2").text(boardPrice); //单元板单价
    $("#partsA3").text(boardPrice *(moduleWidthNumber*moduleHeightNumber));//单元板总价
}

//2.2第二行数据 -[磁铁]
function gitLine2(){
    var num = moduleWidthNumber * moduleHeightNumber; //板总数量
    $("#partsB1").text(num * 4 + 30);   //磁铁数量加30个
    $("#partsB2").text(0.25);   //磁铁数量加30个
    $("#partsB3").text((num * 4 + 30)*0.25);   //磁铁数量加30个

}
//2.3第三行数据 -[电源]
function gitLine3(){
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
            powerSource = "3";
            break;
        case "室内P3.91/16扫":
            powerSource = "6";
            break;
        case "室内P4/16扫":
            powerSource = "6";
            break;
        case "室内P4.81/13扫":
            powerSource = "6";
            break;
        case "室内P5/16扫":
            powerSource = "6";
            break;
    }
    var num =  Math.ceil(boardNumber/powerSource);
    $("#partsC1").text(num); //电源数量
    $("#partsC2").text(45); //电源价格
    $("#partsC3").text(num*45);

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
