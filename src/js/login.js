require('../less/login.less')
require('../js/main');

$('.member > li').on('click', function () {
    if ($(this).hasClass('join-form')) {
        $('.member-login-form').removeClass('active');
        var memberJoin = $(this).parents('body').find('.member-join-form');
        memberJoin.addClass('active');
        $('.join-form').css('opacity', '1.0');
        $('.login-form').css('opacity', '0.5');
    }
    else {
        $('.member-join-form').removeClass('active');
        var memberLogin = $(this).parents('body').find('.member-login-form');
        memberLogin.addClass('active');
        $('.join-form').css('opacity', '0.5');
        $('.login-form').css('opacity', '1.0');
    }
});

//...


function signIn() {
    var email = $('#member-id').val().trim();
    var password = $('#member-pass').val().trim();
    var remember = $('.login-check input').prop('checked');

    if (!email) {
        alert('이메일을 입력하세요.');
        $('#member-id').focus();
        return;
    }
    else if (!password) {
        alert('비밀번호를 입력하세요.');
        $('#member-pass').focus();
        return;
    }

    ajax({
        url: '/api/member/signin',
        method: 'POST',
        data: {
            email: email,
            password: password,
            remember: remember
        },
        success: function(result) {
            alert(result.email + '님 반갑습니다.');
            closeMemberLayer();
        }
    });
}

function signOut() {
    $.ajax({
        url: '/api/member/signout',
        success: function() {
            closeMemberLayer(function() {
                location.href = '/';
            });
        }
    });
}

$('#login-btn').on('click', function () {
    var email = $('#member-id').val().trim();
    var password = $('#member-pass').val().trim();
    var remember = $('.login-check input').prop('checked');

    if (!email) {
        alert('이메일을 입력하세요.');
        $('#member-id').focus();
        return;
    }
    else if (!password) {
        alert('비밀번호를 입력하세요.');
        $('#member-pass').focus();
        return;
    }

    location.href = './sub.html';
});