/*
  openssl genrsa  -out server.pem 1024
 */
var crypto = require('crypto');
var fs = require('fs');

// pem 为读取的文件的数据
var pem = fs.readFileSync('server.pem');
var key = pem.toString('ascii');

var hmac = crypto.createHmac('sha1', key);
hmac.update('foo');
console.log(hmac.digest('hex')); //a0e8c4c26902f0a8a994f1436e57388e624e455b

/*
  var crypto = require('crypto');
  var sha1 = crypto.createHash('sha1');  //创建加密对象  加密方式sha1

  sha1.update('foo');  //往里面填充数据

  console.log(sha1.digest('hex')); //0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33
 */

/* 公开密钥加密包括4个类，Cipher, Decipher,Sign, and Verify，即加密，解密，签名，验证。

> var crypto = require('crypto');
> var fs = require('fs');
>
> var pem = fs.readFileSync('key.pem');
> var key = pem.toString('ascii');
>
> var plaintext = new Buffer('abcdefghijklmnopqrstuv');
> var encrypted = "";
> var cipher = crypto.createCipher('blowfish', key);
> ..
> encrypted += cipher.update(plaintext, 'binary', 'hex');
> encrypted += cipher.final('hex');
>
> var decrypted = "";
> var decipher = crypto.createDecipher('blowfish', key);
> decrypted += decipher.update(encrypted, 'hex', 'binary');
> decrypted += decipher.final('binary');
>
> var output = new Buffer(decrypted);
>
> output
    <Buffer 61 62 63 64 65 66 67 68 69 6a 6b 6c 6d 6e 6f 70 71 72 73 74 75 76>
> plaintext
    <Buffer 61 62 63 64 65 66 67 68 69 6a 6b 6c 6d 6e 6f 70 71 72 73 74 75 76>
>
 */