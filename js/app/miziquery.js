const mysql = require('mysql')
const option = {
    host: "localhost",
    user: 'root',
    password: 'admin123',
    database: 'blog'
}
const con = mysql.createConnection(option)
con.connect((err) => {
    if (!err) {
        console.log('数据库连接成功');
    }
})
let miziquery = function (sqlstr, arr) {
    return new Promise((resolve, reject) => {
        con.query(sqlstr, arr, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}
module.exports = miziquery