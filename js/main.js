$(document).ready(function(){

    // browser detection
    var matched, browser;

    jQuery.uaMatch = function( ua ) {
        ua = ua.toLowerCase();

        var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
            /(msie) ([\w.]+)/.exec( ua ) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
            [];

        return {
            browser: match[ 1 ] || "",
            version: match[ 2 ] || "0"
        };
    };

    matched = jQuery.uaMatch( navigator.userAgent );
    browser = {};

    if ( matched.browser ) {
        browser[ matched.browser ] = true;
        browser.version = matched.version;
    }

    // Chrome is Webkit, but Webkit is also Safari.
    if ( browser.chrome ) {
        browser.webkit = true;
    } else if ( browser.webkit ) {
        browser.safari = true;
    }

    jQuery.browser = browser;

 
    if ($.browser.mozilla) {
        var $dom = $('html'); 
    } else {
        var $dom = $('body');
    }
    var $frame = $("iframe");
    var scroll = this.scrollTop;      

   
    $dom.bind( 'mousewheel DOMMouseScroll', function ( e ) {
        var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;
        var wh = $(window).height(); 
        var scroll = this.scrollTop + ( delta < 0 ? 1 : -1 ) * wh;
        scroll = Math.round(scroll/wh) * wh;
        $dom.stop().animate({ scrollTop: scroll }, 800, function() {
            if (wh + this.scrollTop == $(document).height()) {
                $(".navigator").hide();
            } else {
                $(".navigator").show();
            } 
        });
        e.preventDefault();
    });

    $(document).keydown(function(e) {
        // up
        if (e.which == 38 || e.which == 33) {
            var wh = $(window).height(); 
            var scroll = $(window).scrollTop() - wh;
            scroll = Math.round(scroll/wh) * wh;
            $dom.stop().animate({ scrollTop: scroll }, 800, function() {
                if (wh + this.scrollTop == $(document).height()) {
                    $(".navigator").hide();
                } else {
                    $(".navigator").show();
                } 
            });
            e.preventDefault();
        }
        // down
        if (e.which == 34 || e.which == 40) {
            var wh = $(window).height(); 
            var scroll = $(window).scrollTop() + wh;
            scroll = Math.round(scroll/wh) * wh;
            $dom.stop().animate({ scrollTop: scroll }, 800, function() {
                if (wh + this.scrollTop == $(document).height()) {
                    $(".navigator").hide();
                } else {
                    $(".navigator").show();
                } 
            });
            e.preventDefault();
        }        
    });
    $(".navigator").bind( 'click', function ( e ) {
        var wh = $(window).height(); 
        var scroll = $(window).scrollTop() + wh;
        scroll = Math.round(scroll/wh) * wh;
            $dom.stop().animate({ scrollTop: scroll }, 800, function() {

                if (wh + $(window).scrollTop() == $(document).height()) {
                    $(".navigator").hide();
                } else {
                    $(".navigator").show();
                } 
        });
    });
    
    /* image preload */
    $.fn.preload = function() {
        this.each(function(){
            $('<img/>')[0].src = this;
        });
    }
    $(['images/header-bg-2.jpg','images/header-bg-3.jpg', 'images/block3-bg-2.png', 'images/block3-bg-3.jpg', 'icons1-hover.png', 'icons2-hover.png', 'icons3-hover.png', 'icons4-hover.png']).preload();

    /* header background images slide */
    var bgHeadSlider = 1;
    var sliderDiv = $('.page1central');
    var slider2Div = $('.page2central');
    setInterval(function(){
        switch(bgHeadSlider) {
            case 1:
                sliderDiv.css('background-image', 'url("images/header-bg-2.jpg")');
                slider2Div.css('background-image', 'url("images/block3-bg-2.png")');
                break;
            case 2:
                sliderDiv.css('background-image', 'url("images/header-bg-3.jpg")');
                slider2Div.css('background-image', 'url("images/block3-bg-3.jpg")');
                break;
            case 3:
                sliderDiv.css('background-image', 'url("images/header-bg-1.jpg")');
                slider2Div.css('background-image', 'url("images/Joes_Hardware_all_devices.jpg")');
                bgHeadSlider = 1;
                break;
        }        
        bgHeadSlider++;
    }, 5000);


});

