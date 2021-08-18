$(() => {
    $('#login-form').on('submit', function (e) {
        e.preventDefault()
        let data = $('#login-form').serialize()
        $.post('http://localhost:8081/login', data, function (res) {
            console.log(res);
        })
        $('#login-form')[0].reset()
    })
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