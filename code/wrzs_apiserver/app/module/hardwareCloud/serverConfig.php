<?php


namespace app\module\hardwareCloud;


class serverConfig
{
    static $WiFIUrl = "https://wdev.wmj.com.cn/deviceApi/";
    static $AppId = "1111111111111111111111111111111111";
    static $AppSecret = "99999999999999999999999999999999";

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
