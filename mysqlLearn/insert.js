var mysql = require('mysql');

var options = {
  host: 'localhost',
  user: 'root',
  pwd: '',
  port: 3306,
  database: 'test'
};

var connection = mysql.createConnection(options);

connection.connect();

var addSql = 'INSERT INTO tb_user(uid, username, nickname, upassword, headimg, tag, info) VALUES(null,?,?,?,?,?,?)';
var addSqlParams = ['Zxin', 'Confidence', '123456', 'http://wx.qlogo.cn/mmopen/PiajxSqBRaEIhibkLGUL2qFsq3PjSREfMzkGB6IibENbmbhOWSE7mJUHvF4quYLS5UIjLNpwBfPq1Wop6JcXGc0gw/0', 'Singing Backetball', 'CHN'];

connection.query(addSql, addSqlParams, function(err, result) {
  if (err) {
    return console.log(err.stack);
  } else {
    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);
    console.log('INSERT ID:', result);
    /*
      INSERT ID: OkPacket {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 1,
        serverStatus: 2,
        warningCount: 0,
        message: '',
        protocol41: true,
        changedRows: 0 }
    */
    console.log('------------------------------------------------------------');
  }
});

connection.end();
