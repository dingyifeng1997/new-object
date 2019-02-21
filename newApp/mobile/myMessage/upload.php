<?php

header("content-type:text/html;charset=utf-8;");


$user = $_POST["username"];

//上传到数据库中
function addData($pathd)
{

    global $user;
    //1.建立连接--使用面向过程方法连接数据库，直接就选择好了数据库
    $conn = mysqli_connect("gxyiovmx.2365.dnstoo.com", "dingyifeng_f", "zxcvbn", "dingyifeng");

    $pathd .="";
    //3.设置客户端和连接字符集;
    mysqli_query($conn, "set names utf8");

    $insertSql = "update business set imgpath='{$pathd}' where username='{$user}'";
    $result = @mysqli_query($conn, $insertSql);

    //6.关闭数据库资源
    mysqli_close($conn);
}



// 表单提交后的处理文件
function addFile()
{

    $source = $_FILES["load"]["tmp_name"];  //源文件
    $target = null; //目标文件
//    echo $source; //获取到的文件

//获取文件上传的类型,这里获取到的是 / 前面的值
    $filetype = @array_shift(explode("/", $_FILES["load"]["type"]));


//获取文件上传的类型,这里获取到文件的全类型
    $number = $_FILES["load"]["type"];  //  png 或 jpg 或 jpeg
    $result = substr($number, strripos($number, "/") + 1); //上传图片的后缀

    function get_password($length = 8)
    {
        $str = substr(md5(time()), 0, $length);//md5加密，time()当前时间戳
        return $str;
    }

    $newFileName = get_password(); //获取随机文件名

    if ($result !== "png" && $result !== "jpg" && $result !== "jpeg") {
        echo "<script>
            alert('图片上传错误 : 可能是图片类型错误 请上传 ( jpg / jpeg / png) 格式的图片');
            location.href = 'heads.html';
          </script>";
    } else {
        // echo "类型正确";

        $target = "imgs/" . $newFileName . "." . $result;  //要传到的文件地址
        $MOM = move_uploaded_file($source, $target);

        $pathd = ("/newApp/mobile/myMessage/imgs/" . $newFileName . "." . $result);  //设置图片绝对路径

        echo $pathd;
        addData($pathd);

        echo "<script>
			alert('上传成功');
			location.href = 'heads.html';
		</script>";

    }


//判断是否上传成功
    if ($MOM) {
        echo "<script>alert('上传成功')</script>";
    } else {
        echo "<script>alert('上传失败')</script>";
    }
}

addFile();

?>