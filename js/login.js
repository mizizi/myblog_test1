$(() => {
    // 登录
    $('#signin-form').on('submit', function (e) {
        e.preventDefault()
        let data = $('#signin-form').serialize()
        $.post('http://localhost:3000/users/login', data, function (res) {
            console.log(res);
        })
        // $('#login-form')[0].reset()
    })
    // 注册
    $('#signup-form').on('submit', function (e) {
        e.preventDefault()
        let data = $('#signup - form').serialize()
        $.post('http://localhost:3000/users/register', data, function (res) {
            console.log(res);
        })
        console.log(data);
        // $('#login-form')[0].reset()
    })
    //检测
    $('#username').on('blur', function () {
        let data = {
            username: $('#username').val()
        }
        $.post('http://localhost:8081/usercheck', data, function (res) {
            console.log(res);
            if (res == 1) {
                $('#username').siblings('span').eq(0).removeClass().addClass('glyphicon glyphicon-ok')
            } else if (res == 0) {
                $('#username').siblings('span').eq(0).removeClass().addClass('glyphicon glyphicon-remove')
            }
        })
    })
})