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
WidthPixel = 0;         //全局变量 单板长线束
HeightPixel = 0;



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

    $("#dataA5").text(moduleWidth);
}
//  1.10 单元板高像素,通过单元板型号switch匹配
function getHeightPixel(){

}
//  1.11 显示长总像素,通过单元板长个数和长像素获得
function getWidthSumPixel(){

}
//  1.12 显示高总像素,通过单元板高个数和高像素获得
function getHeightSumPixel(){

}
//  1.13 总千瓦数,最后点击提交计算后根据电源数量生成
//  1.14 总平方数,根据加边框后长度和加边框后高度生成




//两个浮点数相乘获取准确位数小数
function accMul(arg1,arg2){
    var m=0,s1=arg1.toString(),
        s2=arg2.toString();
    try{
        m+=s1.split(".")[1].length}catch(e){}
    try{
        m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
}
