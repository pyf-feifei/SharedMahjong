<?php


namespace app\common\kg\src\watch;


use app\common\cache\Redis;
use app\common\kg\src\cache\MyCustomCache;
use EasyWeChat\Factory;
use think\facade\Db;

class Watch
{
    function miniProgram()
    {
        $config = [
            'app_id' => 'wx1111111111111111',
            'secret' => '1111111111111111111111111111111',

        ];

        return  Factory::miniProgram($config);
    }


    function payment(){
        $config = [
            // 必要配置
            'app_id'             => '1111111111111',
            'mch_id'             => '1111111111',
            'key'                => '111111111111111111111111111111',   // API 密钥

            // 如需使用敏感接口（如退款、发送红包等）需要配置 API 证书路径(登录商户平台下载 API 证书)
            'cert_path'          => '/www/wwwroot/was.weishequ.com/wrzs_apiserver/pay/wechat/apiclient_cert.pem', // XXX: 绝对路径！！！！
            'key_path'           => '/www/wwwroot/was.weishequ.com/wrzs_apiserver/pay/wechat/apiclient_key.pem',      // XXX: 绝对路径！！！！

            'notify_url' => 'https://was.weishequ.com/api/pay.Notify/index',  // 异步通知地址
        ];


        return Factory::payment($config);
    }
}
