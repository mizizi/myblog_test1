var http = require('http');
const querystring = require('querystring')
const mysql = require('mysql')
const option = {
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'blog'
}
let con = mysql.createConnection(option)
con.connect((err) => {
    if (!err) {
        console.log('连接数据库成功');
    }
})
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8',
        'Access-Control-Allow-Origin': req.headers.origin
    });
    if (req.url == '/login' && req.method == 'POST') {
        let str = ''
        req.on('data', (chunk) => {
            str += chunk
        })
        req.on('end', () => {
            str = querystring.parse(str)
            let sqlstr = `SELECT * FROM user WHERE username=?`
            console.log(str);
            con.query(sqlstr, str.username, function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result[0]);
                    if (result[0] !== undefined) {
                        if (result[0].password == str.password) {
                            res.end('登陆成功');
                        }
                        else {
                            res.end('密码错误请重新输入')
                        }
                    } else {
                        res.end('尚未注册该账号')
                    }
                }
            })
        })
    }
    if (req.url == '/usercheck' && req.method == 'POST') {
        let str = ''
        req.on('data', (chunk) => {
            str += chunk
        })
        req.on('end', () => {
            str = querystring.parse(str)
            let sqlstr = `SELECT username FROM user WHERE username=?`
            console.log(str);
            con.query(sqlstr, str.username, function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    if (result[0] !== undefined) {
                        res.end("1");
                    }
                    else {
                        res.end("0")
                    }
                }
            })
        })
    }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');