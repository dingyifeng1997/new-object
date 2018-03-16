/**
 *
 * 自定义的逻辑脚本
 * 此脚本是表单内数据的自计算逻辑
 */


//全局变量
  //输入型号
productType = 0;      //这里是全局变量 选择型号
inputWidth = 0;        //这里是全局变量 输入长度
inputHeight = 0;        //这里是全局变量 输入长度

//  1.1 单元板长度适配
function getSingleWidth(){
    val = 0;
    switch(productType)
    {
        case "室内P2/32扫":
            val = "25.6";
            break;
        case "室内P2.5/32扫":
            val = "32.0";
            break;
        case "室内P3/32扫":
            val = "19.2";
            break;
        case "室内P3.91/16扫":
            val = "25.0";
            break;
        case "室内P4/16扫":
            val = "25.6";
            break;
        case "室内P4.81/13扫":
            val = "25.0";
            break;
        case "室内P5/16扫":
            val = "32.0";
            break;
    }
    $("#dataX1").text(val);

}


//  1.2 单元板高度适配
function getSingleHeight(){
    val = 0;
    switch(productType)
    {
        case "室内P2/32扫":
            val = "12.8";
            break;
        case "室内P2.5/32扫":
            val = "16.0";
            break;
        case "室内P3/32扫":
            val = "19.2";
            break;
        case "室内P3.91/16扫":
            val = "25.0";
            break;
        case "室内P4/16扫":
            val = "12.8";
            break;
        case "室内P4.81/13扫":
            val = "25.0";
            break;
        case "室内P5/16扫":
            val = "16.0";
            break;
    }
    $("#dataY1").text(val);
}

//  1.3 单元板长个数,通过输入框四舍五入获得
function getWidthNumber(){
    widthnum = $("#inputWidth").val();   //获取输入框的值
    SingleWidth = $("#dataX1").text();  //获取长度值
    $("#dataX2").text(Math.round(widthnum/SingleWidth));

}
//  1.4 单元板高个数,通过输入框四舍五入获得
function getHeightNumber(){
    heightnum = $("#inputHeight").val();   //获取输入框的值
    SingleHeight = $("#dataY1").text();  //获取长度值
    $("#dataY2").text(Math.round(heightnum/SingleHeight));
}
//  1.5 显示总长度,通过长个数乘以单板长度获得
function getScreenWidth(){
    inputWidth = $("#inputWidth").val();   //获取输入框的值
    widthnum = Math.round(inputWidth/$("#dataX1").text())    //板子长个数
    $("#dataX3").text(widthnum * $("#dataX1").text()); //显示总长度

}
//  1.6 显示总高度,通过高个数乘以单板高度获得
function getScreenHeight(){
    inputHeight = $("#inputHeight").val();   //获取输入框的值
    heightnum = Math.round(inputHeight/$("#dataY1").text())    //板子高个数
    $("#dataY3").text(heightnum * $("#dataY1").text());
}
//  1.7 加边框后长度,通过显示总长度加上10cm获得
function getOverWdith(){
    val = 0;
    switch($("#selectBorder").val()) {
        case "9045常规型材":
            val = "9";
            break;
        case "9025常规型材":
            val = "5";
            break;
        case "10050常规型材":
            val = "10";
            break;
        case "9045金型材":
            val = "9";
            break;
        case "9025金型材":
            val = "5";
            break;
        case "10050金型材":
            val = "10";
            break;
        case "9045银型材":
            val = "9";
            break;
        case "9025银型材":
            val = "5";
            break;
        case "10050银型材":
            val = "10";
            break;
    }
    $("#dataX4").text(val);
}
//  1.8 加边框后高度,通过显示总高度加上10cm获得

//  1.9 单元板长像素,通过单元板型号switch匹配

//  1.10 单元板高像素,通过单元板型号switch匹配

//  1.11 显示长总像素,通过单元板长个数和长像素获得
//  1.12 显示高总像素,通过单元板高个数和高像素获得
//  1.13 总千瓦数,最后点击提交计算后根据电源数量生成
//  1.14 总平方数,根据加边框后长度和加边框后高度生成

