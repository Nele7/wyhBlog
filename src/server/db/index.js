//mysql数据库连接

const mysql = require('mysql');

const POOL = mysql.createPool({
  host:'localhost', //连接数据库所在的主机名
  user:'root',      //MySQL用户的用户名
  password:'1234',  //MySQL用户的密码
  database:'wyh',  //链接到的数据库名称
});

module.exports = function( sql, values ) {
    return new Promise(( resolve, reject ) => {
        POOL.getConnection(function(err, connection) {
        if (err) {
            resolve( err )
        } else {
            connection.query(sql, values, ( err, data) => {
                if ( err ) {
                reject( err )
                } else {
                resolve( data )
                }
                connection.release()
            })
        }
        })
    });
}