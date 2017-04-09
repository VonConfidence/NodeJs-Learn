// 输出到终端
process.stdout.write("Hello World!" + "\n"); //Hello World!

// 通过参数读取
process.argv.forEach(function(val, index, array) {
  console.log(index + ': ' + val);
  /*
    0: D:\Program Files\nodejs\node.exe
    1: D:\FrontEnd\NodeJs\NodeLearn\processField.js
  */
});

// 获取执行路局
console.log(process.execPath); // D:\Program Files\nodejs\node.exe


// 平台信息 win32
console.log(process.platform);

// 当前 shell 的环境变量
//console.log(process.env);


// 输出当前目录
console.log('当前目录: ' + process.cwd());
//当前目录: D:\FrontEnd\NodeJs\NodeLearn

// 输出当前版本
console.log('当前版本: ' + process.version);
//当前版本: v6.10.0

// 输出内存使用情况
console.log(process.memoryUsage());
/*
{ rss: 18280448,
  heapTotal: 7376896,
  heapUsed: 3142512,
  external: 8236 }
  */

// 清空控制台
process.stdout.write('\033[2J');
process.stdout.write('\033[0f');
