<?php


namespace app\module\hardwareCloud;


class serverConfig
{
    //默认对接硬件云配置
    static $WiFIUrl = "https://wdev.wmj.com.cn/deviceApi/";
    static $AppId = "208ac48ff968ab0dc675008d0ded46d1";
    static $AppSecret = "ad45d97d283c518e15b4bda75c887dec";

    static function GetUrl(){
        return self::$WiFIUrl;
    }

    static function GetAppId(){
        return self::$AppId;
    }

    static function GetAppSecret(){
        return self::$AppSecret;
    }

}
