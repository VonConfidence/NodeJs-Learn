var fs = require("fs");

console.log("准备打开文件！");
fs.stat('input.txt', function(err, stats) {
  if (err) {
    return console.error(err);
  }
  console.log(stats);
  /*
    { dev: 1433029343,
      mode: 33206,
      nlink: 1,
      uid: 0,
      gid: 0,
      rdev: 0,
      blksize: undefined,
      ino: 5066549580963623,
      size: 625,
      blocks: undefined,
      atime: 2017-03-16T07:47:58.876Z,
      mtime: 2017-03-16T07:48:25.046Z,
      ctime: 2017-03-16T07:48:25.046Z,
      birthtime: 2017-03-16T07:47:58.876Z }
  */
  console.log("读取文件信息成功！");

  // 检测文件类型
  console.log("是否为文件(isFile) ? " + stats.isFile());  //true
  console.log("是否为目录(isDirectory) ? " + stats.isDirectory());  //false
});

/*
  方法            描述
  stats.isFile()          如果是文件返回 true，否则返回 false。
  stats.isDirectory()     如果是目录返回 true，否则返回 false。
  stats.isBlockDevice()   如果是块设备返回 true，否则返回 false。
  stats.isCharacterDevice() 如果是字符设备返回 true，否则返回 false。
  stats.isSymbolicLink()  如果是软链接返回 true，否则返回 false。
  stats.isFIFO()          如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
  stats.isSocket()        如果是 Socket 返回 true，否则返回 false。
*/
