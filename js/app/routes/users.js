var express = require('express');
var router = express.Router();
const miziquery = require('../miziquery')

router.post('/login', async (req, res, next) => {
  console.log(req.body);
  let arr = [req.body.username, req.body.password]
  console.log(arr);
  let sqlstr = `SELECT * FROM user WHERE username=? AND password=?`
  let data = await miziquery(sqlstr, arr)
  console.log(data);
  if (data.length > 0) {
    res.send('登录成功');
  }
  else {
    res.send('登录失败,请检查用户名和密码')
  }
});
router.post('/register', async (req, res, next) => {
  let arr = [req.body.username, req.body.password]
  let sqlstr = `SELECT * FROM user WHERE username=? AND password=?`
  let data = await miziquery(sqlstr, arr)
  if (data.length > 0) {
    res.send('登录成功');
  }
  else {
    res.send('登录失败,请检查用户名和密码')
  }
});

module.exports = router;
