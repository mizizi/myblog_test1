var express = require('express');
var router = express.Router();
const miziquery = require('../miziquery')

router.post('/login', async (req, res, next) => {
  console.log(req.body);
  let arr = [req.body.username, req.body.password]
  console.log(arr);
  let sqlstr = `SELECT * FROM user WHERE username=? AND 'password'=?`
  let data = await miziquery(sqlstr, arr)
  // data = JSON.parse(data)
  console.log(data);
  // if (req.body.username) {

  // }
  res.send('respond with a resource');
});

module.exports = router;
