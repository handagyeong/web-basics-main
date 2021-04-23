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



// 배경슬라이드쇼

// 슬라이드 이미지 선택자
const sliderImages = document.querySelectorAll('#slider')
// 오른쪽 화살표 선택자
const arrowRight = document.querySelector('#right')
// 왼쪽 화살표 선택자
const arrowLeft = document.querySelector('#left')
// 현재 보여지는 슬라이드 번호
let current = 0;
// 동그라미 선택자
const dots = document.querySelectorAll('.dot')
const dot1 = document.querySelector('.dot1')
const dot2 = document.querySelector('.dot2')
const dot3 = document.querySelector('.dot3')
const dot4 = document.querySelector('.dot4')
const dot5 = document.querySelector('.dot5')

// 슬라이드 이미지 리셋
const reset = () => {
    sliderImages.forEach((el) => el.getElementsByClassName.display = 'none')
    dots.forEach((el) => el.getElementsByClassName.background = 'rgba(0,0,0,0.5)')
}

// 자동 슬라이드 기능을 위한 함수
const autoSlide = () => {
    // 모든슬라이드를 안보이게
    reset()
    // 마지막슬라이드라면
    if (current === sliderImages.length -1) {
        current = -1
    }
    // 마지막 슬라이드가 아니라면 current 에 1을 더함
    current++
    // 슬라이드 이미지 배열에서 index값이 current인 이미지를 보이는 상태로 설정
    sliderImages[current].style.display = 'block'
    dots[current].style.background = '#1107ff'
    
}

// 수동 슬라이드를 위한 함수들
// 1. 왼쪽 화살표에 클릭 이벤트가 발생할 시 작동할 함수
const slideLeft = () => {
    // 모든 슬라이드 이미지 display를 none으로 리셋
    reset()
    // current(현재 보여지는 슬라이드 이미지)의 
    // 이전 슬라이드 이미지가 보이도록 스타일 변경
    sliderImages[current - 1].style.display = 'block';
    dots[current - 1].style.background = '#1107ff'
    // current값을 1만큼 뺌
    current--;
}
// 2. 오른쪽 화살표에 클릭 이벤트가 발생할 시 작동할 함수
const slideRight = () => {
    // 모든 슬라이드 이미지 display를 none으로 리셋
    reset()
    // current(현재 보여지는 슬라이드 이미지)의 
    // 다음 슬라이드 이미지가 보이도록 스타일 변경 
    sliderImages[current + 1].style.display = 'block';
    dots[current + 1].style.background = '#1107ff'
    // current값을 1만큼 더함
    current++;
}

// 오른쪽 화살표를 클릭할 시 작동하는 익명의 함수
arrowLeft.addEventListener('click', function() {
    // 만약 current값이 0이라면,
    // 즉 현재 보이는 슬라이드 이미지가 첫번째 순서라면,
    if(current === 0) {
        // current값을 슬라이드 이미지 배열의 길이로 변경
        current = sliderImages.length;
    }
    slideLeft()
})
// 왼쪽 화살표를 클릭할 시 작동하는 익명의 함수
arrowRight.addEventListener('click', function() {
    // 만약 current값이 슬라이드 이미지 배열 길이 - 1만큼의 값이라면,
    // 즉 현재 보이는 슬라이드 이미지가 마지막 순서라면,
    if(current === sliderImages.length - 1) {
        // current값을 -1로 설정
        current = -1;
    }
    slideRight()
})
// 첫번째 동그라미 클릭할 시 작동하는 익명의 함수
dot1.addEventListener("click", function(){
    reset()
    current = 0
    sliderImages[current].style.display = 'block';
    dots[current].style.background = '#1107ff'
})

// 두번째 동그라미 클릭할 시 작동하는 익명의 함수
dot2.addEventListener("click", function(){
    reset()
    current = 1
    sliderImages[current].style.display = 'block';
    dots[current].style.background = '#1107ff'
})

// 세번째 동그라미 클릭할 시 작동하는 익명의 함수
dot3.addEventListener("click", function(){
    reset()
    current = 2
    sliderImages[current].style.display = 'block';
    dots[current].style.background = '#1107ff'
})

// 네번째 동그라미 클릭할 시 작동하는 익명의 함수
dot4.addEventListener("click", function(){
    reset()
    current = 3
    sliderImages[current].style.display = 'block';
    dots[current].style.background = '#1107ff'
})

// 다섯번째 동그라미 클릭할 시 작동하는 익명의 함수
dot5.addEventListener("click", function(){
    reset()
    current = 4
    sliderImages[current].style.display = 'block';
    dots[current].style.background = '#1107ff'
})
