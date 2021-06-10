// 인기영화 슬라이드 우측 상단 실시간 로드
function showClock() {
    var currentDate = new Date();
    var divClock = document.getElementById("clock");
    // if (currentDate.getMinutes()<10) {
    //     var msg = "0" + currentDAte.getMinutes()+" 기준";
    // }
    // else {
    //     var msg = currentDAte.getMinutes()+" 기준";
    // }
    // // msg+=currentDate.getMinutes()+"분";
    
    var msg=currentDate.getMonth()+"."+currentDate.getDate()+" "+
    currentDate.getHours()+":"+currentDate.getMinutes()+" 기준";
    divClock.innerText=msg;
    setTimeout(showclock,1000);
    
}

// 아래로 스크롤시 메인메뉴 색 반전으로 드러나기
$(window).on('scroll',function(){ 
    if($(window).scrollTop()){
         $('#menuline2').addClass('active0');
         $('.main_sub').addClass('active0');
    }
    else{ 
        $('#menuline2').removeClass('active0');
        $('.main_sub').removeClass('active0'); } });

// 공지 수직 슬라이드
var swiper3 = new Swiper('.swiper3', {
    direction: 'vertical',
    autoplay: true,
    loop: true,
    speed:500,
    });


// 메인슬라이드
const swiper1 = new Swiper(".swiper1", {
    cssMode: true,
    direction: 'horizontal',
    autoplay: {
        delay:2500,
        disableOnInteraction:false,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed:2000,
    mousewheel: {
        invert:true
    },
    keyboard: {
        invert:true
    },
    });

    // 메인슬라이드 정지/play 버튼
$(document).on("click",".swiper-button-stop",function(){
    swiper1.autoplay.stop();
    $('#stopbtn').addClass('active');
    $('#startbtn').addClass('active');
    });

$(document).on("click",".swiper-button-start",function(){
    swiper1.autoplay.play();
    $('#stopbtn').removeClass('active');
    $('#startbtn').removeClass('active');
    });

// 인기영화슬라이드
var swiper = new Swiper(".swiper2", {
    slidesPerView: 5,
    navigation: {
        nextEl: ".nextbtn2",
        prevEl: ".prevbtn2"
    }
    });

// 호버->메뉴 드러남
$(function(){
    $('.main_title1').mouseenter(function(){
      $('.main_sub1').css('visibility','visible');
    });
    $('.main_title1').mouseleave(function(){
      $('.main_sub1').css('visibility','hidden');
    });
});

$(function(){
    $('.main_title2').mouseenter(function(){
      $('.main_sub2').css('visibility','visible');
    });
    $('.main_title2').mouseleave(function(){
      $('.main_sub2').css('visibility','hidden');
    });
});

$(function(){
    $('.main_title3').mouseenter(function(){
      $('.main_sub3').css('visibility','visible');
    });
    $('.main_title3').mouseleave(function(){
      $('.main_sub3').css('visibility','hidden');
    });
});

$(function(){
    $('.main_title4').mouseenter(function(){
      $('.main_sub4').css('visibility','visible');
    });
    $('.main_title4').mouseleave(function(){
      $('.main_sub4').css('visibility','hidden');
    });
});

$(function(){
    $('.main_title5').mouseenter(function(){
      $('.main_sub5').css('visibility','visible');
    });
    $('.main_title5').mouseleave(function(){
      $('.main_sub5').css('visibility','hidden');
    });
});


// x 버튼 클릭시 상단 광고 사라짐 -jquery
$(document).on("click","#close",function(){
  $('.ad').hide();
});