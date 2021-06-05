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
$(window).on('scroll',function(){ 
    if($(window).scrollTop()){
         $('#menuline2').addClass('active');
    }
    else{ 
        $('#menuline2').removeClass('active'); } });

// 공지 수직 슬라이드
var swiper3 = new Swiper('.swiper3', {
    direction: 'vertical',
    autoplay: true,
    loop: true,
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
    // mousewheel: true,
    // keyboard: true
    });

$(".swiper-button-stop").click(function(){
    swiper1.autoplay.stop();
    $('#stopbtn').addClass('active');
    $('#startbtn').addClass('active');
    });

$(".swiper-button-start").click(function(){
    swiper1.autoplay.play();
    $('#stopbtn').removeClass('active');
    $('#startbtn').removeClass('active');
    });
