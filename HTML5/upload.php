<?php

header("content-type:text/html;charset=utf-8;");

/*
 *  表单提交后的处理文件
 **/
$source = $_FILES["load"]["tmp_name"];  //源文件
$target = null; //目标文件

//获取文件上传的类型,这里获取到的是 / 前面的值
$filetype = @array_shift(explode("/", $_FILES["load"]["type"]));


//获取文件上传的类型,这里获取到文件的全类型
$number = $_FILES["load"]["type"];  //  png 或 jpg 或 jpeg
$result = substr($number,strripos($number,"/")+1); //上传图片的后缀


function get_password( $length = 8 )
{
    $str = substr(md5(time()), 0, $length);//md5加密，time()当前时间戳
    return $str;
}

$newFileName = get_password();
echo $result;

if($result !== "png" && $result !== "jpg" && $result !== "jpeg"){
    echo "类型错误";
}else{
    echo "类型正确";
    $target = "imgs/" . $newFileName .".". $result;  //修改目标文件地址
    $MOM = move_uploaded_file($source, $target);

}


//判断是否上传成功
if ($MOM) {
    echo "<script>alert('上传成功')</script>";
} else {
    echo "<script>alert('上传失败')</script>";
}
?>