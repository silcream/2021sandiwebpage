window.onfocus=function(){
}
window.onload=function(){
window.focus(); // 현재 window 즉 익스플러러를 윈도우 최상단에 위치
window.moveTo(0,0); // 웹 페이지의 창 위치를 0,0 (왼쪽 최상단) 으로 고정
window.resizeTo(1920,1080); // 웹페이지의 크기를 가로 1920 , 세로 1080 으로 고정(확장 및 축소)
window.scrollTo(0,250); // 페이지 상단 광고를 바로 볼 수 있게 스크롤 위치를 조정
}        
    
(function($){
    $.aniPage=function(e){
        if(e.originalEvent.wheelDelta > 0){
            $("body, html").animate({
                scrollTop:$(window).scrollTop()-$(window).height()
            },800,function(){
                    $.aniOk = 0;
            });
        }else{
            $("body, html").animate({
                scrollTop:$(window).scrollTop()+$(window).height()
            },800,function(){
                    $.aniOk = 0;
            });
        }
    };
})(jQuery);

$(function(){
    $(".contInner").height($(window).height());
    $.aniOk=0;
    $(window).scrollTop(0);
});
$(document).on("mousewheel",function(e){
    e.preventDefault();
    if($.aniOk == 0){
        $.aniPage(e);
        $.aniOk = 1;
    }
});

var bDisplay = true;
        function doDisplay(){
            var con = document.getElementById('mydiv');
            if(con.style.display == 'none'){
                con.style.display = 'block' ;
            }else{
                con.style.display = 'none';
            }
        }

var boDisplay = true;
        function dooDisplay(){
            var con = document.getElementById('mydivo');
            if(con.style.display == 'none'){
                con.style.display = 'block' ;
            }else{
                con.style.display = 'none';
            }
        }        

var boDisplay = true;
        function doooDisplay(){
            var con = document.getElementById('mydivoo');
            if(con.style.display == 'none'){
                con.style.display = 'block' ;
            }else{
                con.style.display = 'none';
            }
        }  


(document).ready(function($) {
    (".scroll_move").click(function(event){         
            event.preventDefault();
                    ('html,body').animate({scrollTop:$(this.hash).offset().top}, 700);
            });
    });
    
    // 클래스가 scroll_move인 a 태그를 눌렀을때 발생되게 하는 이벤트
    
    // $(this.hash) a태그에 있는 해쉬 값으로 스크롤링 되며 이동
    
    // 500 은 스크롤 속도


$('a').hover( function () { $(this).stop().animate({opacity : '.5'}, 500); }, function () { $(this).stop().animate({opacity : '1'}, 500); });

