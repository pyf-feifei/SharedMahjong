<?php

namespace app\admin_api\controller\upload;
use app\admin_api\controller\Base;

use think\facade\Db;
use think\facade\Filesystem;
use think\facade\Validate;


class File extends Base {



	public function upload(){

		try{
            // 获取表单上传文件 例如上传了001.jpg
            $file = request()->file('file');
            // 上传到本地服务器
            $savename = \think\facade\Filesystem::disk('public')->putFile( 'file', $file);
		}catch(\Exception $e){

			return json(['status'=>0,'msg'=>$e->getMessage()]);
		}
        $url='/storage/'.$savename;
		return json(['status'=>1,'data'=>$url]);
	}


}

