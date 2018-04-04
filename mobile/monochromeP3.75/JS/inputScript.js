/**
 * Created by Administrator on 2018/3/29 0029.
 */
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
    moduleWidth = "32.0";

    $("#dataA1").text(moduleWidth);
}

//  1.2 填充单元板单板高度
function getSingleHeight(){
    moduleHeight = "16.0";
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
    if($("#selectType").val() == "P10户外双色"){
        WidthPixel = "64";
    }else{
        WidthPixel = "32";
    }
    $("#dataA5").text(WidthPixel);
}

//  1.10 单元板高像素,通过单元板型号switch匹配
function getHeightPixel(){
    HeightPixel = "16";
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
    getLine1();  //第1行数据  单元板
    getLine2();  //第2行数据  控制卡
    getLine3();  //第3行数据  转接板
    getLine4();  //第4行数据  电源
    getLine5();  //第5行数据  型材
    getLine6();  //第6行数据  龙骨
    getLine7();  //第7行数据  型材拐角
    getLine8();  //第8行数据  型材接头
    getLine9();  //第9行数据  短燕尾丝
    getLine10(); //第10行数据 长燕尾丝
    getLine11(); //第11行数据 插头
    getLine12(); //第12行数据 长排线
    getLine13(); //第13行数据 USB延长线
    getLine14(); //第14行数据 挂件膨胀丝
    getLine15(); //第15行数据 包装费
    getLine16(); //第16行数据 组装加工费
}

