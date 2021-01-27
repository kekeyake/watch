var $winW, $winH, $isMobile;
$(function () {

    chkBrowserSize();
    $(window).resize(function () {
        chkBrowserSize();
    });

    // 경리시스템
    $('.tab_wrap .tab_cont').hide();
    $('.tab_wrap .tab_cont:first').show();

    $('ul.tab_list li a').click(function () {
        $('ul.tab_list li').removeClass('on');
        $(this).parent('li').addClass('on');
        $('.tab_wrap .tab_cont').hide();
        var activeTab = $(this).attr('rel');
        $('#' + activeTab).fadeIn();
        swiper2.update();
        swiper3.update();
    });

    // 경리대행
    $('.tab_wrap2 .tab_cont').hide();
    $('.tab_wrap2 .tab_cont:first').show();
    $('ul.tab_list2 li a').click(function () {
        $('ul.tab_list2 li').removeClass('on');
        $(this).parent('li').addClass('on');
        $('.tab_wrap2 .tab_cont').hide();
        var activeTab = $(this).attr('rel');
        $('#' + activeTab).fadeIn();
    });


    var swiper = new Swiper('.point_wrap .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.point_wrap .swiper-button-next',
            prevEl: '.point_wrap .swiper-button-prev',
        },
        pagination: {
            el: '.point_wrap .swiper-pagination',
        },
    });

    var swiper2 = new Swiper('.sys1 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.sys1 .swiper-pagination',
        },
    });

    var swiper3 = new Swiper('.sys2 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.sys2 .swiper-pagination',
        },
    });


    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
        if ($(window).scrollTop() > 100) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky')
        }
    });
    $('#return-to-top').click(function () {      // When arrow is clicked
        $('.bg_dimmed').show();
        $('.layer_pop').show();
    });
    
    $('.bg_dimmed').off('click').on('click',function(){
        $('.bg_dimmed').hide();
        $('.layer_pop').hide();
    });

    $('nav li').off('click').on('click', function () {
        
        let _target = $(this).attr('rel');
        let moveTop = $('#' + _target).offset().top;
        if (_target == 'm1') {
            moveTop = $('#m1').offset().top - 100;
        } else if (_target == 'm2') {
            moveTop = $('#m2').offset().top - 100;
        }

        $(this).addClass('on').siblings().removeClass('on');

        if ($isMobile) {
            $('.nav_button').removeClass('nav_closed');
            if (_target == 'm1') {
                moveTop = $('#m1').offset().top - 80;
            } else if (_target == 'm2') {
                moveTop = $('#m2').offset().top - 80;
            } else if (_target == 'm4') {
                moveTop = $('#m4').offset().top - 100;
            } else if (_target == 'm5') {
                moveTop = $('#m5').offset().top - 100;
            }
            $('body,html').scrollTop(moveTop);
            mmenuClose();
        }
        $('body,html').animate({
            scrollTop: moveTop  //탑 설정 클수록 덜올라간다
        }, 1000, 'easeInOutExpo');  // 탑 이동 스크롤 속도를 조절할 수 있다.
        return false;
    });

    // mobile menu
    function mmenuClose() {
        $('body').removeClass('menu_open');
        $('.nav_button').removeClass('menu_open');
        $('.nav_wrap').removeClass('menu_open');
    }
    function mmenuOpen() {
        $('body').addClass('menu_open');
        $('.nav_button').addClass('menu_open');
        $('.nav_wrap').addClass('menu_open');
    }

    $('.nav_button').addClass('nav_button_close');

    $('.nav_button').click(function () {
        mmenuOpen();
        return false;
    });
    
    $('.closed_menu').click(function () {
        mmenuClose();
        return false;
    });

    $('.m_tab_list > li').off('click').on('click',function(){
        $(this).addClass('on').siblings('li').removeClass('on');
        var moveTop = $(this).find('a').offset().top - 80;
        $('body,html').scrollTop(moveTop);  // 탑 이동 스크롤 속도를 조절할 수 있다.
    });

    $('.input_text').off().on('focus', function () {
        $(this).next('span').addClass('on');
    });
    $('.input_text + span').off().on('click', function () {
        $(this).addClass('on');
        $(this).prev('input').focus();
    });

    $('.input_text').on('blur', function () {
        if( $(this).val() == ""){
            $(this).next('span').removeClass('on');            
            $(this).next('span').show();
        } else {
            $(this).next('span').hide();
        }
        
        
    });
    $('.notice_popup .btn_closed_x').off().on('click',function(){
        $('.notice_popup').hide();
    });
    
});

$(document).keyup(function (e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`
        $('.bg_dimmed').hide();
        $('.layer_pop').hide();
    }
});

function chkBrowserSize() {
    $winW = $(window).width();
    $winH = $(window).height();

    if ($winW < 1025) {
        $isMobile = true;
    } else {
        $isMobile = false;
    }
}
function setCookie(name, value, expirehours) {
    var todayDate = new Date();
    todayDate.setHours(todayDate.getHours() + expirehours);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}
function closeWin() {
    if (document.getElementById("pop_today").checked) {
        setCookie("ncookie", "done", 24);
    }
    document.getElementById('notice_pop').style.display = "none";
}

cookiedata = document.cookie;
if (cookiedata.indexOf("ncookie=done") < 0) {
    document.getElementById('notice_pop').style.display = "block";
} else {
    document.getElementById('notice_pop').style.display = "none";
}