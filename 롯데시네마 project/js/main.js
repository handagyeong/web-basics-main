// x 버튼 클릭시 상단 광고 사라짐
function closeclick() {
  $('.ad').hide();
}


// 메뉴 위 호버-> 상세 메뉴 드러남
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



// 아래로 스크롤시 메인메뉴 색 반전으로 드러나기
$(window).on('scroll',function(){ 
  if($(window).scrollTop()){
       $('#menuline2').addClass('active0');
       $('.main_sub').addClass('active0');
  }
  else{ 
      $('#menuline2').removeClass('active0');
      $('.main_sub').removeClass('active0'); } });




// 인기영화 슬라이드 우측 상단 실시간 로드
function showClock() {
    var currentDate = new Date();
    var divClock = document.getElementById("clock");    
    var msg=currentDate.getMonth()+"."+currentDate.getDate()+" "+
    currentDate.getHours()+":"+currentDate.getMinutes()+" 기준";
    divClock.innerText=msg;
    setTimeout(showclock,1000);
    
}

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

// 실시간 인기영화슬라이드
var swiper = new Swiper(".swiper2", {
    slidesPerView: 5,
    navigation: {
        nextEl: ".nextbtn2",
        prevEl: ".prevbtn2"
    }
    });








// 인기영화 슬라이드: 호버->예매하기&상세정보 나타나기

$(function(){
  $('#poster01').mouseenter(function(){
    $('#posterhover01').css('visibility','visible');
  });
  $('#poster01').mouseleave(function(){
    $('#posterhover01').css('visibility','hidden');
  });
});
$(function(){
  $('#poster02').mouseenter(function(){
    $('#posterhover02').css('visibility','visible');
  });
  $('#poster02').mouseleave(function(){
    $('#posterhover02').css('visibility','hidden');
  });
});
$(function(){
  $('#poster03').mouseenter(function(){
    $('#posterhover03').css('visibility','visible');
  });
  $('#poster03').mouseleave(function(){
    $('#posterhover03').css('visibility','hidden');
  });
});
$(function(){
  $('#poster04').mouseenter(function(){
    $('#posterhover04').css('visibility','visible');
  });
  $('#poster04').mouseleave(function(){
    $('#posterhover04').css('visibility','hidden');
  });
});
$(function(){
  $('#poster06').mouseenter(function(){
    $('#posterhover06').css('visibility','visible');
  });
  $('#poster06').mouseleave(function(){
    $('#posterhover06').css('visibility','hidden');
  });
});
$(function(){
  $('#poster07').mouseenter(function(){
    $('#posterhover07').css('visibility','visible');
  });
  $('#poster07').mouseleave(function(){
    $('#posterhover07').css('visibility','hidden');
  });
});
$(function(){
  $('#poster08').mouseenter(function(){
    $('#posterhover08').css('visibility','visible');
  });
  $('#poster08').mouseleave(function(){
    $('#posterhover08').css('visibility','hidden');
  });
});
$(function(){
  $('#poster09').mouseenter(function(){
    $('#posterhover09').css('visibility','visible');
  });
  $('#poster09').mouseleave(function(){
    $('#posterhover09').css('visibility','hidden');
  });
});
$(function(){
  $('#poster10').mouseenter(function(){
    $('#posterhover10').css('visibility','visible');
  });
  $('#poster10').mouseleave(function(){
    $('#posterhover10').css('visibility','hidden');
  });
});
$(function(){
  $('#poster11').mouseenter(function(){
    $('#posterhover11').css('visibility','visible');
  });
  $('#poster11').mouseleave(function(){
    $('#posterhover11').css('visibility','hidden');
  });
});
$(function(){
  $('#poster12').mouseenter(function(){
    $('#posterhover12').css('visibility','visible');
  });
  $('#poster12').mouseleave(function(){
    $('#posterhover12').css('visibility','hidden');
  });
});
$(function(){
  $('#poster13').mouseenter(function(){
    $('#posterhover13').css('visibility','visible');
  });
  $('#poster13').mouseleave(function(){
    $('#posterhover13').css('visibility','hidden');
  });
});$(function(){
  $('#poster14').mouseenter(function(){
    $('#posterhover14').css('visibility','visible');
  });
  $('#poster14').mouseleave(function(){
    $('#posterhover14').css('visibility','hidden');
  });
});$(function(){
  $('#poster15').mouseenter(function(){
    $('#posterhover15').css('visibility','visible');
  });
  $('#poster15').mouseleave(function(){
    $('#posterhover15').css('visibility','hidden');
  });
});$(function(){
  $('#poster16').mouseenter(function(){
    $('#posterhover16').css('visibility','visible');
  });
  $('#poster16').mouseleave(function(){
    $('#posterhover16').css('visibility','hidden');
  });
});$(function(){
  $('#poster17').mouseenter(function(){
    $('#posterhover17').css('visibility','visible');
  });
  $('#poster17').mouseleave(function(){
    $('#posterhover17').css('visibility','hidden');
  });
});$(function(){
  $('#poster18').mouseenter(function(){
    $('#posterhover18').css('visibility','visible');
  });
  $('#poster18').mouseleave(function(){
    $('#posterhover18').css('visibility','hidden');
  });
});$(function(){
  $('#poster19').mouseenter(function(){
    $('#posterhover19').css('visibility','visible');
  });
  $('#poster19').mouseleave(function(){
    $('#posterhover19').css('visibility','hidden');
  });
});$(function(){
  $('#poster20').mouseenter(function(){
    $('#posterhover20').css('visibility','visible');
  });
  $('#poster20').mouseleave(function(){
    $('#posterhover20').css('visibility','hidden');
  });
});
$(function(){
  $('#poster21').mouseenter(function(){
    $('#posterhover21').css('visibility','visible');
  });
  $('#poster21').mouseleave(function(){
    $('#posterhover21').css('visibility','hidden');
  });
});
$(function(){
  $('#poster22').mouseenter(function(){
    $('#posterhover22').css('visibility','visible');
  });
  $('#poster22').mouseleave(function(){
    $('#posterhover22').css('visibility','hidden');
  });
});