//2.1 第1行数据 -[单元板]
function getLine1(){
    //获取单元板型号
    var tc = "";


    //获取单板价格
    var boardPrice = 0;
    switch(productType)
    {
        case "P10插灯全户外红":
            boardPrice = "25.3";
            tc = "插灯全红";
            break;
        case "P10插灯半户外红":
            boardPrice = "23.5";
            tc = "插灯半红";
            break;
        case "P10插灯全户外白":
            boardPrice = "32";
            tc = "插灯全白";
            break;
        case "P10插灯半户外白":
            boardPrice = "28";
            tc = "插灯半白";
            break;
        case "P10表贴全户外红":
            boardPrice = "26.8";
            tc = "表贴全红";
            break;
        case "P10表贴半户外红":
            boardPrice = "24.8";
            tc = "表贴半红";
            break;
        case "P10表贴全户外白":
            boardPrice = "32.8";
            tc = "表贴全白";
            break;
        case "P10表贴半户外白":
            boardPrice = "28.8";
            tc = "表贴半白";
            break;
        case "P10户外双色":
            boardPrice = "56";
            tc = "户外双色";
            break;
        case "P10全彩走字":
            boardPrice = "58";
            tc = "全彩走字";
            break;
    }
    $(" #headline span").html(tc);
    $("#partsA1").html(tc +"单元板");  //获取单元板型号
    var number = accMul(moduleWidthNumber,moduleHeightNumber) //获取单元板数量

    $("#partsA2").html(number);
    $("#partsA3").text(boardPrice); //单元板单价
    $("#partsA4").text(accMul(boardPrice,number));//单元板总价
}
//2.2 第2行数据 -[控制卡]
function getLine2(){
    var IOType = $("#selectIO").val();  //选择的控制方式
    var number = 0;                     //控制卡数量
    $("#partsB1").text(IOType);  //控制方式
    if($("#selectIO").val() =="中航U盘卡"){
        number = 1;
    }else if($("#selectIO").val() =="中航wifi卡"){
        number = 1;
    }else if($("#selectIO").val() =="中航网口卡"){
        number = 1;
    }





    //控制方式判断
    var w = WidthSumPixel;  //长像素点
    var h = HeightSumPixel; //高像素点
    var type = "";          //最终找到的型号
    var price = 0;          //控制卡单价

    //U盘系列变量
    var UN = w<=640 && h<=16 || w <= 320 && h<= 32 ;
    var UM = w<=1024 && h<=16 || w <= 512 && h<= 32 ;
    var UC =  w<=1536 && h<=16 || w <= 768 && h<= 32 || w <= 512 && h<= 48 ;
    var U0 =  w<=2048 && h<=16 || w <= 1024 && h<= 32 ;
    var U1 =  w<=3072 && h<=16 || w <= 1536 && h<= 32 || w <= 1024 && h<= 48 ;
    var UF =  w<=2048 && h<=16 || w <= 1024 && h<= 32 || w <= 680 && h<= 48 || w <= 512 && h<= 64;
    var U2 =  w<=4096 && h<=16 || w <= 2048 && h<= 32 || w <= 1360 && h<= 48 ||w <= 1024 && h<= 64;
    var U3 =  w <= 2048 && h<= 32 || w <= 1360 && h<= 48 ||w <= 1024 && h<= 64 ||w <= 816 && h<= 80||w <= 680 && h<= 96 ||w <= 512 && h<= 128;
    var U4 =  w<=4096 && h<=16 || w <= 3200 && h<= 32 || w <= 2128 && h<= 48 ||w <= 1600 && h<= 64 ||w <= 1280 && h<= 80||w <= 1064 && h<= 96 ||w <= 800 && h<= 128;
    var U5 =  w <= 4096 && h<= 32 || w <= 3008 && h<= 48 ||w <= 2560 && h<= 64 ||w <= 2048 && h<= 80||w <= 1704 && h<= 96 ||w <= 1280 && h<= 128||w <= 1136 && h<= 144||w <= 1024 && h<= 160||w <= 928 && h<= 176||w <= 848 && h<= 192||w <= 784 && h<= 208||w <= 728 && h<= 224||w <= 680 && h<= 240||w <= 640 && h<= 256;

    var U6 = w <= 4096 && h<= 48 ||w <= 4096 && h<= 64 ||w <= 4096 && h<= 80||w <= 4096 && h<= 96 ||w <= 4096 && h<= 128||w <= 3640 && h<= 144||w <= 3272 && h<= 160||w <= 2976 && h<= 176||w <= 2728 && h<= 192||w <= 2520 && h<= 208||w <= 2336 && h<= 224||w <= 2184 && h<= 240||w <= 2048 && h<= 256;

    var U7 = w <= 1816 && h<= 288||w <= 1632 && h<= 320||w <= 1488 && h<= 352||w <= 1360 && h<= 384||w <= 1256 && h<= 416||w <= 1168 && h<= 448||w <= 1088 && h<= 480||w <= 1024 && h<= 512;

    var U8 = w <= 8192 && h<= 32 ||w <= 8192 && h<= 48 ||w <= 8192 && h<= 64 ||w <= 8192 && h<= 80||w <= 8192 && h<= 96 ||w <= 8192 && h<= 128||w <= 6552 && h<= 144||w <= 6552 && h<= 160||w <= 5456 && h<= 176||w <= 5456 && h<= 192||w <= 5040 && h<= 208||w <= 4680 && h<= 224||w <= 4368 && h<= 240||w <= 4096 && h<= 256||w <= 3640 && h<= 288||w <= 3272 && h<= 320||w <= 2976 && h<= 352||w <= 2728 && h<= 384||w <= 2520 && h<= 416||w <= 2336 && h<= 448||w <= 2184 && h<= 480||w <= 2048 && h<= 512;


    //wifi系列变量

    var WN = w<=640 && h<=16 || w <= 320 && h<= 32 ;
    var WM = w<=1024 && h<=16 || w <= 512 && h<= 32 ;
    var W0 =  w<=2048 && h<=16 || w <= 1024 && h<= 32 ;
    var W1 =  w<=3072 && h<=16 || w <= 1536 && h<= 32 || w <= 1024 && h<= 48 ;
    var W2 =  w<=4096 && h<=16 || w <= 2048 && h<= 32 || w <= 1360 && h<= 48 ||w <= 1024 && h<= 64;
    var W3 =  w <= 2048 && h<= 32 || w <= 1360 && h<= 48 ||w <= 1024 && h<= 64 ||w <= 816 && h<= 80||w <= 680 && h<= 96 ||w <= 512 && h<= 128;
    var W4 =  w<=4096 && h<=16 || w <= 3200 && h<= 32 || w <= 2128 && h<= 48 ||w <= 1600 && h<= 64 ||w <= 1280 && h<= 80||w <= 1064 && h<= 96 ||w <= 800 && h<= 128;
    var W5 =  w <= 4096 && h<= 32 || w <= 3008 && h<= 48 ||w <= 2560 && h<= 64 ||w <= 2048 && h<= 80||w <= 1704 && h<= 96 ||w <= 1280 && h<= 128||w <= 1136 && h<= 144||w <= 1024 && h<= 160||w <= 928 && h<= 176||w <= 848 && h<= 192||w <= 784 && h<= 208||w <= 728 && h<= 224||w <= 680 && h<= 240||w <= 640 && h<= 256;

    var W6 = w <= 4096 && h<= 48 ||w <= 4096 && h<= 64 ||w <= 4096 && h<= 80||w <= 4096 && h<= 96 ||w <= 4096 && h<= 128||w <= 3640 && h<= 144||w <= 3272 && h<= 160||w <= 2976 && h<= 176||w <= 2728 && h<= 192||w <= 2520 && h<= 208||w <= 2336 && h<= 224||w <= 2184 && h<= 240||w <= 2048 && h<= 256;

    var W7 = w <= 1816 && h<= 288||w <= 1632 && h<= 320||w <= 1488 && h<= 352||w <= 1360 && h<= 384||w <= 1256 && h<= 416||w <= 1168 && h<= 448||w <= 1088 && h<= 480||w <= 1024 && h<= 512;


    //网口系列变量

    var E1 =  w<=3072 && h<=16 || w <= 1536 && h<= 32 || w <= 1024 && h<= 48 ;
    var E3 =  w<=4096 && h<=16 ||w <= 2048 && h<= 32 || w <= 1360 && h<= 48 ||w <= 1024 && h<= 64 ||w <= 816 && h<= 80||w <= 680 && h<= 96 ||w <= 512 && h<= 128;

    var E5 =  w <= 4096 && h<= 32 || w <= 3008 && h<= 48 ||w <= 2560 && h<= 64 ||w <= 2048 && h<= 80||w <= 1704 && h<= 96 ||w <= 1280 && h<= 128||w <= 1136 && h<= 144||w <= 1024 && h<= 160||w <= 928 && h<= 176||w <= 848 && h<= 192||w <= 784 && h<= 208||w <= 728 && h<= 224||w <= 680 && h<= 240||w <= 640 && h<= 256;

    var E6 = w <= 4096 && h<= 48 ||w <= 4096 && h<= 64 ||w <= 4096 && h<= 80||w <= 4096 && h<= 96 ||w <= 4096 && h<= 128||w <= 3640 && h<= 144||w <= 3272 && h<= 160||w <= 2976 && h<= 176||w <= 2728 && h<= 192||w <= 2520 && h<= 208||w <= 2336 && h<= 224||w <= 2184 && h<= 240||w <= 2048 && h<= 256;

    var E7 = w <= 1816 && h<= 288||w <= 1632 && h<= 320||w <= 1488 && h<= 352||w <= 1360 && h<= 384||w <= 1256 && h<= 416||w <= 1168 && h<= 448||w <= 1088 && h<= 480||w <= 1024 && h<= 512;
    var E8 = w <= 8192 && h<= 32 ||w <= 8192 && h<= 48 ||w <= 8192 && h<= 64 ||w <= 8192 && h<= 80||w <= 8192 && h<= 96 ||w <= 8192 && h<= 128||w <= 6552 && h<= 144||w <= 6552 && h<= 160||w <= 5456 && h<= 176||w <= 5456 && h<= 192||w <= 5040 && h<= 208||w <= 4680 && h<= 224||w <= 4368 && h<= 240||w <= 4096 && h<= 256||w <= 3640 && h<= 288||w <= 3272 && h<= 320||w <= 2976 && h<= 352||w <= 2728 && h<= 384||w <= 2520 && h<= 416||w <= 2336 && h<= 448||w <= 2184 && h<= 480||w <= 2048 && h<= 512;

    //灵信全彩门头U盘变量
    var X1U = h<= 64 ;
    var X2U = h<= 128;
    var X3 = h<= 192;
    var X5 = h<= 384 || h<= 480;

    //灵信全彩门头网口变量
    var Q1 =  h<= 128 ;

    switch(IOType){
        case "中航U盘卡":
            f1();
            break;
        case "中航wifi卡":
            f2();
            break;
        case "中航网口卡":
            f3();
            break;
        case "灵信全彩门头异步U盘卡":
            f4();
            break;
        case "灵信全彩门头同步网口卡":
            f5();
            break;
    }

    function f1(){
        if (UN) {
            type = "ZH-UN";
            price = 10;
        } else if (UM) {
            type = "ZH-UM";
            price = 25;
        }else if(UC){
            type = "ZH-UC";
            price = 39;
        }else if(U0){
            type = "ZH-U0";
            price = 39;
        }else if(U1){
            type = "ZH-U1";
            price = 55;
        }else if(UF){
            type = "ZH-UF";
            price = 50;
        }else if(U2){
            type = "ZH-U2";
            price = 78;
        }else if(U3){
            type = "ZH-U3";
            price = 88;
        }else if(U4){
            type = "ZH-U4";
            price = 95;
        }else if(U5){
            type = "ZH-U5";
            price = 130;
        }else if(U6){
            type = "ZH-U6";
            price = 240;
        }else if(U7){
            type = "ZH-U7";
            price = 280;
        }else if(U8){
            type = "ZH-U8";
            price = 300;
        }
        else{
            type = "点数超载";
            price = 0;
        }

    }
    function f2(){
        if(WN){
            type = "ZH-WN";
            price = 39;
        }else if(WM) {
            type = "ZH-WM";
            price = 65;
        }else if(W0){
            type = "ZH-W0";
            price = 78;
        }else if(W1){
            type = "ZH-W1";
            price = 88;
        }else if(W2){
            type = "ZH-W2";
            price = 110;
        }else if(W3){
            type = "ZH-W3";
            price = 150;
        }else if(W4){
            type = "ZH-W4";
            price = 180;
        }else if(W5){
            type = "ZH-W5";
            price = 230;
        }else if(W6){
            type = "ZH-W6";
            price = 320;
        }else if(W7){
            type = "ZH-W7";
            price = 350;
        }
        else{
            type = "点数超载";
            price = 0;
        }
    }
    function f3(){
        if(E1){
            type = "ZH-E1";
            price = 85;
        }else if(E3) {
            type = "ZH-E3";
            price = 120;
        }else if(E5){
            type = "ZH-E5";
            price = 180;
        }else if(E6){
            type = "ZH-E6";
            price = 280;
        }else if(E7){
            type = "ZH-E7";
            price = 320;
        }else if(E8){
            type = "ZH-E8";
            price = 380;
        }
        else{
            type = "点数超载";
            price = 0;
        }
    }





    function f4(){
        if(X1U){
            type = "灵信X1U";
            price = 150;
            number = Math.ceil(w/1024);
        }else if(X2U) {
            type = "灵信X2U";
            price = 260;
            number = Math.ceil(w/1024);
        }else if(X3){
            type = "灵信X3";
            price = 800;
            number = Math.ceil(w/512);
        }else if(X5){
            type = "灵信X5";
            price = 1600;
            number = Math.ceil(w/2880);
        }else{
            type = "点数超载";
            price = 0;
            number = 0;
        }
    }
    function f5(){
        if(Q1){
            type = "灵信Q1";
            price = 200;
            number = Math.ceil(w/640);
        }else{
            type = "点数超载";
            price = 0;
            number = 0;
        }

    }

    $("#partsB2").text(number);                     //设置数量
    $("#partsB3").text(type);                      //设置控制卡型号
    $("#partsB4").text(price);                          //控制卡单价
    $("#partsB5").text(accMul(price,number));                          //控制卡合计

}
//2.3 第3行数据 -[转接板]
function getLine3(){
    var getPowerNumber = 0;

    if(moduleHeightNumber>16){
        getPowerNumber = 2;
        $("#partsC1").text(getPowerNumber); //转接板数量
    }else if(moduleHeightNumber>8){
        getPowerNumber = 1;
        $("#partsC1").text(getPowerNumber); //转接板数量
    }else{
        $("#partsC1").text(0); //转接板数量
    }

    if(getPowerNumber == 0){
        $("#partsC2").text(0); //转接板价格
    }else{
        $("#partsC2").text(25); //转接板价格
    }

    $("#partsC3").text(accMul(getPowerNumber,25));
}
//2.4 第4行数据 -[电源]
function getLine4(){

    var banNumber = moduleWidthNumber* moduleHeightNumber;//单元板总数
    getPowerNumber  = 0;  //电源数量
    var price = 0;

    if($("#selectType").val() == "P10户外双色"){
        getPowerNumber = Math.ceil(banNumber/6);
        price = 33;
    }else if($("#selectType").val() == "P10全彩走字"){
        getPowerNumber = Math.ceil(banNumber/6);
        price = 45;
    }else{
        getPowerNumber = Math.ceil(banNumber/10);
        price = 33;
    }
    $("#partsD1").text(getPowerNumber);
    $("#partsD2").text(price);            //电源价格
    $("#partsD3").text(accMul(getPowerNumber,price)); //发送卡合计
}
//2.5 第5行数据 -[型材]
function getLine5(){
    var cel =Math.ceil(((screenWidth*2)+(screenHeight*2))/600);             //型材总根数
    $("#partsE1").text(cel);

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

    $("#partsE2").text(corner);
    $("#partsE3").text(accMul(cel,corner));

}
//2.6 第6行数据 -[龙骨]
function getLine6(){
    var number = 0;     //龙骨根数
    var price = 0;      //龙骨价格
    var name = "";
    //如果是五排高以内用龙骨
    if(moduleHeightNumber<=5){
        number = moduleWidthNumber+1+Math.floor(screenWidth/300);
        switch(moduleHeightNumber){
            case 1:
                price = 1;
                break;
            case 2:
                price = 2;
                break;
            case 3:
                price = 3;
                break;
            case 4:
                price = 4;
                break;
            case 5:
                price = 5;
                break;
        }
        name = "龙骨";

    }else{
        //如果是五排高以外用方管
        if(screenHeight>600){
            number = Math.ceil(screenHeight/600) * Math.ceil((moduleWidthNumber+1+Math.floor(screenWidth/300))/(Math.floor(600/(screenHeight+3))));
        }else{
            number = Math.ceil((moduleWidthNumber+1+Math.floor(screenWidth/300))/(Math.floor(600/(screenHeight+3))));
        }
        name = "方管";
        price = 25;
    }


    $("#partsF1").text(name);               //名称
    $("#partsF2").text(number);             //龙骨数量
    $("#partsF3").text(price);              //龙骨价格
    $("#partsF4").text(accMul(price,number));       //龙骨合计

}
//2.7 第7行数据 -[型材拐角]
function getLine7(){
    $("#partsG1").text(4);  //拐角数量

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
    $("#partsG2").text(corner);  //拐角单价
    $("#partsG3").text(accMul(corner,4));  //拐角合计


}
//2.8 第8行数据 -[型材接头]
function getLine8(){
    //接头数量/4 向上取整
    var number = (Math.floor(screenWidth/300)*2)+(Math.floor(screenHeight/300)*2);
    $("#partsH1").text(number);  //接头数量
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
        $("#partsH2").text(corner);  //接头价格
    }else{
        $("#partsH2").text(0);  //接头价格
    }
    $("#partsH3").text(corner*number);  //接头合计
}
//2.9 第9行数据 -[短燕尾丝]
function getLine9(){
    var number = 0;
    if(moduleHeightNumber <= 5){
        number = (moduleWidthNumber+1+Math.floor(screenWidth/300))*6;
    }else{
        number = 24;
    }

    $("#partsI1").text(number+30);          //短燕尾丝数量
    $("#partsI2").text(0.03);       //短燕尾丝单价
    $("#partsI3").text(accMul(number,0.03));//短燕尾丝合计
}

