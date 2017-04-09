### 学习目标
----
## 1. redis特点以及安装
   + 数据结构丰富(字符串 链表 哈希结构 集合 有序集合)
   + 持久化
   + 支持简单事务
   + 主从配置方便

	 数据库的安装与配置
	 + redis-benchmark redis性能测试工具
	 + redis-check-aof 检查aof日志的工具
	 + redis-check-dump 检查rbd日志的工具
	 + redis-cli 连接用的客户端
	 + redis-server redis的服务进程
	 + 启动 redis-server ./redis.conf  连接 redis-cli  使用 1)set site www.baidu.com 2)get site
	 + 配置文件: redis以后台进程的方式运行 daemonize yes 
	 + 设置redis密码： config set requirepass test123
       查询密码：  config get requirepass
       密码验证：    auth test123
    
    redis获取get配置数据项
	
        CONFIG GET CONFIG_SETTING_NAME
        config get loglevel
            1) "loglevel"
            2) "notice"
        config get * #获取所有的配置项
    
    redis设置set配置数据项
			
        CONFIG SET CONFIG_SETTING_NAME NEW_CONFIG_VALUE
        config set loglevel "notice"
	
	redis配置项conf文件说明
	1. Redis默认不是以守护进程的方式运行，可以通过该配置项修改，使用yes启用守护进程 daemonize no
	2. 当Redis以守护进程方式运行时，Redis默认把pid写入/var/run/redis.pid文件，可以通过pidfile指定
	    pidfile /var/run/redis.pid
	3. 指定Redis监听端口，默认端口为6379
	    port 6379
	4. 绑定的主机地址
	    bind 127.0.0.1
	5. 当 客户端闲置多长时间后关闭连接，如果指定为0，表示关闭该功能
	    timeout 300
	6. 指定日志记录级别，Redis总共支持四个级别：debug、verbose、notice、warning，默认为verbose
	    loglevel verbose
	7. 日志记录方式，默认为标准输出，如果配置Redis为守护进程方式运行，而这里又配置为日志记录方式为标准输出，则日志将会发送给/dev/null
	    logfile stdout
	8. 设置数据库的数量，默认数据库为0，可以使用SELECT <dbid>命令在连接上指定数据库id
	    databases 16
	9. 指定在多长时间内，有多少次更新操作，就将数据同步到数据文件，可以多个条件配合
	    save &lt;seconds&gt;   &lt;changes&gt;
	    Redis默认配置文件中提供了三个条件：
		    save 900 1
		    save 300 10
		    save 60 10000
	    分别表示900秒（15分钟）内有1个更改，300秒（5分钟）内有10个更改以及60秒内有10000个更改。
	10. 指定存储至本地数据库时是否压缩数据，默认为yes，Redis采用LZF压缩，如果为了节省CPU时间，可以关闭该选项，但会导致数据库文件变的巨大
    rdbcompression yes
	11. 指定本地数据库文件名，默认值为dump.rdb
	    dbfilename dump.rdb
	12. 指定本地数据库存放目录
	    dir ./
	13. 设置当本机为slav服务时，设置master服务的IP地址及端口，在Redis启动时，它会自动从master进行数据同步
	    slaveof &lt;masterip&gt; &lt;  masterport&gt;
	14. 当master服务设置了密码保护时，slav服务连接master的密码
	    masterauth  &lt;master-password&gt;
	15. 设置Redis连接密码，如果配置了连接密码，客户端在连接Redis时需要通过AUTH <password>命令提供密码，默认关闭
	    requirepass foobared
        
##  2. redis键值操作
  + 开启数据库连接
	
		  redis-server.exe redis.windows.conf
			redis-cli.exe -h 127.0.0.1 -p 6379
			set site www.baidu.com
			get site
	
  + redis对于所有的key的操作
	 通用的键值操作
		
		    set age 29
		   
	 如何获取当前所有的键值
	    
				keys * 
		
	 精确查询, 模糊匹配(*多个字符 ?单个字符 []或匹配)
		
				keys site
				keys s*
				keys site*
				keys sit[yea]
				keys si?e
		
	 返回随机key值
				
				randomkey
		
	 返回键值的类型
		
				type age === string
				type site === string
		
	 判断key值是否存在
				
				exists key === [1 | 0]
		
	 删除一个key值
				
				del age === [1 | 0]
		
	 重命名key值 (如果newkey已经存在, 那么覆盖)
				
				rename key newkey
				renamenx ket newkey # newkey已经存在的话, 不做修改
		
	 修改数据库 (默认使用的数据库是0号 , 参考conf文件)
			
				select 1
		
	 设置key值得有效期限  -1代表永久有效 (对于不存在的返回-2 已经过期的key也返回nil)
				
				ttl age            # 查询有效期限返回秒数 (integer) -1
				expire age 10 # 设置过期秒数
				pexpire age 10000 # 设置过期的毫秒数
				pttl age                  # 返回毫秒数过期时间
				persist key             # 将指定的key设置为永久有效
		
		
		
		
			 
## 3. redis数据类型
## 4. 事务
## 5. 消息订阅
## 6. 持久化
## 7. 集群
## 8. PHP-redis客户端
## 9. 运维
## 10. 仿微博实战
