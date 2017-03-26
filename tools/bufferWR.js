var buf = new Buffer(26);
//var len = buf.write('abcdefghijklmnopqrstuvwxyz')
for (var i = 0; i < 26; i++) {
  buf[i] = i + 97;
}

console.log(buf.toString('ascii')); // 输出: abcdefghijklmnopqrstuvwxyz
console.log(buf.toString('ascii', 0, 5)); // 输出: abcde
console.log(buf.toString('utf8', 0, 5)); // 输出: abcde
console.log(buf.toString(undefined, 0, 5)); // 使用 'utf8' 编码, 并输出: abcde

// 将 Node Buffer 转换为 JSON 对象
var json = buf.toJSON(buf);
/*
{ type: 'Buffer',
  data:
   [ 97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122 ] }
*/
console.log(json);


//缓冲区的合并  Buffer.concat(list[, totalLength])  返回一个新的缓冲对象
var buffer1 = new Buffer('菜鸟教程');
console.log(buffer1.toJSON(buffer1));
/*
  { type: 'Buffer',
    data: [ 232, 143, 156, 233, 184, 159, 230, 149, 153, 231, 168, 139] }
  232 143 156  构成一个中文字符  '菜''
*/
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());
//buffer3 内容: 菜鸟教程 www.runoob.com

// 缓冲区的比较
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
   console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
   console.log(buffer1 + " 在 " + buffer2 + "之后");
}

//缓冲区的拷贝 buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
// 拷贝一个缓冲区
var buffer4 = new Buffer(3);
buffer1.copy(buffer4);
console.log("buffer4 content: " + buffer4.toString());]]

//缓冲区的裁剪 buf.slice([start[, end]])
// 剪切缓冲区
var buffer5 = buffer2.slice(0,2);
console.log("buffer5 content: " + buffer5.toString());
console.log("buffer5 length: " + buffer5.length);

