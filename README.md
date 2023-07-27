# 无人值守共享空间共享茶室自助棋牌室源码
### 源代码小复杂，需要熟悉Thinkphp、Vue、HBuilderX、SuperVisord等才能搞定，硬件购买地址 https://weimenjin.taobao.com （门禁机、低功耗实时连接wifi锁、空开断路器、云喇叭等）

![输入图片说明](images/image.png)

### 一、摘要
本系统适用于无人值守场景（茶室、棋牌室、运动场馆），主要功能流程为:顾客小程序下单预约—-自助开门—-开电—-云喇叭语音提醒。系统还考虑了加盟和商城，小复杂，其代码分为5个端：
![输入图片说明](images/image1.png)
四个端需要部署在服务器，如：
![输入图片说明](images/image2.png)
系统使用了Supervisor对房间和订单自动化管理
![输入图片说明](images/image3.png)

### 二、系统结构
1.接口服务端,部署案例：https://was.weishequ.com ;无UI界面。
2.系统管理端,部署案例：https://wma.weishequ.com
![输入图片说明](images/image4.png)
![输入图片说明](images/image5.png)

3.门店管理端,部署案例：https://wsm.weishequ.com 用户名wsmadmin 密码wsmadmin（点击图片放大查看）
![输入图片说明](images/image6.png)
![输入图片说明](images/image7.png)
![输入图片说明](images/image8.png)
![输入图片说明](images/image9.png)

4.手机管理端,部署案例：https://wmm.weishequ.com
![输入图片说明](images/image10.png)
![输入图片说明](images/image11.png)
5.小程序端,部署案例：智云共享 小程序，扫码体验
![输入图片说明](images/image12.png)
![输入图片说明](images/image13.png)
![输入图片说明](images/image14.png)
![输入图片说明](images/image15.png)
![输入图片说明](images/image16.png)
![输入图片说明](images/image17.png)
![输入图片说明](images/image18.png)
![输入图片说明](images/image19.png)
![输入图片说明](images/image20.png)
![输入图片说明](images/image21.png)
![输入图片说明](images/image22.png)
![输入图片说明](images/image23.png)
![输入图片说明](images/image24.png)
### 三、 硬件云平台地址 https://wdev.wmj.com.cn/ ，手机号登录后获取API文档
### 四、数据库sql在目录下，配置文件为目录下.env文件

`APP_DEBUG = true
[APP]
DEFAULT_TIMEZONE = Asia/Shanghai
[DATABASE]
TYPE = mysql
HOSTNAME =127.0.0.1
DATABASE = wrzs
USERNAME = wrzs
PASSWORD = 1111111111111111
HOSTPORT = 3306
CHARSET = utf8mb4
DEBUG = true
prefix = kg_
[LANG]
default_lang = zh-cn
`
### 五、硬件配置文件

app\module\hardwareCloud\serverConfig.php
#### 默认对接硬件云配置
`AppId 208ac48ff968ab0dc675008d0ded46d1
AppSecret ad45d97d283c518e15b4bda75c887dec
`
#### 测试设备序列号
`1.不锈钢wifi门锁     W89601EC6A7
2.WiFi版门禁控制器   W761790BC7F
3.空开断路器 W71F9783520
4.云喇叭 W7022621597
`
#### 适配硬件购买链接
##### 1.不锈钢wifi门锁 https://item.taobao.com/item.htm?id=707688264083

##### 2.WiFi版门禁控制器  https://item.taobao.com/item.htm?id=620408378542

##### 3.空开断路器 https://item.taobao.com/item.htm?id=717243906521

##### 4.云喇叭 https://item.taobao.com/item.htm?id=719589244787