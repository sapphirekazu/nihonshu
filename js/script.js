$(function () {

    //ページ内スクロール
    $('a[href^="#"]').on('click', function () {
        var speed = 300;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });


    $(window).load(function () {
        var img = $("#slideshow").children("img"), // 画像を取得
            num = img.length, // 画像の数を数える
            count = 0, // 現在何枚目を表示しているかのカウンター
            interval = 5000; // 次の画像に切り替わるまでの時間(1/1000秒)

        img.eq(0).addClass("show"); // 最初の画像にshowクラス付与

        setTimeout(slide, interval); // slide関数をタイマーセット

        function slide() {
            img.eq(count).removeClass("show"); // 現在表示している画像からshowクラスを取り除く
            count++; // カウンターを一個進める
            if (count >= num) {
                count = 0; // カウンターが画像の数より大きければリセット
            }
            img.eq(count).addClass("show"); // 次の画像にshowクラス付与
            setTimeout(slide, interval); // 再びタイマーセット
        }
    });

    var jsNavButoon = $('.js-nav-button');
    var navWrap = $('.nav-wrap');
    jsNavButoon.on('click', function () {
        if (jsNavButoon.hasClass('active')) {
            jsNavButoon.removeClass('active');
            navWrap.addClass('close').removeClass('open');
        } else {
            jsNavButoon.addClass('active');
            navWrap.addClass('open').removeClass('close');
        }
    });



    //ページ上部へ戻る
    var backToTop = $('#backToTop');
    backToTop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            backToTop.fadeIn();
        } else {
            backToTop.fadeOut();
        }
    });
    $('#backToTop').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 300);
        return fals
        e;
    });

});
