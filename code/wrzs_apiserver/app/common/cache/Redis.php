<?php


namespace app\common\cache;


class Redis
{
    static public $redis = null;
    private function __construct()
    {


    }

    static function redis()
    {
        if (self::$redis) {

            return self::$redis;
        }
        $Redis = new \Redis();

        $Redis->connect('1.14.157.238', 6379);

        $Redis->auth('cbcc5e5d1c6e2859');
        $Redis->select(11);
        self::$redis = $Redis;
        return self::$redis;
    }
}
