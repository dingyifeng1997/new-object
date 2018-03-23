/**
 * Created by Administrator on 2018/2/26 0026.
 * 丁毅峰
 * 此脚本是自定义的样式脚本
 */


$("#mytable").SetEditable({
    $addButton: $('#add')
});


//编辑按钮点击特效
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
//下拉按钮点击特效
i = 0;
$(" #dropDown").click(
    function(){
        if(i%2 == 0){
            $("#dropDownSpan1").hide();
            $("#dropDownSpan2").show();
        }else{
            $("#dropDownSpan1").show();
            $("#dropDownSpan2").hide();
        }
        i++;
    }
);

//计算按钮点击
$("#numeration").click(function(){
    zhuanhuan();    //求合计的汉字大写
    sss();
});



//限制只能输入数字,输入不正确就弹出弹框
    function sss(){
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
















//合计小写数字转汉字大写
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



