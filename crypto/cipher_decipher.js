var crypto = require('crypto');
var cipher = crypto.createCipher('aes-256-cbc', 'InmbuvP6Z8')
var text = "123|123123123123123";

// 第一个参数: text表示加密数据 第二个参数: 传入数据的格式，可以是’utf8’, ‘ascii’ 或 ‘binary’，默认是 ‘binary’。
// 第三个参数: 返回block的数据格式。
var crypted = cipher.update(text, 'utf8', 'hex')
crypted += cipher.final('hex')
console.log('加密后数据: ' + crypted);

var decipher = crypto.createDecipher('aes-256-cbc', 'InmbuvP6Z8')
var dec = decipher.update(crypted, 'hex', 'utf8')
dec += decipher.final('utf8')
console.log('解密后的数据: ' + dec);
