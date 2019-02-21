<?php
    /**
     * Created by PhpStorm.
     * User: Administrator
     * Date: 2018/7/19
     * Time: 15:16
     * 删除登录cookie
     */
    //设置字符集
    session_start();
    session_destroy();
?>