//2.10 第10行数据 -[长燕尾丝]
function getLine10(){
    if(moduleHeightNumber > 5){
        number = (moduleWidthNumber+1+Math.floor(screenWidth/300))*6;
    }else{
        number = 0;
    }

    $("#partsJ1").text(number+30);          //长燕尾丝数量
    $("#partsJ2").text(0.2);                //长燕尾丝单价
    $("#partsJ3").text(accMul($("#partsJ1").text(),0.2)); //长燕尾丝合计
}
//2.11 第11行数据 -[插头]
function getLine11(){

    $("#partsK1").text(1 );  //接头数量
    $("#partsK2").text(2);   //接头单价
    $("#partsK3").text(2);   //接头合计
}
//2.12 第12行数据 -[长排线]
function getLine12(){
    $("#partsL1").text(moduleHeightNumber);
    $("#partsL2").text(2);
    $("#partsL3").text(accMul(moduleHeightNumber,2));
}
//2.13 第13行数据 -[USB延长线]
function getLine13(){
    $("#partsM1").text(1);
    $("#partsM2").text(10);
    $("#partsM3").text(10);
}
//2.14 第14行数据 -[挂件膨胀丝]
function getLine14(){

    //挂件数量
    var number = accMul(Math.floor(screenWidth/150),2);
    if(number < 4){
        number = 4;
    }
    $("#partsN1").text(number);
    $("#partsN2").text(5);
    $("#partsN3").text(accMul(number,5));
}
//2.15 第15行数据 -[包装费]
function getLine15(){
    $("#partsO1").text(allSquare);
    $("#partsO2").text(15);
    $("#partsO3").text(accMul(allSquare,15));
}
//2.16 第16行数据 -[组装加工费]
function getLine16(){
    $("#partsP1").text(allSquare);
    $("#partsP2").text(50);
    $("#partsP3").text(accMul(allSquare,50));
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