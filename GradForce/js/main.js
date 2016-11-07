$(document).ready(function() {
    var $content = $('#team-members');

//    function loop(){
//        $content.stop().animate({marginLeft:'-=20'}, 300, 'linear', loop);
//    }        
//
//    function stop(){
//        $content.stop();
//    }
//
//    $("#team-members").hover(loop, stop); // Loop-fn on mouseenter, stop-fn on mouseleave    
    
    $content.bind( 'mousewheel DOMMouseScroll', function ( e ) {
        var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;
        var scroll = ( delta < 0 ? 1 : -1 ) * 300;
        var marginLeftVar = $content.css("margin-left").replace("px", "");
        marginLeftVar -= scroll;
        $content.stop().animate({marginLeft:marginLeftVar}, 300, 'linear');        
        e.preventDefault();
    });    
});