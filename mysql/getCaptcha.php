<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/24
 * Time: 16:15
 * 生成验证码页面(弃用)
 * 使用前端JQ中的ajax来发送验证码请求
 */

$code = $_POST['phone'];
//随机生成一个六位数随机数作为验证码
$rands = rand(100000,999999);

echo $code;
echo $rands;


//$str = "手机号码为 : "."{$code} "."验证码为 : "."{$rands}";
//echo $str;
//echo "<script>location.href = 'http://api.sms.cn/sms/?ac=send&uid=dingyifeng&pwd=16451e3082ea5e9bbb519309c0f8e91d&template=437713&mobile={$code}&content={\"variable\":\"{$rands}\"}'</script>";

?>