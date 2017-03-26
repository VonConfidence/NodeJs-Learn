// openssl req -key server.pem -new -x509 -out cert.pem
var crypto = require('crypto');
var fs = require('fs');

var privatePem = fs.readFileSync('server.pem');
var publicPem = fs.readFileSync('cert.pem');

var key = privatePem.toString();
var pubkey = publicPem.toString();

var data = "abcdef"

//创建签名
var sign = crypto.createSign('RSA-SHA256');
console.log(sign.update(data)); // {}

//签名  利用私钥 hex 16进制
var sig = sign.sign(key, 'hex');

//验证签名
var verify = crypto.createVerify('RSA-SHA256');
console.log(verify.update(data)); // {}

console.log(verify.update(data)); // {}

console.log(verify.verify(pubkey, sig, 'hex')); // 1
