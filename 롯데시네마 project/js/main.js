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