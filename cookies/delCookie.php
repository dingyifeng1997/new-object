<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/19
 * Time: 15:16
 * 删除登录cookie
 */
//设置字符集
header("content-type:text/html;charset=utf-8;");


//定点删除
setcookie('name',"",time()-1000,"/");


//遍历删除
//foreach($_COOKIE as $key=>$val){
//    setcookie($key,"",time()-10000,"/");
//}

echo "全部删除成功";
?>