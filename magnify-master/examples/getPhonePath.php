<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/2/23
 * Time: 14:04
 */

    $arr = glob("img/*"); //返回目录下所有的文件
    foreach($arr as $value){
        @$str.= ('{'.'"src":"'.$value.'"},');
    }

    $nums = substr($str, 0, -1); //将拼接好的字符串最后一个 , 逗号去掉
    $result = "[".$nums."]";
    echo $result;
?>