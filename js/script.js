let lessonDate = new Date("May 26, 2023 09:30:00");

let countDown = setInterval(callCaountDown, 1000);

function callCaountDown(){
    let currentDate = new Date().getTime();

    let remainingTime = lessonDate - currentDate;

    let secondsCountdown = Math.floor(remainingTime / 1000);

    let minutesCountdown = Math.floor(secondsCountdown / 60);
    
    let hoursCountdown = Math.floor(minutesCountdown / 60);
    
    let daysCountdown = Math.floor(hoursCountdown / 24)
  
    secondsCountdown = secondsCountdown % 60;
    
    minutesCountdown = minutesCountdown % 60;
    
    hoursCountdown = hoursCountdown % 24;

    document.getElementById("secondsTimer").innerHTML = twoDigits(secondsCountdown);
    
    document.getElementById("minutesTimer").innerHTML = twoDigits(minutesCountdown);
    
    document.getElementById("hoursTimer").innerHTML = twoDigits(hoursCountdown);
    
    document.getElementById("daysTimer").innerHTML = twoDigits(daysCountdown);

    
}

function twoDigits(myNumber){
    return myNumber.toString().padStart(2, "0");
}

