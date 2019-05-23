//mysql数据库连接

const mysql = require('mysql');

// const POOL = mysql.createPool({
//     host:'localhost', //连接数据库所在的主机名
//     user:'root',      //MySQL用户的用户名
//     password:'123',  //MySQL用户的密码
//     database:'wyh',  //链接到的数据库名称
// });
const POOL = mysql.createPool({
    host:'39.105.232.6', //连接数据库所在的主机名
    user:'wyh',      //MySQL用户的用户名
    password:'85y74PfCYz6GEmYf',  //MySQL用户的密码
    database:'wyh',  //链接到的数据库名称
    // port: '3006' //端口
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