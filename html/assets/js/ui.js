var $winW, $winH, $isMobile;
$(function () {

    chkBrowserSize();
    $(window).resize(function () {
        chkBrowserSize();
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

    $('.faq_list button').on('click' ,function(){
        $(this).toggleClass('on').next().slideToggle("fast");
    });

    $('.shop_cont .cont').hide();
    $('.shop_cont .cont:first-child').show();
    $('.tab_list a').on('click', function(){
        var tg = $(this).attr('rel');
        $(this).addClass('on').siblings().removeClass('on');
        $('.shop_cont .cont').hide();
        $('.shop_cont .' + tg).show();
    });
    
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
