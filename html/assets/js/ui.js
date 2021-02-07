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

    var bannerLeft=0;
    var first=1;
    var last;
    var imgCnt=0;
    var $img = $("#scroller li");
    var $first;
    var $last;

    $img.each(function(){   // 5px 간격으로 배너 처음 위치 시킴
        $(this).css("left",bannerLeft);
        bannerLeft += $(this).width()+5;
        $(this).attr("id", "banner"+(++imgCnt));  // img에 id 속성 추가
    });


    if( imgCnt > 4){                //배너 4개 이상이면 이동시킴
        last = imgCnt;
        var interval = setInterval(slideChart, 50);
    }
    function slideChart() {
        $img.each(function(){
            $(this).css("left", $(this).position().left-1); // 1px씩 왼쪽으로 이동
        });
        $first = $("#banner"+first);
        $last = $("#banner"+last);
        if($first.position().left < -200) {    // 제일 앞에 배너 제일 뒤로 옮김
            $first.css("left", $last.position().left + $last.width()+5 );
            first++;
            last++;
            if(last > imgCnt) { last=1; }   
            if(first > imgCnt) { first=1; }
        }
    }
    function slideStop() {
        clearInterval(interval);
    }
    function slidePLay() {
        interval = setInterval(slideChart, 50);
    }
    $('#scroller').hover(function(){
        slideStop();
    }, function(){
        slidePLay();
    });
    $('.select_wrap button').on('click',function(){
        $(this).toggleClass('on');
    });
    $('.buy_detail .tab_list li').on('click',function(){
        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.buy_detail .watch_list li').removeClass('on').eq(idx).addClass('on');
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
